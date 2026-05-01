import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  bike?: string;
  message?: string;
};

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const bike = (body.bike ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.TO_EMAIL;
  const from = process.env.FROM_EMAIL ?? "Kinetic Moto Sports <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const subject = `New lead: ${name}${bike ? ` — ${bike}` : ""}`;
  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;color:#111;">
      <h2 style="margin:0 0 16px;">New Kinetic Moto Sports lead</h2>
      <p style="margin:0 0 6px;"><strong>Name:</strong> ${escape(name)}</p>
      <p style="margin:0 0 6px;"><strong>Email:</strong> ${escape(email)}</p>
      ${phone ? `<p style="margin:0 0 6px;"><strong>Phone:</strong> ${escape(phone)}</p>` : ""}
      ${bike ? `<p style="margin:0 0 6px;"><strong>Bike:</strong> ${escape(bike)}</p>` : ""}
      <p style="margin:16px 0 6px;"><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;background:#f4f5f7;padding:12px;border-radius:8px;">${escape(message)}</pre>
    </div>
  `.trim();

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    bike ? `Bike: ${bike}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead route error", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 },
    );
  }
}
