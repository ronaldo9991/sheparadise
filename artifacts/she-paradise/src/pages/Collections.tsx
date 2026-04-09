import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { useCollections, type Collection } from "@/context/CollectionsContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Collections() {
  const { collections } = useCollections();
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <Navbar />
        <WhatsAppButton />

        <main className="pt-28 pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary tracking-widest uppercase text-xs mb-4 block">
                Explore
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
                Our Collections
              </h1>
              <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                From timeless sarees to modern western wear, discover a curated
                wardrobe crafted for the contemporary Indian woman.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {selectedCollection ? (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Back button */}
                  <button
                    onClick={() => setSelectedCollection(null)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm uppercase tracking-widest"
                  >
                    <ChevronLeft size={16} />
                    All Collections
                  </button>

                  {/* Collection title */}
                  <div className="mb-10">
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-3">
                      {selectedCollection.name}
                    </h2>
                    <p className="text-muted-foreground text-lg font-light">
                      {selectedCollection.description}
                    </p>
                  </div>

                  {/* Images grid */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {selectedCollection.images.map((img) => (
                      <motion.div
                        key={img.id}
                        variants={fadeInUp}
                        className="group cursor-pointer"
                        onClick={() => setLightboxImage(img.url)}
                      >
                        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-white text-sm font-light">
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {selectedCollection.images.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                      <p className="text-lg font-light">
                        No images in this collection yet.
                      </p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                  {collections.map((col) => (
                    <motion.div
                      key={col.id}
                      variants={fadeInUp}
                      className="group cursor-pointer"
                      onClick={() => setSelectedCollection(col)}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-5">
                        {col.coverImage ? (
                          <img
                            src={col.coverImage}
                            alt={col.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            No Cover Image
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                          <p className="text-white/80 text-sm font-light">
                            {col.images.length}{" "}
                            {col.images.length === 1 ? "piece" : "pieces"}
                          </p>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {col.name}
                      </h3>
                      <p className="text-muted-foreground font-light italic">
                        {col.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
