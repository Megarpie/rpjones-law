import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { firstName, lastName, phone, email, message } = body as Record<
    string,
    unknown
  >;

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof phone !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
