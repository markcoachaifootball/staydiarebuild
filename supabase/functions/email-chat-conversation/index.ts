import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, sessionId } = await req.json();
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    if (!messages || messages.length <= 1) {
      return new Response(
        JSON.stringify({ success: true, skipped: true, reason: "No user messages" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format messages into readable HTML
    const messageRows = messages
      .map((msg: { role: string; content: string }) => {
        const isUser = msg.role === "user";
        const label = isUser ? "🧑 Visitor" : "🤖 Staydia AI";
        const bgColor = isUser ? "#f0f4ff" : "#f9f9f9";
        const content = msg.content.replace(/\n/g, "<br/>");
        return `
          <tr>
            <td style="padding: 12px; background: ${bgColor}; border-bottom: 1px solid #e0e0e0;">
              <strong>${label}</strong><br/>
              <span style="color: #333;">${content}</span>
            </td>
          </tr>`;
      })
      .join("");

    const userMessages = messages.filter((m: { role: string }) => m.role === "user");
    const firstQuestion = userMessages[0]?.content?.slice(0, 80) || "New conversation";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a2e; color: #ffd700; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">💬 New AI Chat Conversation</h2>
          <p style="margin: 8px 0 0; color: #ccc; font-size: 14px;">Session: ${sessionId?.slice(0, 8) || "unknown"}</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e0e0;">
          ${messageRows}
        </table>
        <div style="padding: 16px; background: #f5f5f5; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #888;">
          ${userMessages.length} visitor message(s) · ${messages.length} total messages · ${new Date().toUTCString()}
        </div>
      </div>`;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Staydia AI Chat <info@staydiasports.com>",
        to: ["mark@staydiasports.com"],
        subject: `💬 AI Chat: "${firstQuestion}..."`,
        html: htmlBody,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Resend error:", emailRes.status, errText);
      throw new Error(`Email send failed: ${emailRes.status}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
