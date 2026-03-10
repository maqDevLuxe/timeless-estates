/* ---------- About Page ---------- */
const team = [
  {
    name: "William Hargrove",
    role: "Founding Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Eleanor Whitfield",
    role: "Conservation Architect",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Thomas Ashby",
    role: "Master Stonemason",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-dark-bg/70" />
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Est. 1987
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-cream">
          About Us
        </h1>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">
            A Legacy of Craft
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80"
            alt="Heritage craftsmanship"
            className="w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="font-serif text-base text-muted-foreground leading-relaxed mb-4">
              Founded in 1987 by master builder William Hargrove, Heritage
              Restorations began as a small workshop in the Cotswolds dedicated to
              traditional stonemasonry. Over three decades, we have grown into one
              of Britain's most respected heritage restoration firms.
            </p>
            <p className="font-serif text-base text-muted-foreground leading-relaxed">
              Today, our team of 120 directly employed artisans—stonemasons,
              joiners, plasterers, decorative artists, and conservation
              architects—work across the country, breathing new life into the
              buildings that define our national identity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">
            The People
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground gold-underline">
            Our Leadership
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="overflow-hidden mb-5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
