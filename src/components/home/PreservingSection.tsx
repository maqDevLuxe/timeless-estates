import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 12: Preserving the Past (overlapping vintage images) ---------- */
const PreservingSection = () => (
  <section className="section-padding bg-parchment overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">Our Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline">Preserving the Past</h2>
            <p className="font-serif text-base text-muted-foreground leading-relaxed mb-4">
              Every crack in a cornice, every weathered stone, tells the story of generations. Our mission is not merely to repair, but to honour—to ensure that the hands of the past continue to speak through the buildings they shaped.
            </p>
            <p className="font-serif text-base text-muted-foreground leading-relaxed">
              We believe restoration is an act of stewardship. It demands humility before the original craftsman's vision and mastery of the techniques they employed.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <div className="relative h-[450px]">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Historic façade detail" className="absolute top-0 right-0 w-[65%] aspect-[3/4] object-cover shadow-xl z-10" />
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" alt="Vintage interior archway" className="absolute bottom-0 left-0 w-[55%] aspect-[3/4] object-cover shadow-xl border-4 border-parchment z-20" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default PreservingSection;
