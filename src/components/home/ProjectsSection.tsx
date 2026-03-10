import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 8: Featured Restoration Projects ---------- */
const projects = [
  { img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80", title: "Ashworth Manor", category: "Georgian Estate", year: "2023" },
  { img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80", title: "St. Catherine's Chapel", category: "Ecclesiastical", year: "2022" },
  { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", title: "Belmont Townhouse", category: "Victorian Terrace", year: "2024" },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-parchment">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">Selected Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">Featured Restorations</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 150}>
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-5">
                <img src={p.img} alt={p.title} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-1">{p.category} · {p.year}</p>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
