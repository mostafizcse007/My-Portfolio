import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { heroIndexRows, identity, publicProfiles } from "@/data/profiles";

export function Hero() {
  return (
    <section id="top" className="border-b border-hairline py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left 7 columns: Editorial thesis statement & primary actions */}
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs text-ink-secondary">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>Daffodil International University · B.Sc. CSE (3rd Year)</span>
            </p>

            <h1 className="hero-display mb-5 text-ink">
              Building verifiable systems and noise-robust machine learning
            </h1>

            <p className="prose-measure mb-7 text-base leading-relaxed text-ink-secondary md:text-[17px]">
              I am Mostafizur Rahman Antu, an undergraduate CSE researcher and engineer in Dhaka
              focused on cross-script Bangla NLP robustness, leak-free medical imaging quality
              control, and deterministic client-side ML instrumentation.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex h-11 items-center gap-2 rounded-control bg-accent px-5 text-sm font-medium text-[var(--accent-ink-on-fill)] hover:bg-accent-hover monograph-transition"
              >
                <span>Explore Research</span>
                <ArrowDownRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-control border border-hairline-strong bg-surface px-5 text-sm font-medium text-ink hover:bg-surface-subtle monograph-transition"
              >
                <span>Resume</span>
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right 5 columns: Hairline-ruled Verified Profile Index */}
          <aside
            aria-label="Verified profile index"
            className="lg:col-span-5 rounded-panel border border-hairline bg-surface"
          >
            <div className="flex items-center justify-between border-b border-hairline bg-surface-subtle px-5 py-3">
              <span className="font-mono text-xs font-medium text-ink">
                Verified Profile Index
              </span>
              <span className="font-mono text-xs text-ink-secondary">{identity.location}</span>
            </div>

            <dl className="divide-y divide-hairline">
              {heroIndexRows.map((row) => (
                <div
                  key={row.index}
                  className="flex flex-col gap-1 px-5 py-3 text-sm sm:grid sm:grid-cols-12 sm:items-baseline sm:gap-2"
                >
                  <dt className="sm:col-span-5 flex items-baseline gap-2.5 text-ink-secondary">
                    <span className="font-mono text-xs text-ink-muted tabular-nums">
                      {row.index}
                    </span>
                    <span className="font-medium text-ink">{row.label}</span>
                  </dt>
                  <dd className="pl-6 sm:pl-0 sm:col-span-7 sm:text-right">
                    <span className="block font-mono text-xs font-medium text-accent tabular-nums">
                      {row.value}
                    </span>
                    <span className="block font-mono text-[11px] text-ink-muted tabular-nums">
                      {row.detail}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-hairline bg-surface-subtle px-5 py-3">
              {publicProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-ink hover:text-accent monograph-transition whitespace-nowrap"
                >
                  <span>{profile.name}</span>
                  <ArrowUpRight size={11} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
