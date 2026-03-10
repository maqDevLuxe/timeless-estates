import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 3: Heritage Partners / Trusts ---------- */
const partners = [
  "English Heritage",
  "National Trust",
  "Historic England",
  "SPAB",
  "Georgian Group",
  "Victorian Society",
];

const PartnersSection = () => (
  <section className="bg-parchment section-padding">
    <div className="container mx-auto px-6 text-center">
      <ScrollReveal>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Trusted by Britain's Foremost Heritage Organisations
        </p>
      </ScrollReveal>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {partners.map((p, i) => (
          <ScrollReveal key={p} delay={i * 100} direction="none">
            <span className="font-display text-lg md:text-xl text-muted-foreground/60 hover:text-accent transition-colors duration-300 cursor-default">
              {p}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
