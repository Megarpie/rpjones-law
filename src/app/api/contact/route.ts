import { isValidUsPhone } from "@/lib/phone";
import { site } from "@/lib/site";
import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM ?? "R. P. Jones Law <consult@rpjoneslaw.com>";

  const { error } = await resend.emails.send({
    from,
    to: site.email,
    replyTo: email,
    subject: `New consultation request from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
