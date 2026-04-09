import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Store, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { useCollections } from "@/context/CollectionsContext";
import { images } from "@/data/defaultImages";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const { collections } = useCollections();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show 4 collections as homepage preview (skip none — includes Festive & Bridal)
  const previewCollections = collections.slice(0, 4);

  // Featured preview: mix of new real photos for visual variety
  const featuredImages = [
    images.bridalLehenga1,
    images.westernFloral,
    images.festiveLehenga,
    images.ethnicKurthi1,
  ];

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <Navbar />
        <WhatsAppButton />

        <main>
          {/* HERO */}
          <section className="relative h-dvh min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={images.hero}
                alt="She Paradise – Premium Women's Fashion Boutique, Coimbatore"
                className="w-full h-full object-cover object-center md:object-top"
              />
              {/* gradient: dark at top (for nav) + dark at bottom (for text) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />
            </div>

            <div className="relative h-full flex flex-col items-center md:items-end justify-end pb-14 sm:pb-20 md:pb-28 px-4 sm:px-6 md:px-16 lg:px-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full max-w-2xl text-center md:text-right"
              >
                <p className="text-white/70 tracking-[0.25em] uppercase text-xs mb-4 font-light">
                  Premium Boutique &bull; Coimbatore
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.05] mb-6 md:mb-8 drop-shadow-lg">
                  Where Elegance<br />
                  <span className="italic font-light text-rose-200/90">Finds You</span>
                </h1>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-end">
                  <Link
                    href="/collections"
                    className="w-full sm:w-auto inline-block bg-white text-[#2b1f18] px-6 sm:px-8 py-3.5 uppercase tracking-wider sm:tracking-widest text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-500 shadow-xl text-center"
                  >
                    Discover the Collection
                  </Link>
                  <a
                    href="https://wa.me/919600683219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-block border border-white/70 text-white px-6 sm:px-8 py-3.5 uppercase tracking-wider sm:tracking-widest text-xs font-medium hover:bg-white hover:text-foreground transition-all duration-500 text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* BRAND STATEMENT */}
          <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-background">
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-[1px] bg-primary mb-8 md:mb-12" />
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-foreground leading-snug mb-6 md:mb-8 font-light">
                  Curating the wardrobe of the modern Indian woman, balancing
                  timeless tradition with contemporary grace.
                </h2>
                <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                  She Paradise isn't just a store—it's an experience. We bring the
                  luxury and refinement of top-tier boutiques to Coimbatore, offering
                  a carefully selected range of clothing that celebrates femininity
                  and confidence.
                </p>
              </motion.div>
            </div>
          </section>

          {/* COLLECTION PREVIEW */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
                <div>
                  <span className="text-primary tracking-widest uppercase text-xs mb-3 md:mb-4 block">
                    Our Categories
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
                    The Collections
                  </h2>
                </div>
                <Link
                  href="/collections"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest"
                >
                  View All <ArrowRight size={16} />
                </Link>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              >
                {previewCollections.map((col) => (
                  <motion.div key={col.id} variants={fadeInUp}>
                    <Link
                      href="/collections"
                      className="group block cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-5">
                        <img
                          src={col.coverImage}
                          alt={col.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {col.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-light italic">
                        {col.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* FEATURED PREVIEW */}
          <section className="py-16 md:py-24 bg-inverted-bg text-inverted-fg">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
                <div>
                  <span className="text-inverted-secondary tracking-widest uppercase text-xs mb-3 md:mb-4 block">
                    New Arrivals
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-inverted-fg">
                    Curated Looks
                  </h2>
                </div>
                <Link
                  href="/featured"
                  className="flex items-center gap-2 text-inverted-muted hover:text-inverted-fg transition-colors text-sm uppercase tracking-widest"
                >
                  See All Featured <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {featuredImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden aspect-[3/4]"
                  >
                    <img
                      src={img}
                      alt={`Featured ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-16 md:py-24 lg:py-32 bg-muted/50 text-center">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-10 md:mb-16">
                The She Paradise Promise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    icon: <Gem className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Premium Quality",
                    desc: "Handpicked fabrics and impeccable stitching that feel as luxurious as they look.",
                  },
                  {
                    icon: <Store className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Exclusive Curation",
                    desc: "Unique designs ensuring you stand out, whether at a wedding or the office.",
                  },
                  {
                    icon: <Heart className="h-6 w-6" strokeWidth={1.5} />,
                    title: "Personalized Styling",
                    desc: "Expert advice to help you find the perfect fit, color, and silhouette for any occasion.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary mb-6 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                    <p className="text-muted-foreground font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* VISIT PREVIEW */}
          <section className="relative py-16 md:py-32 bg-background">
            <div className="absolute inset-0 md:w-1/2">
              <img
                src={images.storeAmbiance}
                alt="Store Ambiance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/85 md:bg-transparent md:bg-gradient-to-r md:from-transparent md:to-background" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative">
              <div className="flex justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 lg:w-5/12 bg-background/95 backdrop-blur md:bg-background p-6 sm:p-8 md:p-16 border border-border shadow-xl"
                >
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 md:mb-8">
                    Visit Our Store
                  </h2>
                  <div className="space-y-6 text-muted-foreground font-light">
                    <div>
                      <h4 className="text-foreground font-medium mb-2">
                        Address
                      </h4>
                      <p>She Paradise</p>
                      <p>JESUS SAVES Complex, 89C/6,</p>
                      <p>Vellakinar Road, Near Thudiyalur RTO,</p>
                      <p>Thudiyalur, Coimbatore - 641034</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-2">
                        Contact
                      </h4>
                      <p>
                        <a
                          href="tel:+919600683219"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          +91 9600683219
                        </a>
                      </p>
                    </div>
                    <div className="pt-4">
                      <Link
                        href="/visit"
                        className="inline-block bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-xs hover:bg-foreground transition-colors w-full text-center"
                      >
                        Plan Your Visit
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
