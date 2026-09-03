import { PageHero } from "@/components/PageHero";
import { PracticeGrid } from "@/components/PracticeGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Chapter 7, Chapter 13, foreclosure defense, and wage garnishment representation in Houston, Texas.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice areas"
        title="Debt relief with a defined playbook."
        lede="Every matter is screened for the right chapter, the right timing, and the property you cannot afford to lose."
      />
      <PracticeGrid />
    </>
  );
}
