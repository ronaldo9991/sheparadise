import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Palette, Users, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { images } from "@/data/defaultImages";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const promises = [
  {
    icon: <Sparkles className="h-6 w-6" strokeWidth={1.5} />,
    title: "Hand-Picked Quality",
    desc: "Every piece in our store is carefully selected for fabric quality, craftsmanship, and design. We partner only with trusted artisans and designers.",
  },
  {
    icon: <Palette className="h-6 w-6" strokeWidth={1.5} />,
    title: "Trend-Forward Curation",
    desc: "Our buying team tracks global and Indian fashion trends to bring you fresh, relevant styles each season while honoring timeless silhouettes.",
  },
  {
    icon: <Users className="h-6 w-6" strokeWidth={1.5} />,
    title: "Personal Styling",
    desc: "Our in-store stylists offer complimentary advice on pairing, fit, and accessorizing. Walk in with a vision, walk out with the perfect outfit.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
    title: "Trusted Since Day One",
    desc: "Built on integrity and customer trust, She Paradise has become Coimbatore's go-to destination for women who demand both quality and elegance.",
  },
];

export default function Boutique() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <Navbar />
        <WhatsAppButton />

        <main className="pt-20 md:pt-28 pb-0">
          {/* Page Header */}
          <div className="container mx-auto px-4 sm:px-6 md:px-12 mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary tracking-widest uppercase text-xs mb-4 block">
                The Experience
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-4 md:mb-6">
                The Boutique
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                She Paradise is more than a clothing store. It's a space where
                fashion meets warmth, where every visit feels like stepping into
                a world curated just for you.
              </p>
            </motion.div>
          </div>

          {/* Store Ambiance Section */}
          <section className="bg-background overflow-hidden mb-16 md:mb-24">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={images.boutique1}
                      alt="Boutique Interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-6 w-2/3 aspect-[4/3] overflow-hidden border-8 border-background hidden md:block shadow-xl">
                    <img
                      src={images.boutique2}
                      alt="Boutique Details"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex flex-col items-start pt-2 md:pt-12 lg:pt-0"
                >
                  <span className="text-primary tracking-widest uppercase text-xs mb-4">
                    Step Inside
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">
                    A Space Designed
                    <br />
                    for Luxury
                  </h2>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                    Cream marble floors, warm gold accents, and the softest silk
                    fabrics draped with care. Shopping at She Paradise is designed
                    to be an escape from the ordinary.
                  </p>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                    Let our attentive staff guide you through curating looks that
                    speak to your personal style. Whether you're shopping for a
                    grand celebration or simply updating your everyday wardrobe,
                    you'll feel at home here.
                  </p>
                  <Link
                    href="/visit"
                    className="border border-foreground text-foreground px-8 py-4 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    Plan Your Visit
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-14 md:py-24 bg-muted/40">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10 md:mb-16"
              >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                  The She Paradise Promise
                </h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {promises.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Full-width Ambiance Image */}
          <section className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={images.storeAmbiance}
              alt="Store ambiance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center px-4"
              >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-white mb-5 md:mb-6 drop-shadow-lg">
                  Fashion is an Expression of You
                </h2>
                <a
                  href="https://wa.me/919600683219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-foreground px-8 py-4 uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Book a Styling Session
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
