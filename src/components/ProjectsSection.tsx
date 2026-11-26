import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  archiveRepositories,
  featuredProjects,
  ProjectCategory,
  projectFilterTabs,
} from "@/data/projects";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const visibleProjects =
    selectedCategory === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section id="projects" className="border-b border-hairline py-12 md:py-16">
      <div className="container">
        {/* Section header + category filter controls */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs text-ink-secondary">
              Engineering Systems &amp; Applied ML
            </p>
            <h2 className="section-display text-ink">Selected Engineering &amp; ML</h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
              {projectFilterTabs.map((tab) => {
                const count =
                  tab.id === "all"
                    ? featuredProjects.length
                    : featuredProjects.filter((p) => p.categories.includes(tab.id)).length;
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`rounded-control px-3 py-1.5 font-mono text-xs font-medium monograph-transition ${
                      active
                        ? "bg-accent text-[var(--accent-ink-on-fill)]"
                        : "border border-hairline-strong bg-surface text-ink hover:bg-surface-subtle"
                    }`}
                  >
                    {tab.label} ({count})
                  </button>
                );
              })}
            </div>
            <span
              data-testid="project-visible-count"
              className="ml-1 font-mono text-xs text-ink-muted tabular-nums"
            >
              {visibleProjects.length} shown
            </span>
          </div>
        </div>

        {/* Alternating editorial case-study rows */}
        <div className="divide-y divide-hairline border-y border-hairline">
          {visibleProjects.map((project, rowIndex) => {
            const isAlt = rowIndex % 2 === 1;
            return (
              <article
                key={project.id}
                data-testid={`project-row-${project.id}`}
                className={`py-8 md:py-10 px-4 sm:px-6 ${isAlt ? "bg-surface/65" : "bg-transparent"}`}
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
                  {/* Metadata rail */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 lg:block">
                      <p className="font-mono text-xs text-ink-muted tabular-nums">
                        {project.index} · {project.domainLabel}
                      </p>
                      <p className="mt-1 inline-block rounded-control border border-hairline bg-surface-subtle px-2.5 py-0.5 font-mono text-xs font-medium text-ink whitespace-nowrap">
                        {project.statusNote}
                      </p>
                    </div>

                    <dl className="space-y-2 border-t border-hairline pt-3">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-xs">
                          <dt className="font-mono text-ink-muted">{m.label}</dt>
                          <dd className="font-mono font-medium text-ink tabular-nums">
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 rounded-control px-3 py-1.5 font-mono text-xs font-medium monograph-transition ${
                            link.primary
                              ? "bg-accent text-[var(--accent-ink-on-fill)] hover:bg-accent-hover"
                              : "border border-hairline-strong bg-surface text-ink hover:bg-surface-subtle"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
                        </a>
                      ))}
                      {project.internalStatus && (
                        <span className="inline-flex items-center rounded-control border border-accent-warm/30 bg-accent-warm-soft px-3 py-1.5 font-mono text-[11px] font-medium text-[var(--accent-warm-ink)] whitespace-nowrap">
                          {project.internalStatus}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Narrative body */}
                  <div className="min-w-0 space-y-3">
                    <div>
                      <h3 className="font-serif text-2xl leading-snug text-ink md:text-[28px]">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-ink-secondary">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="prose-measure text-sm leading-relaxed text-ink-secondary md:text-base">
                      {project.description}
                    </p>

                    <ul
                      aria-label={`${project.title} technologies`}
                      className="flex flex-wrap gap-2 pt-2"
                    >
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-control border border-hairline bg-surface-subtle px-2.5 py-1 font-mono text-xs text-ink"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Directly visible Repository Archive grid */}
        <div className="mt-10">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-2xl text-ink">Repository Archive</h3>
            <span className="font-mono text-xs text-ink-muted">
              {archiveRepositories.length} repositories
            </span>
          </div>

          <div
            id="repository-archive-grid"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {archiveRepositories.map((repo) => (
              <div
                key={repo.name}
                className="flex flex-col justify-between gap-3 rounded-panel border border-hairline bg-surface p-5"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-sm font-medium text-ink">{repo.name}</span>
                    <span className="rounded-control border border-hairline bg-surface-subtle px-2 py-0.5 font-mono text-xs font-medium text-ink whitespace-nowrap">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed">{repo.summary}</p>
                </div>

                <div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-medium text-accent hover:underline"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
