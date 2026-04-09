// ── original AI-generated assets ──────────────────────────────────────────────
import sareeImg        from "@/assets/images/saree.png";
import kurthiImg       from "@/assets/images/kurthi.png";
import chuditharImg    from "@/assets/images/chudithar.png";
import westernImg      from "@/assets/images/western.png";
import shirtsImg       from "@/assets/images/shirts.png";
import tshirtsImg      from "@/assets/images/tshirts.png";
import heroOldImg      from "@/assets/images/hero.png";
import showcase1       from "@/assets/images/showcase-1.png";
import showcase2       from "@/assets/images/showcase-2.png";
import showcase3       from "@/assets/images/showcase-3.png";
import showcase4       from "@/assets/images/showcase-4.png";
import showcase5       from "@/assets/images/showcase-5.png";
import showcase6       from "@/assets/images/showcase-6.png";
import showcase7       from "@/assets/images/showcase-7.png";
import showcase8       from "@/assets/images/showcase-8.png";
import boutique1       from "@/assets/images/boutique-1.png";
import boutique2       from "@/assets/images/boutique-2.png";
import storeAmbiance   from "@/assets/images/store-ambiance.png";

// ── assets added before new_photos (festive / kurthi banner) ──────────────────
import festive1        from "@/assets/images/festive-1.png";        // bridal red+green lehenga
import festive2        from "@/assets/images/festive-2.png";        // golden bridal saree
import westernBanner   from "@/assets/images/western-banner.png";   // designer kurthi/sets collage

// ── new_photos ─────────────────────────────────────────────────────────────────
import heroReal        from "@/assets/images/hero-real.jpg";        // dedicated hero shot
import westernDuo      from "@/assets/images/western-duo.jpg";      // 2 women – casual western
import festiveSalwar   from "@/assets/images/festive-salwar.jpg";   // embroidered orange salwar
import bridalLehenga1  from "@/assets/images/bridal-lehenga-1.jpg"; // 3 women – bridal lehengas
import bridalLehenga2  from "@/assets/images/bridal-lehenga-2.jpg"; // Indian bridal wear
import ethnicKurthi1   from "@/assets/images/ethnic-kurthi-1.jpg";  // South-Indian style kurthi
import ethnicKurthi2   from "@/assets/images/ethnic-kurthi-2.jpg";  // South-Indian style kurthi
import westernFloral   from "@/assets/images/western-floral.jpg";   // matching green-white print dresses
import westernCasual   from "@/assets/images/western-casual.jpg";   // mustard + olive casual dresses
import festiveLehenga  from "@/assets/images/festive-lehenga.jpg";  // 3 women – embroidered lehengas on dunes

export const images = {
  // hero
  hero:           heroReal,
  heroOld:        heroOldImg,

  // sarees
  saree:          sareeImg,
  festive2,                 // golden bridal saree

  // kurthis
  kurthi:         kurthiImg,
  westernBanner,            // designer kurthi/sets
  ethnicKurthi1,
  ethnicKurthi2,

  // chudithar
  chudithar:      chuditharImg,

  // western
  western:        westernImg,
  westernDuo,
  westernFloral,
  westernCasual,

  // festive / bridal
  festive1,
  festiveSalwar,
  bridalLehenga1,
  bridalLehenga2,
  festiveLehenga,

  // shirts / tshirts
  shirts:         shirtsImg,
  tshirts:        tshirtsImg,

  // showcase (featured page)
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
  showcase7,
  showcase8,

  // boutique / store
  boutique1,
  boutique2,
  storeAmbiance,
} as const;

export type ImageKey = keyof typeof images;
