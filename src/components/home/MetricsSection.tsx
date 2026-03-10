import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 6: Craftsmanship Metrics (Dark Classic BG) ---------- */
const metrics = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "350+", label: "Properties Restored" },
  { value: "Grade I-II", label: "Listed Buildings" },
  { value: "37", label: "Years of Excellence" },
];

const MetricsSection = () => (
  <section className="dark-section section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
            By the Numbers
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gold-underline">
            Craftsmanship Metrics
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.label} delay={i * 150} direction="none">
            <p className="counter-value mb-2">{m.value}</p>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-sepia">
              {m.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
