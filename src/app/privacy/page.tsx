import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lede="How this website handles the information you choose to send."
      />
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-6 leading-relaxed text-muted">
          <p>
            {site.name} collects only the information you submit through our
            contact form or that you provide by phone or email. We use it to
            respond to your inquiry and, if retained, to represent you.
          </p>
          <p>
            We do not sell personal information. Messages sent through this
            website are not encrypted at the same level as a client portal. Do
            not send Social Security numbers or full account numbers through the
            form.
          </p>
          <p>
            Submitting a form does not create an attorney-client relationship.
            That relationship begins only after a written engagement is signed.
          </p>
        </div>
      </section>
    </>
  );
}
