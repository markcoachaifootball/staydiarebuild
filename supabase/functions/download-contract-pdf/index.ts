import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.51.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation helpers
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_NAME_LENGTH = 200;

function isValidUUID(str: string): boolean {
  return typeof str === 'string' && UUID_REGEX.test(str);
}

function sanitizeString(str: string | undefined | null, maxLength: number): string {
  if (!str || typeof str !== 'string') return '';
  // Remove potential HTML/script injection and trim
  return str.replace(/<[^>]*>/g, '').trim().slice(0, maxLength);
}

function escapeHtml(str: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
}

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

    // Parse and validate input
    let rawInput: DownloadContractRequest;
    try {
      rawInput = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { contractId } = rawInput;

    // Validate contractId
    if (!contractId || !isValidUUID(contractId)) {
      console.error('Invalid contractId:', contractId);
      return new Response(
        JSON.stringify({ error: "Invalid contract ID format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log('Generating contract document for:', contractId);

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
      return new Response(
        JSON.stringify({ error: "Contract not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
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

    // Generate HTML content with sanitized data
    const ownerFirstName = sanitizeString(ownerProfile?.first_name, MAX_NAME_LENGTH);
    const ownerLastName = sanitizeString(ownerProfile?.last_name, MAX_NAME_LENGTH);
    const ownerName = `${ownerFirstName} ${ownerLastName}`.trim() || 'Contract Owner';
    const ownerCompany = escapeHtml(sanitizeString(ownerProfile?.company_name, MAX_NAME_LENGTH) || 'Staydia Sports');
    const ownerEmail = escapeHtml(sanitizeString(ownerProfile?.email, 254) || '');
    
    const customerName = escapeHtml(sanitizeString(contract.customer_name, MAX_NAME_LENGTH) || 'Not specified');
    const customerEmail = escapeHtml(sanitizeString(contract.customer_email, 254) || 'Unknown');
    const customerCompany = escapeHtml(sanitizeString(contract.customer_company, MAX_NAME_LENGTH) || 'Not specified');
    const templateName = escapeHtml(sanitizeString(contract.contract_templates?.name, MAX_NAME_LENGTH) || 'Contract');
    const contractStatus = escapeHtml(sanitizeString(contract.status, 50) || 'unknown');
    
    const signatureSection = signature ? `
      <div class="signature-section">
        <h3>Digital Signature</h3>
        <div class="signature-details">
          <div class="signature-info">
            <p><strong>Signed by:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
            <p><strong>Company:</strong> ${customerCompany}</p>
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
            <div class="signature-image">
              <img src="${signature.signature_data}" alt="Digital Signature" style="max-width: 300px; max-height: 100px; border: 1px solid #ccc; background: white; padding: 10px;">
            </div>
          ` : signature.signature_type === 'typed' && signature.signature_data ? `
            <div class="signature-text">
              <div style="font-family: 'Brush Script MT', cursive; font-size: 24px; color: #2563eb; background: white; padding: 15px; border: 1px solid #ccc; display: inline-block;">
                ${escapeHtml(sanitizeString(signature.signature_data, MAX_NAME_LENGTH))}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    ` : `
      <div class="status-section">
        <h3>Contract Status</h3>
        <p><strong>Status:</strong> ${contractStatus.charAt(0).toUpperCase() + contractStatus.slice(1)}</p>
        <p><em>This contract has not been signed yet.</em></p>
      </div>
    `;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${templateName}</title>
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
          .signature-section {
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            margin: 30px 0;
          }
          .status-section {
            background-color: #fff3cd;
            padding: 20px;
            border: 1px solid #ddd;
            margin: 30px 0;
          }
          .signature-details {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
          }
          .signature-info {
            flex: 1;
          }
          .signature-image, .signature-text {
            text-align: center;
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
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          @media print {
            body { margin: 0; }
            .header { break-after: avoid; }
            .signature-section { break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${templateName}</h1>
          <p><strong>${ownerCompany}</strong></p>
        </div>

        <div class="contract-info">
          <h2>Contract Information</h2>
          <div class="grid">
            <div>
              <h3>From:</h3>
              <p><strong>${escapeHtml(ownerName)}</strong><br>
              ${ownerEmail}<br>
              ${ownerCompany}</p>
            </div>
            <div>
              <h3>To:</h3>
              <p><strong>${customerName}</strong><br>
              ${customerEmail}<br>
              ${customerCompany}</p>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <p><strong>Contract ID:</strong> ${escapeHtml(contract.id)}</p>
            <p><strong>Created:</strong> ${new Date(contract.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
            <p><strong>Status:</strong> ${contractStatus.charAt(0).toUpperCase() + contractStatus.slice(1)}</p>
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

    // Generate filename
    const filename = `${templateName}_${customerName}_${new Date().toISOString().split('T')[0]}.html`;

    console.log("HTML document generated successfully for contract:", contractId);

    // Return the HTML content that can be converted to PDF on the frontend
    return new Response(htmlContent, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `attachment; filename="${filename}"`,
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in download-contract-pdf function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while generating the document" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
