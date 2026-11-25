import { useEffect } from "react";

export default function NotFound({ pathname = "" }: { pathname?: string }) {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 text-ink">
      <div className="max-w-md rounded-panel border border-hairline bg-surface p-8 text-center">
        <p className="font-mono text-xs text-ink-muted">404</p>
        <h1 className="mt-2 font-serif text-4xl text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-ink-secondary">
          The requested path does not exist in this portfolio record.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex h-10 items-center rounded-control bg-accent px-5 text-sm font-medium text-[var(--accent-ink-on-fill)] hover:bg-accent-hover monograph-transition"
        >
          Return home
        </a>
      </div>
    </main>
  );
}
