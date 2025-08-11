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
        )
      `)
      .eq('id', contractId)
      .single();

    if (contractError || !contract) {
      console.error('Contract fetch error:', contractError);
      throw new Error("Contract not found");
    }

    // Fetch the contract owner's profile separately
    const { data: ownerProfile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('first_name, last_name, email')
      .eq('id', contract.sent_by)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
      // Continue without profile info if not found
    }

    // Fetch the signature data
    const { data: signature, error: signatureError } = await supabaseClient
      .from('signatures')
      .select('*')
      .eq('contract_id', contractId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (signatureError) {
      console.error('Signature fetch error:', signatureError);
    }

    // Get contract owner email
    const ownerEmail = ownerProfile?.email;
    const ownerName = ownerProfile ? `${ownerProfile.first_name} ${ownerProfile.last_name}`.trim() : 'Contract Owner';

    if (!ownerEmail) {
      throw new Error("Contract owner email not found");
    }

    // Generate the contract view link
    const baseUrl = req.headers.get("origin") || "https://yourdomain.com";
    const contractViewLink = `${baseUrl}/contracts/${contractId}`;

    // Create signature display based on type
    let signatureDisplay = '';
    if (signature) {
      if (signature.signature_type === 'drawn' && signature.signature_data) {
        // For drawn signatures, we need to upload to storage and get a public URL
        // since email clients block data URLs for security reasons
        let signatureUrl = '';
        
        try {
          // Convert data URL to blob
          const base64Data = signature.signature_data.replace(/^data:image\/[a-z]+;base64,/, '');
          const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
          
          // Upload to Supabase storage
          const fileName = `signature_${contractId}_${Date.now()}.png`;
          const { data: uploadData, error: uploadError } = await supabaseClient.storage
            .from('contract-documents')
            .upload(`signatures/${fileName}`, binaryData, {
              contentType: 'image/png',
              upsert: false
            });
          
          if (uploadError) {
            console.error('Error uploading signature:', uploadError);
            // Fallback to text description if upload fails
            signatureDisplay = `
              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; text-align: center;">
                <h4 style="margin: 0 0 10px 0; color: #333;">Digital Signature:</h4>
                <p style="color: #666; font-style: italic;">Digital signature captured (view in contract dashboard for full signature)</p>
              </div>
            `;
          } else {
            // Get public URL for the uploaded signature
            const { data: urlData } = supabaseClient.storage
              .from('contract-documents')
              .getPublicUrl(`signatures/${fileName}`);
            
            signatureUrl = urlData.publicUrl;
            
            signatureDisplay = `
              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; text-align: center;">
                <h4 style="margin: 0 0 10px 0; color: #333;">Digital Signature:</h4>
                <img src="${signatureUrl}" alt="Digital Signature" style="max-width: 300px; max-height: 100px; border: 1px solid #ddd; background: white; padding: 10px;">
              </div>
            `;
          }
        } catch (uploadError) {
          console.error('Error processing signature for email:', uploadError);
          // Fallback to text description if processing fails
          signatureDisplay = `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; text-align: center;">
              <h4 style="margin: 0 0 10px 0; color: #333;">Digital Signature:</h4>
              <p style="color: #666; font-style: italic;">Digital signature captured (view in contract dashboard for full signature)</p>
            </div>
          `;
        }
      } else if (signature.signature_type === 'typed' && signature.signature_data) {
        // For typed signatures, display the text in a signature style
        signatureDisplay = `
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Typed Signature:</h4>
            <div style="font-family: 'Brush Script MT', cursive; font-size: 24px; color: #2563eb; background: white; padding: 15px; border: 1px solid #ddd; display: inline-block;">
              ${signature.signature_data}
            </div>
          </div>
        `;
      }
    }

    // Compose the notification email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #ff6b35;">🎉 Contract Signed Successfully!</h2>
        
        <p>Dear ${ownerName},</p>
        
        <p>Great news! Your contract <strong>"${contract.contract_templates?.name || 'Contract'}"</strong> has been successfully signed.</p>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <h3 style="margin: 0 0 15px 0; color: #10b981;">Contract Details:</h3>
          <p style="margin: 5px 0;"><strong>Signer:</strong> ${signerName}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${signerEmail}" style="color: #2563eb;">${signerEmail}</a></p>
          <p style="margin: 5px 0;"><strong>Company:</strong> ${contract.customer_company || 'Not specified'}</p>
          <p style="margin: 5px 0;"><strong>Signature Type:</strong> ${signatureType === 'drawn' ? 'Digital Signature' : 'Typed Signature'}</p>
          <p style="margin: 5px 0;"><strong>Signed On:</strong> ${new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
          <p style="margin: 5px 0;"><strong>Terms Accepted:</strong> ${signature?.terms_accepted ? 'Yes' : 'No'}</p>
        </div>
        
        ${signatureDisplay}
        
        <p style="margin: 30px 0;">
          <a href="${contractViewLink}" style="background: #ff6b35; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Contract Details</a>
        </p>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <h4 style="margin: 0 0 10px 0; color: #92400e;">Next Steps:</h4>
          <ul style="margin: 10px 0; padding-left: 20px; color: #92400e;">
            <li>Download the completed contract from your dashboard</li>
            <li>Review the signature and contract details</li>
            <li>Consider countersigning if required</li>
            <li>Send a fully executed copy to the signer</li>
          </ul>
        </div>
        
        <p style="font-size: 14px; color: #666;">If you have any questions, please contact us at <a href="mailto:info@staydiasports.com" style="color: #2563eb;">info@staydiasports.com</a></p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="font-size: 12px; color: #999; text-align: center;">© 2024 Staydia Sports. All rights reserved.</p>
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