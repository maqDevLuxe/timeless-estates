import { useRef, useState, useCallback, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 5: Before & After Interactive Image Slider ---------- */
const BeforeAfterSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    },
    [isDragging, updatePosition]
  );

  const stopDrag = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [handleMove, stopDrag]);

  return (
    <section className="section-padding bg-parchment">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">
              Transformations
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">
              Before &amp; After
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden cursor-col-resize select-none"
            onMouseDown={(e) => { setIsDragging(true); updatePosition(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); updatePosition(e.touches[0].clientX); }}
          >
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" alt="After restoration" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80" alt="Before restoration" className="absolute inset-0 w-full h-full object-cover" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%", maxWidth: "none" }} />
            </div>
            <div className="absolute top-0 bottom-0 w-0.5 bg-cream z-10" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent border-2 border-cream flex items-center justify-center shadow-lg">
                <span className="text-cream text-xs font-bold">↔</span>
              </div>
            </div>
            <span className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.25em] uppercase bg-dark-bg/70 text-cream px-3 py-1 z-20">Before</span>
            <span className="absolute top-4 right-4 font-sans text-[10px] tracking-[0.25em] uppercase bg-dark-bg/70 text-cream px-3 py-1 z-20">After</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
