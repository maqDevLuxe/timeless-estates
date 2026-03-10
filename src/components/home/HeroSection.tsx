import { useEffect, useRef, useState } from "react";

/* ---------- Section 2: Hero ---------- */
const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')",
          transform: visible ? "scale(1)" : "scale(1.1)",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p
          className={`font-sans text-xs tracking-[0.4em] uppercase text-gold mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Established 1987 · London
        </p>
        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Preserving Britain's
          <br />
          <span className="italic font-normal">Architectural Legacy</span>
        </h1>
        <p
          className={`font-serif text-lg md:text-xl text-sepia-light max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Master craftsmen dedicated to the faithful restoration of heritage
          properties, period interiors, and historic landmarks.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#expertise"
            className="px-8 py-4 border border-cream/30 text-cream font-sans text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors"
          >
            Our Expertise
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-cream/50 text-[10px] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  );
};

export default HeroSection;
