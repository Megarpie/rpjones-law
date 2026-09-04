export const site = {
  name: "R. P. Jones Law",
  attorney: "Ryan P. Jones",
  tagline: "Bankruptcy counsel for a genuine fresh start.",
  phone: "(951) 338-0025",
  phoneHref: "tel:+19513380025",
  email: "consult@rpjoneslaw.com",
  hours: "Monday–Friday, 8:30 a.m.–6:00 p.m.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/practice-areas",
    label: "Practice Areas",
    children: [
      { href: "/practice-areas/chapter-7", label: "Chapter 7 Bankruptcy" },
      { href: "/practice-areas/chapter-13", label: "Chapter 13 Bankruptcy" },
      {
        href: "/practice-areas/foreclosure-defense",
        label: "Foreclosure Defense",
      },
      {
        href: "/practice-areas/wage-garnishment",
        label: "Wage Garnishment & Collections",
      },
    ],
  },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const practiceAreas = [
  {
    slug: "chapter-7",
    title: "Chapter 7 Bankruptcy",
    eyebrow: "Liquidation",
    summary:
      "Wipe out qualifying unsecured debt—credit cards, medical bills, and personal loans—and keep the property California law protects. We also counsel on student loan debt relief, including when discharge, hardship, or a repayment plan is realistic.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Typically completed in four to six months",
      "Automatic stay stops lawsuits, garnishments, and collection calls",
      "California homestead and exemption planning built into every filing",
      "Student loan review: discharge, hardship, and relief options under current law",
    ],
  },
  {
    slug: "chapter-13",
    title: "Chapter 13 Bankruptcy",
    eyebrow: "Reorganization",
    summary:
      "Catch up on a home, car, or tax debt through a court-supervised plan while you keep the assets that matter.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Stop foreclosure and repossession immediately",
      "Restructure arrears into a three- to five-year plan",
      "Protect co-signers and non-exempt property",
    ],
  },
  {
    slug: "foreclosure-defense",
    title: "Foreclosure Defense",
    eyebrow: "Home protection",
    summary:
      "Urgent, practical strategies to pause a sale, negotiate with the servicer, and keep you in the house when possible.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Emergency filings before a scheduled foreclosure sale",
      "Loan modification and loss-mitigation advocacy",
      "Clear advice when a sale cannot be stopped",
    ],
  },
  {
    slug: "wage-garnishment",
    title: "Wage Garnishment & Collections",
    eyebrow: "Immediate relief",
    summary:
      "End paycheck levies, bank freezes, and aggressive collection tactics with targeted bankruptcy and creditor negotiations.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Stop most garnishments the day a petition is filed",
      "Challenge improper levies and frozen accounts",
      "Debt-by-debt analysis before you file",
    ],
  },
] as const;

export const stats = [
  { value: "$25M+", label: "Debt discharged for clients" },
  { value: "500+", label: "Families guided to relief" },
  { value: "25+", label: "Practicing in Southern California" },
  { value: "24 hrs", label: "Typical consult response" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Confidential consultation",
    body: "We review income, assets, and every debt—without judgment—and map whether Chapter 7, Chapter 13, or another path fits.",
  },
  {
    step: "02",
    title: "Strategy & documents",
    body: "You receive a clear filing plan, a document checklist, and direct access to counsel—not a call center.",
  },
  {
    step: "03",
    title: "File & automatic stay",
    body: "The petition is filed. Creditor calls, lawsuits, garnishments, and most foreclosure efforts must stop.",
  },
  {
    step: "04",
    title: "Discharge & rebuild",
    body: "We walk you through the meeting of creditors, protect exemptions, and help you leave with a plan to rebuild credit.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I was two weeks from losing the house. Mr. Jones filed that afternoon. The sale stopped, the calls stopped, and for the first time in a year I slept through the night.",
    name: "Marisol V.",
    role: "Chapter 13 · Los Angeles",
  },
  {
    quote:
      "Medical bills after my husband’s surgery had swallowed every paycheck. Chapter 7 wiped the cards and hospital debt. The process was explained in plain English at every step.",
    name: "James T.",
    role: "Chapter 7 · Irvine",
  },
  {
    quote:
      "Other firms treated me like a file number. R. P. Jones actually read my paystubs, caught a garnishment I didn’t know was coming, and got it released.",
    name: "Danielle R.",
    role: "Garnishment defense · Long Beach",
  },
  {
    quote:
      "I own a small shop and was sure bankruptcy meant losing everything. We reorganized instead. The plan was realistic, and I still have my business.",
    name: "Omar S.",
    role: "Chapter 13 · Riverside",
  },
] as const;

export const faqs = [
  {
    q: "Will I lose my house or car?",
    a: "Most clients keep both. California exemptions, reaffirmation, and Chapter 13 plans are designed to protect a homestead and a necessary vehicle when the numbers work. We model this before any petition is filed.",
  },
  {
    q: "How soon do collection calls stop?",
    a: "The automatic stay generally takes effect the moment the case is filed. Creditors who keep calling after notice can face court sanctions. We notify major collectors immediately.",
  },
  {
    q: "Is bankruptcy the only option?",
    a: "No. Some clients are better served by targeted negotiation, timing a filing, or not filing at all. The consultation is a strategy session—not a sales pitch to file.",
  },
  {
    q: "How long does Chapter 7 take?",
    a: "An uncomplicated Chapter 7 in the Central District of California is often completed in about four months from filing to discharge, after the required credit counseling and document work.",
  },
  {
    q: "Will my employer or neighbors find out?",
    a: "Filings are public record, but they are not advertised. Employers are notified only if a garnishment or payroll order is involved. We discuss privacy concerns in the first meeting.",
  },
  {
    q: "What does a consultation cost?",
    a: "The initial consultation is free and confidential. If we take the case, fees are quoted in writing before you sign. Chapter 13 attorney fees are typically paid through the plan.",
  },
] as const;

export const results = [
  {
    outcome: "Foreclosure sale halted in 36 hours",
    detail:
      "Chapter 13 filed the morning of a Los Angeles County trustee sale. Client remained in the home and cured 11 months of arrears through the plan.",
  },
  {
    outcome: "$87,400 in medical and card debt discharged",
    detail:
      "Chapter 7 for a dual-income family after a cancer diagnosis. Homestead and both vehicles retained under California exemptions.",
  },
  {
    outcome: "100% of wage garnishment released",
    detail:
      "Petition filed after a judgment creditor levied 25% of take-home pay. Stay issued; funds recovered from a frozen account.",
  },
  {
    outcome: "Small-business owner reorganized, not liquidated",
    detail:
      "Chapter 13 preserved a family HVAC company, stripped a wholly unsecured second lien, and reduced unsecured claims over 60 months.",
  },
  {
    outcome: "Tax debt structured without IRS levy",
    detail:
      "Priority tax arrears placed in a feasible Chapter 13 plan. Bank levy withdrawn; estimated tax compliance restored.",
  },
  {
    outcome: "Co-signed student loans isolated from discharge plan",
    detail:
      "Strategic Chapter 7 timing protected a parent co-signer while discharging consumer debt that had triggered lawsuits.",
  },
] as const;
