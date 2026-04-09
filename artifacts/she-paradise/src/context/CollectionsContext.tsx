import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { images } from "@/data/defaultImages";

export type CollectionImage = {
  id: string;
  url: string;
  caption: string;
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: CollectionImage[];
};

type CollectionsContextType = {
  collections: Collection[];
  addCollection: (name: string, description: string) => void;
  removeCollection: (id: string) => void;
  addImageToCollection: (collectionId: string, url: string, caption: string) => void;
  removeImageFromCollection: (collectionId: string, imageId: string) => void;
  updateCollection: (id: string, name: string, description: string) => void;
  resetToDefaults: () => void;
};

const CollectionsContext = createContext<CollectionsContextType | null>(null);

const STORAGE_KEY = "sp_collections";
const VERSION_KEY = "sp_collections_v";
const CURRENT_VERSION = "3"; // bumped: new real photos added

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getDefaultCollections(): Collection[] {
  return [
    // ── 1. Elegant Sarees ───────────────────────────────────────────────────────
    {
      id: "sarees",
      name: "Elegant Sarees",
      description: "Timeless drapes for every occasion",
      coverImage: images.saree,
      images: [
        { id: "s1", url: images.saree,    caption: "Premium Silk Saree" },
        { id: "s2", url: images.festive2, caption: "Golden Bridal Banarasi Saree" },
        { id: "s3", url: images.showcase1, caption: "Designer Saree Collection" },
        { id: "s4", url: images.showcase5, caption: "Festive Saree Lookbook" },
      ],
    },

    // ── 2. Designer Kurthis ─────────────────────────────────────────────────────
    {
      id: "kurthis",
      name: "Designer Kurthis",
      description: "Everyday grace with a touch of elegance",
      coverImage: images.ethnicKurthi1,
      images: [
        { id: "k1", url: images.ethnicKurthi1,  caption: "South Indian Designer Kurthi" },
        { id: "k2", url: images.ethnicKurthi2,  caption: "Traditional Kurthi Collection" },
        { id: "k3", url: images.westernBanner,  caption: "Designer Kurthi & Set Looks" },
        { id: "k4", url: images.kurthi,         caption: "Embroidered Kurthi" },
        { id: "k5", url: images.showcase2,      caption: "Casual Kurthi Styles" },
        { id: "k6", url: images.showcase6,      caption: "Party Wear Kurthi" },
      ],
    },

    // ── 3. Chudithar Sets ───────────────────────────────────────────────────────
    {
      id: "chudithars",
      name: "Chudithar Sets",
      description: "Classic comfort meets contemporary style",
      coverImage: images.chudithar,
      images: [
        { id: "c1", url: images.chudithar,  caption: "Elegant Chudithar Set" },
        { id: "c2", url: images.showcase3,  caption: "Silk Chudithar" },
        { id: "c3", url: images.showcase7,  caption: "Cotton Chudithar Set" },
      ],
    },

    // ── 4. Festive & Bridal ─────────────────────────────────────────────────────
    {
      id: "festive",
      name: "Festive & Bridal",
      description: "Royal attire for your most cherished moments",
      coverImage: images.festive1,
      images: [
        { id: "f1", url: images.festive1,        caption: "Bridal Red & Green Lehenga" },
        { id: "f2", url: images.bridalLehenga1,  caption: "Bridal Lehenga Collection" },
        { id: "f3", url: images.festiveLehenga,  caption: "Embroidered Lehengas on Sand Dunes" },
        { id: "f4", url: images.festiveSalwar,   caption: "Embroidered Festive Salwar Suit" },
        { id: "f5", url: images.bridalLehenga2,  caption: "Designer Bridal Ensemble" },
        { id: "f6", url: images.festive2,        caption: "Golden Bridal Banarasi Saree" },
      ],
    },

    // ── 5. Western Wear ─────────────────────────────────────────────────────────
    {
      id: "western",
      name: "Western Wear",
      description: "Modern chic for the contemporary woman",
      coverImage: images.westernFloral,
      images: [
        { id: "w1", url: images.westernFloral,  caption: "Matching Floral Print Dresses" },
        { id: "w2", url: images.westernCasual,  caption: "Casual Mustard & Olive Outfits" },
        { id: "w3", url: images.westernDuo,     caption: "Stylish Casual Western Wear" },
        { id: "w4", url: images.western,        caption: "Contemporary Western Collection" },
        { id: "w5", url: images.showcase4,      caption: "Evening Western Look" },
        { id: "w6", url: images.showcase8,      caption: "Casual Western Styles" },
      ],
    },

    // ── 6. Formal Shirts ────────────────────────────────────────────────────────
    {
      id: "shirts",
      name: "Formal Shirts",
      description: "Sophisticated styles for the professional woman",
      coverImage: images.shirts,
      images: [
        { id: "sh1", url: images.shirts,    caption: "Premium Formal Shirt" },
        { id: "sh2", url: images.showcase3, caption: "Office-Ready Look" },
      ],
    },

    // ── 7. Premium T-Shirts ─────────────────────────────────────────────────────
    {
      id: "tshirts",
      name: "Premium T-Shirts",
      description: "Elevated everyday casuals",
      coverImage: images.tshirts,
      images: [
        { id: "t1", url: images.tshirts,    caption: "Luxury Premium T-Shirt" },
        { id: "t2", url: images.showcase4,  caption: "Casual Elevated Look" },
      ],
    },
  ];
}

function loadCollections(): Collection[] {
  try {
    const version = localStorage.getItem(VERSION_KEY);
    if (version !== CURRENT_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      return getDefaultCollections();
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return getDefaultCollections();
}

export function CollectionsProvider({ children }: { children: ReactNode }) {
  const [collections, setCollections] = useState<Collection[]>(loadCollections);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collections));
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    } catch {}
  }, [collections]);

  const addCollection = (name: string, description: string) => {
    const newCol: Collection = {
      id: generateId(),
      name,
      description,
      coverImage: "",
      images: [],
    };
    setCollections((prev) => [...prev, newCol]);
  };

  const removeCollection = (id: string) => {
    setCollections((prev) => prev.filter((c) => c.id !== id));
  };

  const addImageToCollection = (collectionId: string, url: string, caption: string) => {
    setCollections((prev) =>
      prev.map((c) => {
        if (c.id !== collectionId) return c;
        const newImg: CollectionImage = { id: generateId(), url, caption };
        const updated = [...c.images, newImg];
        return { ...c, images: updated, coverImage: c.coverImage || url };
      }),
    );
  };

  const removeImageFromCollection = (collectionId: string, imageId: string) => {
    setCollections((prev) =>
      prev.map((c) => {
        if (c.id !== collectionId) return c;
        const removedImg = c.images.find((img) => img.id === imageId);
        const updated = c.images.filter((img) => img.id !== imageId);
        const coverImage =
          c.coverImage === removedImg?.url
            ? (updated[0]?.url ?? "")
            : c.coverImage;
        return { ...c, images: updated, coverImage };
      }),
    );
  };

  const updateCollection = (id: string, name: string, description: string) => {
    setCollections((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name, description } : c)),
    );
  };

  const resetToDefaults = () => {
    setCollections(getDefaultCollections());
  };

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        addCollection,
        removeCollection,
        addImageToCollection,
        removeImageFromCollection,
        updateCollection,
        resetToDefaults,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
}

export function useCollections() {
  const ctx = useContext(CollectionsContext);
  if (!ctx) throw new Error("useCollections must be used within CollectionsProvider");
  return ctx;
}
