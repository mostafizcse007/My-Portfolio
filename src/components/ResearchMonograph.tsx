import { useState } from "react";
import { BenchmarkDatasetId, researchMonograph } from "@/data/research";

export function ResearchMonograph() {
  const [activeTab, setActiveTab] = useState<BenchmarkDatasetId>("nc-sentnob");

  const currentTab =
    researchMonograph.tabs.find((tab) => tab.id === activeTab) ?? researchMonograph.tabs[0];

  const isOodTab = currentTab.id === "banth-ood";

  return (
    <section id="research" className="border-b border-hairline py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Narrative & S0–S6 Methodology */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl leading-snug text-ink md:text-[28px]">
                {researchMonograph.title}
              </h3>
              <p className="prose-measure mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                {researchMonograph.abstract}
              </p>
            </div>

            <div className="space-y-3">
              {researchMonograph.stages.map((item) => (
                <div
                  key={item.stage}
                  className="rounded-control border border-hairline bg-surface p-4"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-control border border-hairline bg-surface-subtle px-2 py-0.5 font-mono text-xs font-medium text-ink">
                        {item.stage}
                      </span>
                      <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
                    </div>
                    <span className="font-mono text-xs font-medium text-accent">{item.tag}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-secondary">{item.summary}</p>
                  <p className="mt-2 font-mono text-xs text-ink-muted tabular-nums">
                    {item.metrics}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Interactive Stage 6 Benchmark Instrument Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-panel border border-hairline bg-surface">
              {/* Panel header & accessible tabs */}
              <div className="flex flex-col gap-3 border-b border-hairline bg-surface-subtle px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-ink">
                    Stage 6 Benchmark Evaluation
                  </h4>
                  <p className="font-mono text-xs text-ink-secondary">{currentTab.metricNote}</p>
                </div>

                <div
                  role="tablist"
                  aria-label="Research benchmark datasets"
                  className="flex flex-wrap gap-1.5"
                >
                  {researchMonograph.tabs.map((tab) => {
                    const selected = tab.id === activeTab;
                    return (
                      <button
                        key={tab.id}
                        role="tab"
                        id={`tab-${tab.id}`}
                        type="button"
                        aria-selected={selected}
                        aria-controls={`panel-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-control px-3 py-1.5 font-mono text-xs font-medium monograph-transition ${
                          selected
                            ? "bg-accent text-[var(--accent-ink-on-fill)]"
                            : "border border-hairline-strong bg-surface text-ink hover:bg-paper"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                id={`panel-${currentTab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentTab.id}`}
                className="p-5 md:p-6 space-y-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-medium text-ink">{currentTab.subtitle}</p>
                  <span className="font-mono text-xs text-ink-muted">
                    Seeds: 42, 123, 2026
                  </span>
                </div>

                {/* Horizontally responsive tabular Macro-F1 ± SD matrix */}
                <div className="overflow-x-auto rounded-control border border-hairline">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-hairline bg-surface-subtle">
                        {currentTab.columnHeaders.map((header, idx) => (
                          <th
                            key={header}
                            scope="col"
                            className={`py-2.5 font-mono text-xs font-medium text-ink whitespace-nowrap ${
                              idx > 0 ? "px-2.5 text-right" : "px-3.5"
                            }`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {currentTab.rows.map((row) => (
                        <tr key={row.model} className="bg-surface">
                          <th scope="row" className="px-3.5 py-3 font-sans text-sm font-medium text-ink">
                            <span className="block whitespace-nowrap">{row.model}</span>
                            {row.note && (
                              <span className="block font-mono text-[11px] font-normal text-ink-secondary">
                                {row.note}
                              </span>
                            )}
                          </th>
                          {row.columns.map((cell, cellIdx) => {
                            const isFinalCol = cellIdx === row.columns.length - 1;
                            return (
                              <td
                                key={cell.label}
                                className={`px-2.5 py-3 text-right font-mono text-xs tabular-nums whitespace-nowrap ${
                                  isFinalCol && !isOodTab
                                    ? "font-medium text-accent"
                                    : "text-ink-secondary"
                                }`}
                              >
                                {cell.value}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Comparison Bars */}
                <div className="space-y-3 border-t border-hairline pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-medium text-ink">
                      {isOodTab
                        ? "Out-of-Domain Macro-F1 Comparison (Full vs. Clean)"
                        : "Stage 1 Baseline vs. Stage 5 Unified (Macro-F1)"}
                    </span>
                    <div className="flex items-center gap-4 font-mono text-[11px] text-ink-secondary">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="inline-block h-2 w-2 rounded-sm bg-ink-muted" />
                        {isOodTab ? "BanTH_Full" : "Stage 1"}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="inline-block h-2 w-2 rounded-sm bg-accent" />
                        {isOodTab ? "BanTH_Clean" : "Stage 5"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {currentTab.rows.map((row) => (
                      <div key={row.model} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-ink">{row.model}</span>
                          <span className="font-mono text-ink-secondary tabular-nums">
                            {row.s1Score.toFixed(2)} →{" "}
                            <span className="font-medium text-accent">
                              {row.s5Score.toFixed(2)}
                            </span>
                          </span>
                        </div>
                        <div className="space-y-1" aria-hidden="true">
                          <div className="h-2 w-full overflow-hidden rounded-sm bg-surface-subtle">
                            <div
                              className="h-full bg-ink-muted monograph-transition"
                              style={{ width: `${Math.min(100, row.s1Score)}%` }}
                            />
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-sm bg-surface-subtle">
                            <div
                              className="h-full bg-accent monograph-transition"
                              style={{ width: `${Math.min(100, row.s5Score)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Callout */}
                <p className="rounded-control border border-hairline bg-surface-subtle px-4 py-3 text-xs leading-relaxed text-ink-secondary">
                  {currentTab.callout}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
