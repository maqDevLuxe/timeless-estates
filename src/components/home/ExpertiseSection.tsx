import { Landmark, PaintBucket, Columns3, Hammer, Shield, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 4: Restoration Expertise ---------- */
const expertiseItems = [
  {
    icon: Landmark,
    title: "Structural Restoration",
    desc: "Meticulous repair and reinforcement of load-bearing masonry, timber frames, and foundations using period-appropriate techniques.",
  },
  {
    icon: PaintBucket,
    title: "Decorative Finishes",
    desc: "Traditional lime plastering, gilding, faux marbling, and hand-painted murals restored by specialist decorative artists.",
  },
  {
    icon: Columns3,
    title: "Façade Conservation",
    desc: "Stone cleaning, repointing, and carved element repair to revive the grandeur of historic elevations.",
  },
  {
    icon: Hammer,
    title: "Joinery & Carpentry",
    desc: "Bespoke period joinery—sash windows, panelling, staircases—crafted from sustainably sourced heritage-grade timber.",
  },
  {
    icon: Shield,
    title: "Heritage Compliance",
    desc: "Navigating Listed Building Consent, planning applications, and conservation area regulations on your behalf.",
  },
  {
    icon: Layers,
    title: "Period Interiors",
    desc: "Historically accurate interior schemes from Georgian symmetry to Arts & Crafts warmth, researched and executed with care.",
  },
];

const ExpertiseSection = () => (
  <section id="expertise" className="section-padding bg-background">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">
            Our Disciplines
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">
            Restoration Expertise
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 120}>
            <div className="heritage-card group text-center h-full">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-accent/30 group-hover:border-accent transition-colors duration-500">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
