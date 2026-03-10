import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 7: Material Sourcing & Authenticity ---------- */
const MaterialSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80" alt="Authentic heritage materials and stone masonry" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 -z-10" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">Authenticity First</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline">Material Sourcing</h2>
            <p className="font-serif text-base text-muted-foreground leading-relaxed mb-6">
              We source period-correct materials from specialist suppliers across Britain and Europe—reclaimed bricks, hand-made lime mortars, heritage-grade timber, and antique ironmongery—ensuring every restoration is historically faithful.
            </p>
            <ul className="space-y-3">
              {["Reclaimed Georgian & Victorian brick", "Traditional hot-mixed lime mortars", "FSC-certified heritage oak & elm", "Hand-forged period ironmongery"].map((item) => (
                <li key={item} className="flex items-start gap-3 font-serif text-sm text-muted-foreground">
                  <span className="mt-1 w-2 h-2 bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default MaterialSection;
