import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Collections", href: "#collections" },
    { name: "Featured", href: "#featured" },
    { name: "Boutique", href: "#boutique" },
    { name: "Visit Us", href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50 group">
          <span
            className={`font-serif text-2xl md:text-3xl font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-foreground md:text-primary-foreground"
            } group-hover:opacity-80`}
          >
            She Paradise
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919600683219"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm tracking-widest uppercase border px-6 py-2 transition-all duration-300 hover:bg-foreground hover:text-background ${
              isScrolled
                ? "border-foreground text-foreground"
                : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 p-2 ${
            isScrolled || mobileMenuOpen ? "text-foreground" : "text-foreground"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center pt-20"
            >
              <nav className="flex flex-col items-center gap-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/919600683219"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
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
