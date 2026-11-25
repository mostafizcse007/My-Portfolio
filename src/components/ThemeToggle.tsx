import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextMode = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-testid="theme-toggle"
      aria-label={`Switch to ${nextMode} theme`}
      title={`Switch to ${nextMode} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-hairline-strong bg-surface text-ink hover:bg-surface-subtle monograph-transition"
    >
      {theme === "light" ? (
        <Moon size={16} strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <Sun size={16} strokeWidth={1.5} aria-hidden="true" />
      )}
    </button>
  );
}
