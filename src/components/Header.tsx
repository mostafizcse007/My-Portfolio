import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { identity, navItems } from "@/data/profiles";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper">
      <div className="container flex h-16 items-center justify-between gap-2 lg:gap-4">
        <a
          href="#top"
          className="font-serif text-[18px] lg:text-[22px] tracking-tight text-ink hover:text-accent monograph-transition whitespace-nowrap shrink-0"
        >
          {identity.name}
        </a>

        <div className="flex items-center gap-1.5 lg:gap-2">
          {/* Desktop navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-control px-1.5 lg:px-2.5 py-1.5 text-[13px] lg:text-sm font-medium text-ink-secondary hover:bg-surface-subtle hover:text-ink monograph-transition whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-1 mr-0.5 lg:ml-2 lg:mr-1 flex items-center border-l border-hairline pl-2 lg:pl-3">
              <a
                href={identity.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center rounded-control border border-hairline-strong bg-surface px-2.5 lg:px-3 font-mono text-xs font-medium text-ink hover:bg-surface-subtle monograph-transition whitespace-nowrap"
              >
                CV
              </a>
            </div>
          </nav>

          {/* Single shared theme toggle for all viewports */}
          <ThemeToggle />

          {/* Mobile menu trigger */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            data-testid="mobile-menu-toggle"
            className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-hairline-strong bg-surface text-ink hover:bg-surface-subtle monograph-transition md:hidden"
          >
            {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-label="Mobile navigation"
          className="border-t border-hairline bg-surface md:hidden"
        >
          <nav className="container flex flex-col py-3" aria-label="Mobile primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex h-11 items-center border-b border-hairline/70 px-1 text-sm font-medium text-ink hover:text-accent monograph-transition"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3 pb-1">
              <a
                href={identity.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-control border border-hairline-strong bg-surface-subtle px-4 font-mono text-xs font-medium text-ink hover:bg-hairline/40 monograph-transition"
              >
                Academic CV (PDF)
              </a>
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-control bg-accent px-4 font-mono text-xs font-medium text-[var(--accent-ink-on-fill)] hover:bg-accent-hover monograph-transition"
              >
                Resume (PDF)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
