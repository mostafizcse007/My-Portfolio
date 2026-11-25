import { ArrowUpRight } from "lucide-react";
import { competitiveData } from "@/data/profiles";

export function CompetitiveSection() {
  const { leetcode, codeforces, totalSolved, summaryNote } = competitiveData;
  const easyPct = (leetcode.easy / leetcode.totalSolved) * 100;
  const medPct = (leetcode.medium / leetcode.totalSolved) * 100;
  const hardPct = (leetcode.hard / leetcode.totalSolved) * 100;

  return (
    <section id="competitive" className="border-b border-hairline py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs text-ink-secondary">
              Algorithmic Problem Solving
            </p>
            <h2 className="section-display text-ink tabular-nums">
              {totalSolved} Verified Problems Solved
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-secondary tabular-nums">{summaryNote}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* LeetCode Column */}
          <div className="rounded-panel border border-hairline bg-surface p-6 space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
              <div>
                <h3 className="font-serif text-2xl text-ink">LeetCode</h3>
                <p className="font-mono text-xs text-ink-secondary">@{leetcode.handle}</p>
              </div>
              <a
                href={leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-control border border-hairline-strong bg-paper px-3 py-1.5 font-mono text-xs font-medium text-ink hover:bg-surface-subtle monograph-transition"
              >
                <span>Profile</span>
                <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-ink-muted">Verified Solved</p>
                <p className="font-serif text-4xl text-ink tabular-nums">{leetcode.totalSolved}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-ink-muted">Contest Rating</p>
                <p className="font-mono text-sm font-medium text-accent tabular-nums">
                  {leetcode.contestRating} · {leetcode.contestsAttended} contests (Top{" "}
                  {leetcode.topPercentile})
                </p>
              </div>
            </div>

            {/* Difficulty Distribution Bar */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between font-mono text-xs text-ink-secondary">
                <span>Difficulty Breakdown</span>
                <span className="tabular-nums">
                  {leetcode.easy}E / {leetcode.medium}M / {leetcode.hard}H
                </span>
              </div>

              <div
                className="flex h-2.5 w-full overflow-hidden rounded-control bg-surface-subtle"
                role="img"
                aria-label={`LeetCode solved distribution: ${leetcode.easy} Easy, ${leetcode.medium} Medium, ${leetcode.hard} Hard`}
              >
                <div style={{ width: `${easyPct}%` }} className="bg-accent" />
                <div style={{ width: `${medPct}%` }} className="bg-ink-secondary" />
                <div style={{ width: `${hardPct}%` }} className="bg-accent-warm" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="rounded-control border border-hairline bg-surface-subtle px-3 py-2">
                  <span className="block font-mono text-[11px] text-ink-secondary">Easy</span>
                  <span className="font-mono text-sm font-medium text-ink tabular-nums">
                    {leetcode.easy}
                  </span>
                </div>
                <div className="rounded-control border border-hairline bg-surface-subtle px-3 py-2">
                  <span className="block font-mono text-[11px] text-ink-secondary">Medium</span>
                  <span className="font-mono text-sm font-medium text-ink tabular-nums">
                    {leetcode.medium}
                  </span>
                </div>
                <div className="rounded-control border border-hairline bg-surface-subtle px-3 py-2">
                  <span className="block font-mono text-[11px] text-ink-secondary">Hard</span>
                  <span className="font-mono text-sm font-medium text-ink tabular-nums">
                    {leetcode.hard}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-hairline pt-4 sm:grid-cols-2">
              <div>
                <p className="mb-1.5 font-mono text-xs text-ink-muted">Primary Languages</p>
                <p className="font-mono text-xs font-medium text-ink tabular-nums">
                  {leetcode.languages.map((l) => `${l.name} (${l.count})`).join(" · ")}
                </p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-xs text-ink-muted">Verified Badges</p>
                <div className="flex flex-wrap gap-1.5">
                  {leetcode.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-control border border-hairline bg-surface-subtle px-2 py-0.5 font-mono text-xs text-ink"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Codeforces Column */}
          <div className="rounded-panel border border-hairline bg-surface p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-ink">Codeforces</h3>
                  <p className="font-mono text-xs text-ink-secondary">@{codeforces.handle}</p>
                </div>
                <a
                  href={codeforces.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-control border border-hairline-strong bg-paper px-3 py-1.5 font-mono text-xs font-medium text-ink hover:bg-surface-subtle monograph-transition"
                >
                  <span>Profile</span>
                  <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-ink-muted">Solved All-Time</p>
                  <p className="font-serif text-4xl text-ink tabular-nums">
                    {codeforces.totalSolved}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-ink-muted">Rank Tier</p>
                  <p className="font-mono text-sm font-medium text-ink">{codeforces.rankTier}</p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-3">
                <div className="rounded-control border border-hairline bg-surface-subtle p-3.5">
                  <dt className="font-mono text-[11px] text-ink-secondary">Current / Max Rating</dt>
                  <dd className="mt-1 font-mono text-sm font-medium text-ink tabular-nums">
                    {codeforces.rating} / Max {codeforces.maxRating}
                  </dd>
                </div>
                <div className="rounded-control border border-hairline bg-surface-subtle p-3.5">
                  <dt className="font-mono text-[11px] text-ink-secondary">Longest Streak</dt>
                  <dd className="mt-1 font-mono text-sm font-medium text-ink tabular-nums">
                    {codeforces.longestStreak}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-hairline pt-4">
              <p className="font-mono text-xs text-ink-muted">Institutional Affiliation</p>
              <p className="mt-1 text-sm font-medium text-ink">{codeforces.affiliation}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                Consistent algorithmic practice focused on data structures, dynamic programming,
                graphs, and C++ STL execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
