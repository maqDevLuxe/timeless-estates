import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

/* ---------- Consultation CTA & Traditional Footer ---------- */
const Footer = () => (
  <footer className="bg-dark text-cream">
    {/* CTA Section */}
    <div className="section-padding text-center">
      <ScrollReveal>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Begin Your Restoration Journey</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Schedule a Consultation</h2>
        <p className="font-serif text-lg text-sepia max-w-2xl mx-auto mb-10">
          Every heritage property tells a story. Let our master craftsmen help you preserve yours for generations to come.
        </p>
        <a href="#" className="inline-block px-10 py-4 bg-accent text-accent-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300">
          Request Consultation
        </a>
      </ScrollReveal>
    </div>

    {/* Footer Links */}
    <div className="border-t border-burgundy-light/20">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold mb-2">HERITAGE</h3>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Restorations</p>
          <p className="font-serif text-sm text-sepia leading-relaxed">Preserving architectural heritage through meticulous craftsmanship since 1987.</p>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-6">Navigation</h4>
          <ul className="space-y-3">
            {["Home", "Portfolio", "Process", "About"].map((item) => (
              <li key={item}><Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="font-serif text-sm text-sepia hover:text-cream transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-6">Services</h4>
          <ul className="space-y-3">
            {["Structural Restoration", "Period Interiors", "Façade Conservation", "Heritage Consulting"].map((s) => (
              <li key={s}><span className="font-serif text-sm text-sepia">{s}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-6">Contact</h4>
          <address className="not-italic font-serif text-sm text-sepia space-y-2 leading-relaxed">
            <p>14 Kensington Court</p><p>London, W8 5DL</p>
            <p className="pt-2">+44 (0)20 7946 0958</p>
            <p>enquiries@heritagerestorations.co.uk</p>
          </address>
        </div>
      </div>
    </div>

    <div className="border-t border-burgundy-light/10 py-6 text-center">
      <p className="font-sans text-xs text-sepia-dark tracking-wide">© {new Date().getFullYear()} Heritage Restorations. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
