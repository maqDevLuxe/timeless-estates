/* ---------- Portfolio Page ---------- */
const portfolioItems = [
  {
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    title: "Ashworth Manor",
    category: "Georgian Estate",
    desc: "Complete structural and decorative restoration of a Grade II* listed Georgian manor house.",
  },
  {
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    title: "St. Catherine's Chapel",
    category: "Ecclesiastical",
    desc: "Sensitive conservation of 14th-century stonework, stained glass, and timber roof structure.",
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Belmont Townhouse",
    category: "Victorian Terrace",
    desc: "Façade restoration and period interior reinstatement of an 1860s London townhouse.",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Thornfield Hall",
    category: "Tudor Revival",
    desc: "Timber frame repair, herringbone brickwork restoration, and chimney stack rebuilding.",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Kensington Crescent",
    category: "Regency",
    desc: "Stucco repair, ironwork conservation, and reinstatement of original fanlight glazing.",
  },
  {
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
    title: "Millbrook Lodge",
    category: "Arts & Crafts",
    desc: "Sensitive modernisation while preserving original William Morris-influenced interiors.",
  },
];

const Portfolio = () => (
  <>
    {/* Hero banner */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark-bg/70" />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Our Work
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-cream">
          Portfolio
        </h1>
      </div>
    </section>

    {/* Grid */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.title} className="heritage-card p-0 overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-1">
                  {item.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Portfolio;
