"use client";

import { formatUsPhone, isValidUsPhone } from "@/lib/phone";
import { useState, type FormEvent } from "react";

const fields = [
  { name: "firstName", label: "First name", type: "text", required: true },
  { name: "lastName", label: "Last name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidUsPhone(phone)) {
      setPhoneError("Enter a 10-digit U.S. phone number.");
      return;
    }
    setPhoneError("");
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/40 bg-cream p-8 text-navy">
        <p className="font-serif text-3xl">Thank you.</p>
        <p className="mt-3 leading-relaxed text-muted">
          Your message was sent to the firm. Someone will reach out within one
          business day—sooner if you flagged an emergency filing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.slice(0, 2).map((field) => (
          <label key={field.name} className="block text-sm">
            <span className="mb-1.5 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              {field.label}
            </span>
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              className="w-full border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-gold"
            />
          </label>
        ))}
        <label className="block text-sm">
          <span className="mb-1.5 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            value={phone}
            maxLength={14}
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Enter a 10-digit U.S. phone number"
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
            onChange={(event) => {
              const next = formatUsPhone(event.target.value);
              setPhone(next);
              event.target.setCustomValidity("");
              if (phoneError && isValidUsPhone(next)) setPhoneError("");
            }}
            onInvalid={(event) => {
              event.currentTarget.setCustomValidity(
                "Enter a 10-digit U.S. phone number.",
              );
            }}
            className="w-full border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-gold"
          />
          {phoneError ? (
            <span id="phone-error" className="mt-1.5 block text-xs text-red-800">
              {phoneError}
            </span>
          ) : null}
        </label>
        {fields.slice(2).map((field) => (
          <label key={field.name} className="block text-sm">
            <span className="mb-1.5 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              {field.label}
            </span>
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              className="w-full border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-gold"
            />
          </label>
        ))}
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          How can we help?
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition focus:border-gold"
        />
      </label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I understand this form does not create an attorney-client relationship
          and I agree to be contacted about my inquiry.
        </span>
      </label>
      {status === "error" ? (
        <p className="text-sm text-red-800">
          Something went wrong. Please call the office or try again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-navy py-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-navy-mid disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
