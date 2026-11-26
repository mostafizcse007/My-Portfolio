import { researchMonograph } from "@/data/research";

export function ResearchMonograph() {
  return (
    <section id="research" className="border-b border-hairline py-12 md:py-16">
      <div className="container">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs text-ink-secondary">
              {researchMonograph.eyebrow}
            </p>
            <h2 className="section-display text-ink">Research Monograph</h2>
          </div>
          <p className="inline-flex w-fit items-center gap-2 rounded-control border border-accent-warm/30 bg-accent-warm-soft px-3 py-1.5 font-mono text-xs font-medium text-[var(--accent-warm-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" aria-hidden="true" />
            <span>{researchMonograph.statusLabel}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl leading-snug text-ink md:text-[28px]">
              {researchMonograph.title}
            </h3>
            <p className="prose-measure text-sm leading-relaxed text-ink-secondary md:text-base">
              {researchMonograph.abstract}
            </p>
            <p className="font-mono text-xs text-ink-muted">
              Full benchmarks available upon request.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-panel border border-hairline bg-surface p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="font-mono text-xs font-medium text-ink">
                  NC-SentNoB · Stage 5 Unified
                </span>
                <span className="font-mono text-xs text-ink-muted">3 Seeds (42, 123, 2026)</span>
              </div>

              <div>
                <p className="font-mono text-xs text-ink-secondary">
                  BanglaBERT Mean10 Macro-F1
                </p>
                <p className="mt-1 font-serif text-4xl text-accent tabular-nums">71.94 ± 2.29</p>
                <p className="mt-1 font-mono text-xs text-ink-secondary tabular-nums">
                  Up from 30.88 ± 6.98 at Stage 1 · 21.4× variance reduction on XLM-R Base
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
