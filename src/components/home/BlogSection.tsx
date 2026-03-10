import ScrollReveal from "@/components/ScrollReveal";

/* ---------- Section 11: Architectural History Blog ---------- */
const posts = [
  { img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80", date: "12 Feb 2026", title: "The Lost Art of Lime Plastering", excerpt: "Exploring why traditional lime renders outlast modern cement and how we champion their revival." },
  { img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", date: "28 Jan 2026", title: "Restoring Sash Windows: A Guide", excerpt: "Our step-by-step approach to repairing and draught-proofing original timber sash windows." },
  { img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", date: "15 Jan 2026", title: "Understanding Listed Building Consent", excerpt: "Navigating the regulatory landscape to ensure your restoration project proceeds smoothly." },
];

const BlogSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">From the Archive</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">Heritage Journal</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <ScrollReveal key={post.title} delay={i * 150}>
            <article className="heritage-card group cursor-pointer p-0 overflow-hidden h-full">
              <div className="overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mb-2">{post.date}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
