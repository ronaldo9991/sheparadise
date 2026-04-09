import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  /**
   * `hero` — glass/light control over the hero imagery.
   * `bar` — solid surface control (scrolled nav, mobile sheet background, etc.).
   */
  variant?: "hero" | "bar";
  className?: string;
};

export function ThemeToggle({ variant = "bar", className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const nextLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  const base =
    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const heroStyles =
    "border-white/40 bg-white/12 text-white backdrop-blur-sm hover:bg-white/20";

  const barStyles =
    "border-border bg-background/90 text-foreground shadow-sm hover:bg-muted hover:text-foreground";

  const surfaceClass = variant === "hero" ? heroStyles : barStyles;

  if (!mounted) {
    return (
      <span
        className={`${base} ${surfaceClass} ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`${base} ${surfaceClass} ${className}`}
      aria-label={nextLabel}
      aria-pressed={isDark}
    >
      {isDark ? <Sun className="h-4 w-4" strokeWidth={1.75} /> : <Moon className="h-4 w-4" strokeWidth={1.75} />}
    </button>
  );
}
