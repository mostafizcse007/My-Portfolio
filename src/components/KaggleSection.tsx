import { ArrowUpRight } from "lucide-react";
import { kaggleData } from "@/data/profiles";

export function KaggleSection() {
  return (
    <section id="kaggle" className="border-b border-hairline py-12 md:py-16">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs text-ink-secondary">
              Competitive Data Science &amp; Kernels
            </p>
            <h2 className="section-display text-ink">Kaggle Notebooks Expert</h2>
          </div>
          <a
            href={kaggleData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 rounded-control border border-hairline-strong bg-surface px-3.5 py-2 font-mono text-xs font-medium text-ink hover:bg-surface-subtle monograph-transition"
          >
            <span>kaggle.com/alsomostafiz</span>
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Asymmetric 2x2 metric strip */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {kaggleData.summaryStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`rounded-panel border border-hairline bg-surface p-5 ${
                  idx === 0 ? "border-accent/40" : ""
                }`}
              >
                <p className="font-mono text-xs text-ink-muted">{stat.label}</p>
                <p className="mt-2 font-serif text-2xl text-ink tabular-nums">{stat.value}</p>
                <p className="mt-1 font-mono text-xs text-ink-secondary tabular-nums">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Bronze Notebooks Ledger */}
          <div className="lg:col-span-7">
            <div className="rounded-panel border border-hairline bg-surface">
              <div className="flex items-center justify-between border-b border-hairline bg-surface-subtle px-5 py-3.5">
                <h3 className="font-sans text-sm font-semibold text-ink">
                  Top 5 Bronze Notebooks
                </h3>
                <span className="font-mono text-xs text-ink-secondary tabular-nums">
                  {kaggleData.medals} · 83 Total Upvotes
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-hairline bg-surface-subtle/50">
                      <th scope="col" className="px-5 py-2.5 font-mono text-xs font-medium text-ink">
                        Notebook
                      </th>
                      <th scope="col" className="px-4 py-2.5 font-mono text-xs font-medium text-ink">
                        Scope
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2.5 text-right font-mono text-xs font-medium text-ink"
                      >
                        Upvotes
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-2.5 text-right font-mono text-xs font-medium text-ink"
                      >
                        Medal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {kaggleData.bronzeNotebooks.map((nb) => (
                      <tr key={nb.title} className="bg-surface">
                        <th scope="row" className="px-5 py-3.5 font-sans text-sm font-medium text-ink">
                          <a
                            href={nb.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-baseline gap-1 hover:text-accent monograph-transition"
                          >
                            <span>
                              {nb.title.split(" ").slice(0, -1).join(" ")}{" "}
                              <span className="whitespace-nowrap">
                                {nb.title.split(" ").slice(-1)[0]}
                                <ArrowUpRight
                                  size={13}
                                  strokeWidth={1.5}
                                  aria-hidden="true"
                                  className="ml-1 inline-block align-text-bottom"
                                />
                              </span>
                            </span>
                          </a>
                        </th>
                        <td className="px-4 py-3.5 text-xs text-ink-secondary">{nb.focus}</td>
                        <td className="px-4 py-3.5 text-right font-mono text-xs font-medium text-ink tabular-nums">
                          {nb.upvotes}
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <span className="inline-block rounded-control border border-accent-warm/30 bg-accent-warm-soft px-2 py-0.5 font-mono text-xs font-medium text-[var(--accent-warm-ink)]">
                            {nb.medal}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
