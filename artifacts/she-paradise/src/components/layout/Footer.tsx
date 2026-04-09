import { Link } from "wouter";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-inverted-bg text-inverted-fg py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <BrandLogo size="md" className="sm:!h-14 sm:!max-w-[200px]" />
            <p className="text-inverted-muted text-sm font-light leading-relaxed max-w-xs">
              An aspirational women's fashion destination in Coimbatore. Discover elegance, femininity, and the joy of wearing beautiful clothes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-wider uppercase text-inverted-fg/80">Pages</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-inverted-muted text-sm hover:text-inverted-accent transition-colors w-fit">Home</Link>
              <Link href="/collections" className="text-inverted-muted text-sm hover:text-inverted-accent transition-colors w-fit">Collections</Link>
              <Link href="/featured" className="text-inverted-muted text-sm hover:text-inverted-accent transition-colors w-fit">Featured</Link>
              <Link href="/boutique" className="text-inverted-muted text-sm hover:text-inverted-accent transition-colors w-fit">Boutique</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-wider uppercase text-inverted-fg/80">Contact</h4>
            <div className="text-inverted-muted text-sm flex flex-col gap-2 font-light leading-relaxed">
              <a href="tel:+919600683219" className="hover:text-inverted-accent transition-colors block w-fit">
                +91 9600683219
              </a>
              <a href="https://wa.me/919600683219" target="_blank" rel="noopener noreferrer" className="hover:text-inverted-accent transition-colors block w-fit">
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-wider uppercase text-inverted-fg/80">Visit Us</h4>
            <div className="text-inverted-muted text-sm flex flex-col gap-1 font-light leading-relaxed">
              <p>JESUS SAVES Complex, 89C/6,</p>
              <p>Vellakinar Road, Near Thudiyalur RTO,</p>
              <p>Thudiyalur, Coimbatore - 641034</p>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-inverted-fg/10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs text-inverted-muted font-light">
          <p>&copy; {new Date().getFullYear()} She Paradise. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Premium Boutique</span>
            <span>Coimbatore</span>
            <Link href="/admin" className="text-inverted-muted/40 hover:text-inverted-muted/70 transition-colors cursor-pointer">
              •
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
