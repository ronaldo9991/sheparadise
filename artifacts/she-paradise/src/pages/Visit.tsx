import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
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
    transition: { staggerChildren: 0.12 },
  },
};

export default function Visit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              className="text-center mb-10 md:mb-20"
            >
              <span className="text-primary tracking-widest uppercase text-xs mb-3 md:mb-4 block">
                Find Us
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-4 md:mb-6">
                Visit Us
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto">
                We'd love to welcome you to our boutique. Come discover our
                collections in person and experience the She Paradise difference.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left: Contact Info Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Address */}
                <motion.div
                  variants={fadeInUp}
                  className="border border-border p-5 sm:p-8 flex gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      Address
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      She Paradise
                      <br />
                      JESUS SAVES Complex, 89C/6,
                      <br />
                      Vellakinar Road, Near Thudiyalur RTO,
                      <br />
                      Thudiyalur, Coimbatore - 641034
                    </p>
                    <a
                      href="https://maps.google.com/?q=Thudiyalur,Coimbatore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm mt-4 hover:text-foreground transition-colors"
                    >
                      <Navigation size={14} />
                      Get Directions
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={fadeInUp}
                  className="border border-border p-5 sm:p-8 flex gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      Phone
                    </h3>
                    <a
                      href="tel:+919600683219"
                      className="text-muted-foreground font-light hover:text-primary transition-colors text-lg"
                    >
                      +91 9600683219
                    </a>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  variants={fadeInUp}
                  className="border border-border p-5 sm:p-8 flex gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-primary">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground font-light mb-3">
                      Chat with us for quick inquiries, pricing, and
                      availability.
                    </p>
                    <a
                      href="https://wa.me/919600683219"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#25D366] text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#128C7E] transition-colors"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  variants={fadeInUp}
                  className="border border-border p-5 sm:p-8 flex gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-primary">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      Store Hours
                    </h3>
                    <div className="text-muted-foreground font-light space-y-1">
                      <p>Monday – Saturday: 10:00 AM – 8:30 PM</p>
                      <p>Sunday: 10:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Map / Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Map Embed */}
                <div className="aspect-[4/3] bg-muted border border-border overflow-hidden">
                  <iframe
                    title="She Paradise Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.95!3d11.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAzJzAwLjAiTiA3NsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Store Photo */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={images.storeAmbiance}
                    alt="She Paradise Store"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
