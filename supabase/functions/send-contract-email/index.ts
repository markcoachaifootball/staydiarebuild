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

    // Compose a simple, clean email to avoid spam filters
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #ff6b35;">Contract Signing Request</h2>
        
        ${recipientName ? `<p>Dear ${recipientName},</p>` : '<p>Hello,</p>'}
        
        <p>You have received a contract from Staydia Sports that requires your digital signature.</p>
        
        ${message ? `<p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #ff6b35; margin: 20px 0;"><em>${message}</em></p>` : ''}
        
        <p style="margin: 30px 0;">
          <a href="${signingLink}" style="background: #ff6b35; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold;">Review & Sign Contract</a>
        </p>
        
        <p style="font-size: 14px; color: #666;">This link is secure and unique to you. Please do not share it with others.</p>
        
        <p style="font-size: 14px; color: #666;">If you have any questions, please contact us at info@staydiasports.com</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="font-size: 12px; color: #999; text-align: center;">© 2024 Staydia Sports. All rights reserved.</p>
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