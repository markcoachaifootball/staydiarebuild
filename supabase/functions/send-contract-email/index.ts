import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.51.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendContractEmailRequest {
  contractId: string;
  recipientEmail: string;
  recipientName?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get the authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    // Set the auth token for the client
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);
    
    if (authError || !user) {
      throw new Error("Unauthorized");
    }

    const { contractId, recipientEmail, recipientName, message }: SendContractEmailRequest = await req.json();

    console.log('User ID:', user.id);
    console.log('Contract ID:', contractId);

    // Fetch the contract details
    const { data: contract, error: contractError } = await supabaseClient
      .from('contracts')
      .select('*')
      .eq('id', contractId)
      .maybeSingle();

    console.log('Contract found:', !!contract);
    console.log('Contract error:', contractError);
    console.log('Contract data:', contract);

    if (contractError) {
      console.error('Database error:', contractError);
      throw new Error(`Database error: ${contractError.message}`);
    }
    
    if (!contract) {
      throw new Error("Contract not found or unauthorized");
    }

    // Generate the signing link
    const baseUrl = req.headers.get("origin") || "https://yourdomain.com";
    const signingLink = `${baseUrl}/sign/${contract.signing_token}`;

    // Compose the email
    const emailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <img src="${baseUrl}/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" alt="Staydia Sports" style="height: 40px;">
        </div>
        
        <div style="background: #f9f9f9; padding: 30px;">
          <h1 style="color: #333; margin-bottom: 20px;">Contract Signing Request</h1>
          
          ${recipientName ? `<p>Dear ${recipientName},</p>` : '<p>Hello,</p>'}
          
          <p>You have received a contract from Staydia Sports that requires your digital signature.</p>
          
          ${message ? `<div style="background: #fff; padding: 20px; border-left: 4px solid #ff6b35; margin: 20px 0;">
            <p style="margin: 0; font-style: italic;">"${message}"</p>
          </div>` : ''}
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${signingLink}" 
               style="background: #ff6b35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
              Review & Sign Contract
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            This link is secure and unique to you. Please do not share it with others.
          </p>
          
          <p style="color: #666; font-size: 14px;">
            If you have any questions, please contact us at support@staydiademo.com
          </p>
        </div>
        
        <div style="background: #333; color: #fff; padding: 20px; text-align: center; font-size: 12px;">
          © 2024 Staydia Sports. All rights reserved.
        </div>
      </div>
    `;

    // Send the email
    const emailResponse = await resend.emails.send({
      from: "Staydia Sports <contracts@staydiasports.com>",
      to: [recipientEmail],
      subject: "Contract Signature Required - Staydia Sports",
      html: emailHtml,
    });

    console.log("Contract email sent successfully:", emailResponse);

    // Update contract status to 'sent'
    const { error: updateError } = await supabaseClient
      .from('contracts')
      .update({ 
        status: 'sent',
        sent_at: new Date().toISOString()
      })
      .eq('id', contractId);

    if (updateError) {
      console.error("Error updating contract status:", updateError);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contract-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);