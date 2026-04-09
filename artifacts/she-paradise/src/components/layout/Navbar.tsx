import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BrandLogo } from "@/components/brand/BrandLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Featured", href: "/featured" },
  { name: "Boutique", href: "/boutique" },
  { name: "Visit Us", href: "/visit" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/" || location === "";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const solidHeader = isScrolled || mobileMenuOpen || !isHome;
  const themeToggleVariant = solidHeader ? "bar" : "hero";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidHeader
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 z-50 group"
        >
          <BrandLogo
            size="md"
            className={`transition-all duration-300 group-hover:opacity-90 ${
              solidHeader
                ? ""
                : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  solidHeader
                    ? isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                    : isActive
                      ? "text-white font-medium drop-shadow-sm"
                      : "text-white/80 hover:text-white drop-shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle variant={themeToggleVariant} />
          <a
            href="https://wa.me/919600683219"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs tracking-[0.2em] uppercase border px-5 py-2 transition-all duration-300 ${
              solidHeader
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-white/70 text-white hover:bg-white hover:text-foreground"
            }`}
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden z-50">
          <ThemeToggle variant={themeToggleVariant} />
          <button
            className={`p-2 ${
              solidHeader ? "text-foreground" : "text-white drop-shadow-sm"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
            >
              <BrandLogo size="lg" className="mb-10" />
              <nav className="flex flex-col items-center gap-6 text-center">
                {navLinks.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-serif text-2xl transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <a
                  href="https://wa.me/919600683219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl text-primary mt-4"
                >
                  WhatsApp Us
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
