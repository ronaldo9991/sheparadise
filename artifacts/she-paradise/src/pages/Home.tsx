import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// Image Imports
import heroImg from "@/assets/images/hero.png";
import kurthiImg from "@/assets/images/kurthi.png";
import chuditharImg from "@/assets/images/chudithar.png";
import sareeImg from "@/assets/images/saree.png";
import westernImg from "@/assets/images/western.png";
import shirtsImg from "@/assets/images/shirts.png";
import tshirtsImg from "@/assets/images/tshirts.png";

import showcase1 from "@/assets/images/showcase-1.png";
import showcase2 from "@/assets/images/showcase-2.png";
import showcase3 from "@/assets/images/showcase-3.png";
import showcase4 from "@/assets/images/showcase-4.png";
import showcase5 from "@/assets/images/showcase-5.png";
import showcase6 from "@/assets/images/showcase-6.png";
import showcase7 from "@/assets/images/showcase-7.png";
import showcase8 from "@/assets/images/showcase-8.png";

import boutique1 from "@/assets/images/boutique-1.png";
import boutique2 from "@/assets/images/boutique-2.png";

import storeAmbiance from "@/assets/images/store-ambiance.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categories = [
  { name: "Elegant Sarees", image: sareeImg, desc: "Timeless drapes" },
  { name: "Designer Kurthis", image: kurthiImg, desc: "Everyday grace" },
  { name: "Chudithar Sets", image: chuditharImg, desc: "Classic sets" },
  { name: "Western Tops", image: westernImg, desc: "Modern chic" },
  { name: "Formal Shirts", image: shirtsImg, desc: "Sophisticated styles" },
  { name: "Premium T-Shirts", image: tshirtsImg, desc: "Elevated casuals" },
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <WhatsAppButton />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative h-[90svh] md:h-[100svh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Elegant Indian woman in premium fashion"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-primary-foreground/80 tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
                Premium Boutique • Coimbatore
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-8 drop-shadow-lg">
                Where Elegance<br />
                <span className="italic font-light text-primary-foreground/90">Finds You</span>
              </h1>
              <a
                href="#collections"
                className="inline-block bg-white text-foreground px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
              >
                Discover the Collection
              </a>
            </motion.div>
          </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="py-24 md:py-32 px-6 bg-background">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-[1px] bg-primary mb-12" />
              <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-snug mb-8 font-light">
                Curating the wardrobe of the modern Indian woman, balancing timeless tradition with contemporary grace.
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                She Paradise isn't just a store—it's an experience. We bring the luxury and refinement of top-tier boutiques to Coimbatore, offering a carefully selected range of clothing that celebrates femininity and confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* COLLECTIONS GRID */}
        <section id="collections" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center mb-16 text-center">
              <span className="text-primary tracking-widest uppercase text-xs mb-4">Our Categories</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">The Collections</h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {categories.map((category, index) => (
                <motion.div key={index} variants={fadeInUp} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-muted-foreground font-light italic">{category.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BOUTIQUE EXPERIENCE */}
        <section id="boutique" className="py-24 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={boutique1} alt="Boutique Interior" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-12 -right-12 w-2/3 aspect-[4/3] overflow-hidden border-8 border-background hidden md:block">
                  <img src={boutique2} alt="Boutique Details" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex flex-col items-start pt-12 md:pt-0"
              >
                <span className="text-primary tracking-widest uppercase text-xs mb-4">The Experience</span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                  Step Into<br />Luxury
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                  Cream marble floors, warm gold accents, and the softest silk fabrics draped with care. Shopping at She Paradise is designed to be an escape. Let our attentive staff guide you through curating looks that speak to your personal style.
                </p>
                <a
                  href="#visit"
                  className="border border-foreground text-foreground px-8 py-4 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Plan Your Visit
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section id="featured" className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <span className="text-secondary tracking-widest uppercase text-xs mb-4 block">New Arrivals</span>
                <h2 className="font-serif text-4xl md:text-5xl text-background">Curated Looks</h2>
              </div>
              <a href="https://wa.me/919600683219" target="_blank" rel="noopener noreferrer" className="text-muted border-b border-muted pb-1 hover:text-white transition-colors uppercase tracking-widest text-xs w-fit">
                Inquire on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[showcase1, showcase2, showcase3, showcase4, showcase5, showcase6, showcase7, showcase8].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group overflow-hidden ${i === 1 || i === 4 ? 'aspect-square' : 'aspect-[3/4]'}`}
                >
                  <img src={img} alt={`Featured Product ${i + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 md:py-32 bg-muted/50 text-center">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16">The She Paradise Promise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary mb-6 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="font-serif text-xl mb-4">Premium Quality</h3>
                <p className="text-muted-foreground font-light">Handpicked fabrics and impeccable stitching that feel as luxurious as they look.</p>
              </motion.div>
              
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary mb-6 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
                </div>
                <h3 className="font-serif text-xl mb-4">Exclusive Curation</h3>
                <p className="text-muted-foreground font-light">Unique designs ensuring you stand out, whether at a wedding or the office.</p>
              </motion.div>
              
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary mb-6 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 className="font-serif text-xl mb-4">Personalized Styling</h3>
                <p className="text-muted-foreground font-light">Expert advice to help you find the perfect fit, color, and silhouette for any occasion.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISIT STORE */}
        <section id="visit" className="relative py-32 bg-background">
          <div className="absolute inset-0 md:w-1/2">
            <img src={storeAmbiance} alt="Store Ambiance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/80 md:bg-transparent md:bg-gradient-to-r md:from-transparent md:to-background" />
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative">
            <div className="flex justify-end">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 lg:w-5/12 bg-background/95 backdrop-blur md:bg-background p-8 md:p-16 border border-border shadow-xl"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Visit Our Store</h2>
                
                <div className="space-y-6 text-muted-foreground font-light">
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Address</h4>
                    <p>She Paradise</p>
                    <p>JESUS SAVES Complex, 89C/6,</p>
                    <p>Vellakinar Road, Near Thudiyalur RTO,</p>
                    <p>Thudiyalur, Coimbatore - 641034</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Contact</h4>
                    <p className="flex items-center gap-2">
                      <span>Phone:</span> 
                      <a href="tel:+919600683219" className="text-foreground hover:text-primary transition-colors">+91 9600683219</a>
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                      <span>WhatsApp:</span> 
                      <a href="https://wa.me/919600683219" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors underline underline-offset-4">Message Us</a>
                    </p>
                  </div>
                  
                  <div className="pt-8">
                    <a
                      href="https://maps.google.com/?q=Thudiyalur,Coimbatore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-xs hover:bg-foreground transition-colors w-full text-center"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
