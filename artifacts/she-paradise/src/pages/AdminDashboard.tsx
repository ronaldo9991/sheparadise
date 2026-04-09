import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  LogOut,
  ImagePlus,
  FolderPlus,
  Pencil,
  X,
  RotateCcw,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { PageTransition } from "@/components/layout/PageTransition";
import { useAuth } from "@/context/AuthContext";
import {
  useCollections,
  type Collection,
} from "@/context/CollectionsContext";

export default function AdminDashboard() {
  const { isAdmin, logout } = useAuth();
  const [, navigate] = useLocation();
  const {
    collections,
    addCollection,
    removeCollection,
    addImageToCollection,
    removeImageFromCollection,
    updateCollection,
    resetToDefaults,
  } = useCollections();

  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [showNewCollectionForm, setShowNewCollectionForm] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [newCollectionDesc, setNewCollectionDesc] = useState("");
  const [editingCollection, setEditingCollection] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [imageCaption, setImageCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    if (selectedCollection) {
      const updated = collections.find((c) => c.id === selectedCollection.id);
      if (updated) {
        setSelectedCollection(updated);
      } else {
        setSelectedCollection(null);
      }
    }
  }, [collections, selectedCollection]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddCollection = () => {
    if (!newCollectionName.trim()) return;
    addCollection(newCollectionName.trim(), newCollectionDesc.trim());
    setNewCollectionName("");
    setNewCollectionDesc("");
    setShowNewCollectionForm(false);
  };

  const handleStartEdit = (col: Collection) => {
    setEditingCollection(col.id);
    setEditName(col.name);
    setEditDesc(col.description);
  };

  const handleSaveEdit = () => {
    if (editingCollection && editName.trim()) {
      updateCollection(editingCollection, editName.trim(), editDesc.trim());
      setEditingCollection(null);
    }
  };

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !selectedCollection) return;

      setUploading(true);
      try {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          addImageToCollection(
            selectedCollection.id,
            base64,
            imageCaption.trim() || file.name.replace(/\.[^.]+$/, ""),
          );
          setImageCaption("");
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        };
        reader.readAsDataURL(file);
      } finally {
        setUploading(false);
      }
    },
    [selectedCollection, imageCaption, addImageToCollection],
  );

  if (!isAdmin) return null;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Admin Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border px-4 sm:px-6 md:px-12 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BrandLogo size="sm" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground hidden sm:inline">
                Admin Panel
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="text-xs"
              >
                View Site
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleLogout}
                className="text-xs"
              >
                <LogOut size={14} className="mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 md:px-12 py-10">
          <AnimatePresence mode="wait">
            {selectedCollection ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Collection Detail View */}
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
                >
                  <ChevronLeft size={16} />
                  Back to Collections
                </button>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                  <div>
                    <h2 className="font-serif text-3xl text-foreground">
                      {selectedCollection.name}
                    </h2>
                    <p className="text-muted-foreground font-light mt-1">
                      {selectedCollection.description}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedCollection.images.length}{" "}
                    {selectedCollection.images.length === 1
                      ? "image"
                      : "images"}
                  </p>
                </div>

                {/* Upload Section */}
                <Card className="mb-10">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ImagePlus size={18} />
                      Add Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        placeholder="Image caption (optional)"
                        value={imageCaption}
                        onChange={(e) => setImageCaption(e.target.value)}
                        className="flex-1"
                      />
                      <div className="relative">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button
                          variant="default"
                          disabled={uploading}
                          className="w-full sm:w-auto pointer-events-none"
                        >
                          <Plus size={16} className="mr-1" />
                          {uploading ? "Uploading..." : "Choose Image"}
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Images are stored as base64 in your browser's local
                      storage. Keep file sizes reasonable (&lt; 2MB).
                    </p>
                  </CardContent>
                </Card>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {selectedCollection.images.map((img) => (
                    <motion.div
                      key={img.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group relative border border-border overflow-hidden bg-muted"
                    >
                      <div className="aspect-[3/4]">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex items-center justify-between gap-2">
                        <p className="text-sm text-foreground truncate flex-1">
                          {img.caption}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            removeImageFromCollection(
                              selectedCollection.id,
                              img.id,
                            )
                          }
                          className="shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {selectedCollection.images.length === 0 && (
                  <div className="text-center py-16 text-muted-foreground border border-dashed border-border">
                    <ImagePlus
                      size={40}
                      className="mx-auto mb-4 opacity-40"
                    />
                    <p className="font-light">
                      No images yet. Upload your first image above.
                    </p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Collections List View */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                  <div>
                    <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                      Manage Collections
                    </h1>
                    <p className="text-muted-foreground font-light mt-1">
                      {collections.length}{" "}
                      {collections.length === 1
                        ? "collection"
                        : "collections"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetToDefaults}
                      className="text-xs"
                    >
                      <RotateCcw size={14} className="mr-1" />
                      Reset Defaults
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setShowNewCollectionForm(true)}
                      className="text-xs"
                    >
                      <FolderPlus size={14} className="mr-1" />
                      New Collection
                    </Button>
                  </div>
                </div>

                {/* New Collection Form */}
                <AnimatePresence>
                  {showNewCollectionForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <Card className="mb-8">
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle className="text-lg">
                            New Collection
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowNewCollectionForm(false)}
                          >
                            <X size={16} />
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Input
                              placeholder="Collection name"
                              value={newCollectionName}
                              onChange={(e) =>
                                setNewCollectionName(e.target.value)
                              }
                              className="flex-1"
                            />
                            <Input
                              placeholder="Description"
                              value={newCollectionDesc}
                              onChange={(e) =>
                                setNewCollectionDesc(e.target.value)
                              }
                              className="flex-1"
                            />
                            <Button
                              onClick={handleAddCollection}
                              disabled={!newCollectionName.trim()}
                            >
                              <Plus size={16} className="mr-1" />
                              Add
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collections.map((col) => (
                    <motion.div
                      key={col.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Card className="overflow-hidden group hover:shadow-md transition-shadow">
                        {/* Cover */}
                        <div
                          className="aspect-[16/10] bg-muted cursor-pointer relative overflow-hidden"
                          onClick={() => setSelectedCollection(col)}
                        >
                          {col.coverImage ? (
                            <img
                              src={col.coverImage}
                              alt={col.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                              No cover image
                            </div>
                          )}
                          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs text-foreground">
                            {col.images.length}{" "}
                            {col.images.length === 1 ? "image" : "images"}
                          </div>
                        </div>

                        <CardContent className="p-5">
                          {editingCollection === col.id ? (
                            <div className="space-y-3">
                              <Input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                placeholder="Name"
                              />
                              <Input
                                value={editDesc}
                                onChange={(e) => setEditDesc(e.target.value)}
                                placeholder="Description"
                              />
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={handleSaveEdit}
                                  className="text-xs"
                                >
                                  Save
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => setEditingCollection(null)}
                                  className="text-xs"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div
                                className="cursor-pointer"
                                onClick={() => setSelectedCollection(col)}
                              >
                                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                                  {col.name}
                                </h3>
                                <p className="text-muted-foreground text-sm font-light line-clamp-2">
                                  {col.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleStartEdit(col)}
                                  className="text-xs flex-1"
                                >
                                  <Pencil size={12} className="mr-1" />
                                  Edit
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    setSelectedCollection(col)
                                  }
                                  className="text-xs flex-1"
                                >
                                  <ImagePlus size={12} className="mr-1" />
                                  Images
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeCollection(col.id)}
                                  className="text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 size={12} />
                                </Button>
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {collections.length === 0 && (
                  <div className="text-center py-20 text-muted-foreground border border-dashed border-border">
                    <FolderPlus
                      size={40}
                      className="mx-auto mb-4 opacity-40"
                    />
                    <p className="font-light mb-4">
                      No collections yet. Create your first collection.
                    </p>
                    <Button
                      size="sm"
                      onClick={() => setShowNewCollectionForm(true)}
                    >
                      <Plus size={14} className="mr-1" />
                      Create Collection
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </PageTransition>
  );
}
