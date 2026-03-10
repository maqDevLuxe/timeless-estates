import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 9: Artisan Workshop Showcase ---------- */
const WorkshopSection = () => (
  <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
    <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80" alt="Artisan workshop with traditional tools" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-dark-bg/60" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <ScrollReveal direction="none">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Where Craft Meets Heritage</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-cream max-w-3xl leading-tight">Our Artisan Workshop</h2>
        <p className="font-serif text-lg text-sepia mt-4 max-w-xl mx-auto">
          Traditional hand tools, time-honoured techniques, and a reverence for the original craftsman's intent.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WorkshopSection;
