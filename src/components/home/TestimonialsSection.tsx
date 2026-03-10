import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 13: Client Appreciations ---------- */
const testimonials = [
  { text: "Heritage Restorations brought our 18th-century manor back to life with an extraordinary level of care and historical accuracy. A truly exceptional team.", author: "Lady Eleanor Ashworth", role: "Ashworth Manor, Hampshire" },
  { text: "Their understanding of Georgian proportions and period detailing is unmatched. The result exceeded every expectation we had.", author: "Sir James Harrington", role: "Harrington Hall, Oxfordshire" },
  { text: "From the initial survey to the final reveal, every step was handled with professionalism and genuine passion for preservation.", author: "Dr. Catherine Bell", role: "Historic England Advisor" },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">Client Appreciations</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150}>
            <div className="heritage-card text-center h-full">
              <Quote className="w-8 h-8 text-accent/40 mx-auto mb-4" />
              <p className="font-serif text-base text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-display text-sm font-semibold text-foreground">{t.author}</p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mt-1">{t.role}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
