"use client";

import { faqs } from "@/lib/site";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function FAQList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-serif text-xl text-navy sm:text-2xl">
                {item.q}
              </span>
              <span
                className={`mt-1 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <p className="overflow-hidden text-muted leading-relaxed">
                {item.a}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
