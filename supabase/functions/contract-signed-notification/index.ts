import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.51.0";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContractSignedRequest {
  contractId: string;
  signerName: string;
  signerEmail: string;
  signatureType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role key for admin access
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { contractId, signerName, signerEmail, signatureType }: ContractSignedRequest = await req.json();

    console.log('Contract signed notification for:', contractId);

    // Fetch the contract details with owner information
    const { data: contract, error: contractError } = await supabaseClient
      .from('contracts')
      .select(`
        *,
        contract_templates (
          name,
          content,
          terms_and_conditions
        ),
        profiles!contracts_sent_by_fkey (
          first_name,
          last_name,
          email
        )
      `)
      .eq('id', contractId)
      .single();

    if (contractError || !contract) {
      console.error('Contract fetch error:', contractError);
      throw new Error("Contract not found");
    }

    // Get contract owner email
    const ownerEmail = contract.profiles?.email;
    const ownerName = contract.profiles ? `${contract.profiles.first_name} ${contract.profiles.last_name}`.trim() : 'Contract Owner';

    if (!ownerEmail) {
      throw new Error("Contract owner email not found");
    }

    // Generate the contract view link
    const baseUrl = req.headers.get("origin") || "https://yourdomain.com";
    const contractViewLink = `${baseUrl}/contracts/${contractId}`;

    // Compose the notification email
    const emailHtml = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <img src="${baseUrl}/lovable-uploads/f7690435-d61e-4b90-8008-5e6981cb119d.png" alt="Staydia Sports" style="height: 40px;">
        </div>
        
        <div style="background: #f9f9f9; padding: 30px;">
          <h1 style="color: #333; margin-bottom: 20px;">🎉 Contract Signed Successfully!</h1>
          
          <p>Dear ${ownerName},</p>
          
          <p>Great news! Your contract <strong>"${contract.contract_templates?.name}"</strong> has been successfully signed.</p>
          
          <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="margin: 0 0 10px 0; color: #10b981;">Contract Details:</h3>
            <p style="margin: 5px 0;"><strong>Signer:</strong> ${signerName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${signerEmail}</p>
            <p style="margin: 5px 0;"><strong>Signature Type:</strong> ${signatureType === 'drawn' ? 'Digital Signature' : 'Typed Signature'}</p>
            <p style="margin: 5px 0;"><strong>Signed On:</strong> ${new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${contractViewLink}" 
               style="background: #ff6b35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
              View Contract Details
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            You can now download the completed contract with all signatures from your contracts dashboard.
          </p>
          
          <p style="color: #666; font-size: 14px;">
            Next steps: You may want to countersign this contract and return a fully executed copy to the signer.
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

    // Send the notification email
    const emailResponse = await resend.emails.send({
      from: "Staydia Sports <contracts@staydiasports.com>",
      to: [ownerEmail],
      subject: `Contract Signed: ${contract.contract_templates?.name || 'Your Contract'}`,
      html: emailHtml,
    });

    console.log("Contract signed notification sent successfully:", emailResponse);

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
    console.error("Error in contract-signed-notification function:", error);
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