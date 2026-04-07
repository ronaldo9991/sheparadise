import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-3xl text-primary-foreground tracking-wide">
              She Paradise
            </h3>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              An aspirational women's fashion destination in Coimbatore. Discover elegance, femininity, and the joy of wearing beautiful clothes.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl tracking-wider uppercase text-muted">Links</h4>
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors w-fit">Home</a>
              <a href="#collections" className="text-muted-foreground hover:text-primary transition-colors w-fit">Collections</a>
              <a href="#boutique" className="text-muted-foreground hover:text-primary transition-colors w-fit">The Boutique</a>
              <a href="#visit" className="text-muted-foreground hover:text-primary transition-colors w-fit">Visit Us</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl tracking-wider uppercase text-muted">Visit Us</h4>
            <div className="text-muted-foreground flex flex-col gap-2 font-light leading-relaxed">
              <p>JESUS SAVES Complex, 89C/6,</p>
              <p>Vellakinar Road, Near Thudiyalur RTO,</p>
              <p>Thudiyalur, Coimbatore - 641034</p>
              <a href="tel:+919600683219" className="mt-4 hover:text-primary transition-colors block w-fit">
                Ph: +91 9600683219
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-light">
          <p>&copy; {new Date().getFullYear()} She Paradise. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Premium Boutique</span>
            <span>Coimbatore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
