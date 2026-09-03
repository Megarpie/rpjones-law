"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} pathname={pathname} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-white/95 shadow-[0_8px_30px_rgba(11,28,44,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="hidden border-b border-navy/8 bg-navy text-cream md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
          <p className="text-cream/75">
            Serving Los Angeles &amp; Southern California
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="transition-colors hover:text-gold-bright"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-gold-bright"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link href="/" aria-label="R. P. Jones Law home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setPracticeOpen(true)}
                onMouseLeave={() => setPracticeOpen(false)}
              >
                <Link
                  href={item.href}
                  onClick={() => setPracticeOpen(false)}
                  className={`flex items-center gap-1 px-3 py-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                    pathname.startsWith("/practice-areas")
                      ? "text-gold"
                      : "text-navy/80 hover:text-navy"
                  }`}
                >
                  {item.label}
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-0 top-full min-w-[280px] origin-top pt-2 transition-all duration-200 ${
                    practiceOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="border border-navy/10 bg-white py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setPracticeOpen(false)}
                        className="block px-4 py-2.5 text-sm text-navy/80 transition-colors hover:bg-cream hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-navy/80 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center bg-navy px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-navy-mid sm:inline-flex"
          >
            Free Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-navy/15 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-navy transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-navy transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-navy transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-16 top-[4.75rem] z-50 overflow-y-auto border-t border-navy/10 bg-white lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0"
        } transition-all duration-300`}
      >
        <nav className="flex min-h-full flex-col px-6 py-6" aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-navy/8 py-3">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-serif text-2xl text-navy"
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="mt-2 flex flex-col gap-1 pl-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="py-1 text-sm text-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            href={site.phoneHref}
            className="mt-6 bg-navy py-3.5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-cream"
          >
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
