import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { images } from "@/data/defaultImages";

const featuredItems = [
  // Festive & Bridal
  { src: images.festive1,       caption: "Bridal Red & Green Lehenga",          category: "Festive" },
  { src: images.bridalLehenga1, caption: "Bridal Lehenga Collection",            category: "Festive" },
  { src: images.festiveLehenga, caption: "Embroidered Lehengas – Sand Dunes",    category: "Festive" },
  { src: images.festiveSalwar,  caption: "Embroidered Festive Salwar Suit",      category: "Festive" },
  { src: images.bridalLehenga2, caption: "Designer Bridal Ensemble",             category: "Festive" },
  // Sarees
  { src: images.saree,          caption: "Premium Silk Saree",                   category: "Saree" },
  { src: images.festive2,       caption: "Golden Bridal Banarasi Saree",         category: "Saree" },
  { src: images.showcase1,      caption: "Designer Saree Collection",            category: "Saree" },
  { src: images.showcase5,      caption: "Festive Saree Lookbook",               category: "Saree" },
  // Kurthis
  { src: images.ethnicKurthi1,  caption: "South Indian Designer Kurthi",         category: "Kurthi" },
  { src: images.ethnicKurthi2,  caption: "Traditional Kurthi Collection",        category: "Kurthi" },
  { src: images.westernBanner,  caption: "Designer Kurthi & Set Looks",          category: "Kurthi" },
  { src: images.kurthi,         caption: "Embroidered Kurthi",                   category: "Kurthi" },
  { src: images.showcase6,      caption: "Party Wear Kurthi",                    category: "Kurthi" },
  // Western
  { src: images.westernFloral,  caption: "Matching Floral Print Dresses",        category: "Western" },
  { src: images.westernCasual,  caption: "Casual Mustard & Olive Outfits",       category: "Western" },
  { src: images.westernDuo,     caption: "Stylish Casual Western Wear",          category: "Western" },
  { src: images.western,        caption: "Contemporary Western Collection",      category: "Western" },
  { src: images.showcase4,      caption: "Evening Western Look",                 category: "Western" },
  // Chudithar
  { src: images.chudithar,      caption: "Elegant Chudithar Set",                category: "Chudithar" },
  { src: images.showcase3,      caption: "Silk Chudithar",                       category: "Chudithar" },
  { src: images.showcase7,      caption: "Cotton Chudithar Set",                 category: "Chudithar" },
];

const categories = ["All", "Festive", "Saree", "Kurthi", "Western", "Chudithar"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Featured() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeCategory === "All"
      ? featuredItems
      : featuredItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <Navbar />
        <WhatsAppButton />

        <main className="pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 md:mb-16"
            >
              <span className="text-primary tracking-widest uppercase text-xs mb-3 md:mb-4 block">
                New Arrivals
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-4 md:mb-6">
                Featured Looks
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto">
                Hand-selected pieces from our latest collection, curated to
                inspire your next statement look.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-wider sm:tracking-widest border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry-style Grid */}
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.src + item.caption}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                    transition={{ delay: i * 0.05 }}
                    layout
                    className="group cursor-pointer break-inside-avoid"
                    onClick={() => setLightboxImage(item.src)}
                  >
                    <div className="relative overflow-hidden bg-muted">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white/60 text-xs uppercase tracking-widest block mb-1">
                          {item.category}
                        </span>
                        <p className="text-white text-sm font-light">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-light">
                  No items in this category yet.
                </p>
              </div>
            )}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <p className="text-muted-foreground font-light mb-6">
                Love something? Let us know.
              </p>
              <a
                href="https://wa.me/919600683219"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-foreground text-foreground px-8 py-4 uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Inquire on WhatsApp
              </a>
            </motion.div>
          </div>
        </main>

        <Footer />

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={lightboxImage}
                alt="Full view"
                className="max-w-full max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
