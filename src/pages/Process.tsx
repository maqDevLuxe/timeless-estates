import { ClipboardList, Search, Ruler, Hammer, Eye, Key } from "lucide-react";

/* ---------- Process Page ---------- */
const steps = [
  {
    icon: Search,
    title: "Initial Survey & Research",
    desc: "Comprehensive photographic survey, archival research, and historical analysis of the property's construction, alterations, and significance.",
  },
  {
    icon: ClipboardList,
    title: "Heritage Assessment",
    desc: "Detailed condition report, significance mapping, and conservation philosophy statement prepared for planning authorities.",
  },
  {
    icon: Ruler,
    title: "Design & Specification",
    desc: "Measured drawings, material specifications, and method statements developed in consultation with conservation officers.",
  },
  {
    icon: Hammer,
    title: "Skilled Restoration",
    desc: "On-site work carried out by our team of directly employed master craftsmen using traditional techniques and authentic materials.",
  },
  {
    icon: Eye,
    title: "Quality & Oversight",
    desc: "Continuous monitoring by our conservation architects with photographic documentation at every stage for your records.",
  },
  {
    icon: Key,
    title: "Handover & Aftercare",
    desc: "Comprehensive maintenance manual, conservation management plan, and ongoing aftercare support for your restored property.",
  },
];

const Process = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark-bg/70" />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          How We Work
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-cream">
          Our Process
        </h1>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start"
            >
              {/* Step number + icon */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-2">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-display text-sm text-muted-foreground">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Process;
