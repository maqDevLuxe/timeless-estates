import { useEffect, useRef, useState } from "react";

/* ---------- Section 10: Legacy Counters ---------- */
const counters = [
  { target: 37, suffix: "+", label: "Years of History" },
  { target: 350, suffix: "+", label: "Projects Restored" },
  { target: 120, suffix: "", label: "Master Artisans" },
  { target: 15, suffix: "", label: "Heritage Awards" },
];

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const CounterItem = ({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <p className="counter-value">
        {count}
        {suffix}
      </p>
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-sepia mt-2">
        {label}
      </p>
    </div>
  );
};

const CountersSection = () => (
  <section className="dark-section section-padding">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {counters.map((c) => (
          <CounterItem key={c.label} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
