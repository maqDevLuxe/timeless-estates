import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/* ---------- Classic Centered Logo Navbar ---------- */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/process", label: "Process" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Left links (desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          {links.slice(0, 2).map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-sans text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive(l.to)
                    ? "text-accent"
                    : scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-cream hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span
            className={`font-display text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-cream"
            }`}
          >
            HERITAGE
          </span>
          <span
            className={`text-[10px] tracking-[0.35em] uppercase font-sans transition-colors duration-300 ${
              scrolled ? "text-accent" : "text-gold-light"
            }`}
          >
            Restorations
          </span>
        </Link>

        {/* Right links (desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          {links.slice(2).map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-sans text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive(l.to)
                    ? "text-accent"
                    : scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-cream hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/about"
              className="font-sans text-xs tracking-[0.15em] uppercase px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Consult
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-cream"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-cream"} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-sans text-sm tracking-[0.2em] uppercase ${
                    isActive(l.to) ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
