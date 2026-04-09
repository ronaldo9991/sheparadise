import { cn } from "@/lib/utils";

const LOGO_SRC = "/logo2.png";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  alt?: string;
};

export function BrandLogo({
  size = "md",
  className,
  alt = "She Paradise",
}: BrandLogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      decoding="async"
      className={cn(
        "block select-none object-contain",
        size === "sm" && "h-8 w-auto",
        size === "md" && "h-10 w-auto",
        size === "lg" && "h-14 w-auto",
        size === "xl" && "h-20 w-auto",
        className,
      )}
    />
  );
}
