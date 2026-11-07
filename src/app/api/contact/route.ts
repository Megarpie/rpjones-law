import { isValidUsPhone } from "@/lib/phone";
import { site } from "@/lib/site";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, max = 2000) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const firstName = clean((body as Record<string, unknown>).firstName, 80);
  const lastName = clean((body as Record<string, unknown>).lastName, 80);
  const phone = clean((body as Record<string, unknown>).phone, 40);
  const email = clean((body as Record<string, unknown>).email, 120);
  const message = clean((body as Record<string, unknown>).message, 4000);

  if (!firstName || !lastName || !phone || !email || !message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!isValidUsPhone(phone)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "R. P. Jones Law <consult@rpjoneslaw.com>",
        to: [site.email],
        reply_to: email,
        subject: `New consultation request from ${firstName} ${lastName}`,
        text: [
          `Name: ${firstName} ${lastName}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    const payload = (await res.json().catch(() => null)) as {
      message?: string;
      name?: string;
    } | null;

    if (!res.ok) {
      const detail = payload?.message ?? payload?.name ?? `Resend ${res.status}`;
      console.error("Contact form Resend error:", detail);
      return NextResponse.json({ ok: false, error: detail }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Send failed";
    console.error("Contact form send failed:", detail);
    return NextResponse.json({ ok: false, error: detail }, { status: 500 });
  }
}
