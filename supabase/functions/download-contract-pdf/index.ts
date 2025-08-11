import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.51.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DownloadContractRequest {
  contractId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role key
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { contractId }: DownloadContractRequest = await req.json();

    console.log('Generating PDF for contract:', contractId);

    // Fetch the contract details with template and signature
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

    // Fetch the signature data
    const { data: signature, error: signatureError } = await supabaseClient
      .from('signatures')
      .select('*')
      .eq('contract_id', contractId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (signatureError) {
      console.error('Signature fetch error:', signatureError);
    }

    // Fetch the contract owner's profile
    const { data: ownerProfile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('first_name, last_name, email, company_name')
      .eq('id', contract.sent_by)
      .maybeSingle();

    // Generate HTML content for the PDF
    const ownerName = ownerProfile ? `${ownerProfile.first_name || ''} ${ownerProfile.last_name || ''}`.trim() : 'Contract Owner';
    const ownerCompany = ownerProfile?.company_name || 'Staydia Sports';
    
    const signatureSection = signature ? `
      <div style="margin-top: 40px; padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9;">
        <h3 style="margin: 0 0 15px 0; color: #333;">Digital Signature</h3>
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <p><strong>Signed by:</strong> ${contract.customer_name || 'Unknown'}</p>
            <p><strong>Email:</strong> ${contract.customer_email || 'Unknown'}</p>
            <p><strong>Company:</strong> ${contract.customer_company || 'Not specified'}</p>
            <p><strong>Date:</strong> ${signature.created_at ? new Date(signature.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }) : 'Unknown'}</p>
            <p><strong>Signature Type:</strong> ${signature.signature_type === 'drawn' ? 'Digital Signature' : 'Typed Signature'}</p>
            <p><strong>Terms Accepted:</strong> ${signature.terms_accepted ? 'Yes' : 'No'}</p>
          </div>
          ${signature.signature_type === 'drawn' && signature.signature_data ? `
            <div style="text-align: center;">
              <img src="${signature.signature_data}" alt="Digital Signature" style="max-width: 300px; max-height: 100px; border: 1px solid #ccc; background: white; padding: 10px;">
            </div>
          ` : signature.signature_type === 'typed' && signature.signature_data ? `
            <div style="text-align: center;">
              <div style="font-family: 'Brush Script MT', cursive; font-size: 24px; color: #2563eb; background: white; padding: 15px; border: 1px solid #ccc; display: inline-block;">
                ${signature.signature_data}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    ` : `
      <div style="margin-top: 40px; padding: 20px; border: 1px solid #ddd; background-color: #fff3cd;">
        <h3 style="margin: 0 0 15px 0; color: #856404;">Contract Status</h3>
        <p><strong>Status:</strong> ${contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}</p>
        <p><em>This contract has not been signed yet.</em></p>
      </div>
    `;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${contract.contract_templates?.name || 'Contract'}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #ff6b35;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .contract-info {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
          }
          .contract-content {
            margin-bottom: 30px;
            line-height: 1.8;
          }
          .terms {
            background-color: #f0f9ff;
            padding: 20px;
            border-left: 4px solid #2563eb;
            margin: 20px 0;
          }
          h1, h2, h3 {
            color: #333;
          }
          .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${contract.contract_templates?.name || 'Contract'}</h1>
          <p><strong>${ownerCompany}</strong></p>
        </div>

        <div class="contract-info">
          <h2>Contract Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h3>From:</h3>
              <p><strong>${ownerName}</strong><br>
              ${ownerProfile?.email || ''}<br>
              ${ownerCompany}</p>
            </div>
            <div>
              <h3>To:</h3>
              <p><strong>${contract.customer_name || 'Not specified'}</strong><br>
              ${contract.customer_email}<br>
              ${contract.customer_company || 'Not specified'}</p>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <p><strong>Contract ID:</strong> ${contract.id}</p>
            <p><strong>Created:</strong> ${new Date(contract.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
            <p><strong>Status:</strong> ${contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}</p>
            ${contract.expires_at ? `<p><strong>Expires:</strong> ${new Date(contract.expires_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>` : ''}
          </div>
        </div>

        <div class="contract-content">
          <h2>Contract Details</h2>
          ${contract.contract_templates?.content || '<p>No contract content available.</p>'}
        </div>

        ${contract.contract_templates?.terms_and_conditions ? `
          <div class="terms">
            <h3>Terms and Conditions</h3>
            ${contract.contract_templates.terms_and_conditions}
          </div>
        ` : ''}

        ${signatureSection}

        <div class="footer">
          <p>This document was generated on ${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
          <p>© ${new Date().getFullYear()} ${ownerCompany}. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    // Use Puppeteer to generate PDF from HTML
    const puppeteer = await import("https://deno.land/x/puppeteer@16.2.0/mod.ts");
    
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle2' });
    
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      }
    });
    
    await browser.close();

    // Generate filename
    const filename = `${contract.contract_templates?.name || 'Contract'}_${contract.customer_name || 'Unsigned'}_${new Date().toISOString().split('T')[0]}.pdf`;

    console.log("PDF generated successfully for contract:", contractId);

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in download-contract-pdf function:", error);
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