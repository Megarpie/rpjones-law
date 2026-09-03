export function Logo({
  className = "",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const mark = inverted ? "text-cream" : "text-navy";
  const gold = "text-gold";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className={`h-10 w-10 shrink-0 ${gold}`}
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M24 10v22M16 16h16M18 16v8c0 4 2.5 7 6 8 3.5-1 6-4 6-8v-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <rect x="20" y="34" width="8" height="2.2" fill="currentColor" />
        <rect x="17" y="37" width="14" height="1.6" fill="currentColor" />
      </svg>
      <span className="leading-tight">
        <span
          className={`block font-serif text-[1.35rem] font-semibold tracking-[0.08em] ${mark}`}
        >
          R. P. JONES
        </span>
        <span
          className={`block text-[0.65rem] font-medium uppercase tracking-[0.32em] ${inverted ? "text-gold-bright/90" : "text-gold"}`}
        >
          Law
        </span>
      </span>
    </span>
  );
}
