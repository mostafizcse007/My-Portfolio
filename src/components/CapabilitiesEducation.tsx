import { ArrowUpRight } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { capabilityColumns, identity } from "@/data/profiles";

export function CapabilitiesEducation() {
  return (
    <section id="about" className="border-b border-hairline py-16 md:py-24">
      <div className="container">
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs text-ink-secondary">
            Technical Stack &amp; Academic Background
          </p>
          <h2 className="section-display text-ink">Capabilities &amp; Education</h2>
        </div>

        {/* 4-column typographic Capabilities Matrix (zero percentage bars, zero emojis) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityColumns.map((col) => (
            <div
              key={col.heading}
              className="rounded-panel border border-hairline bg-surface p-5 flex flex-col"
            >
              <div className="border-b border-hairline pb-3 mb-4">
                <h3 className="font-serif text-xl text-ink">{col.heading}</h3>
                <p className="font-mono text-xs text-ink-secondary">{col.subtitle}</p>
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <span className="block font-mono text-xs font-medium text-ink">
                      {item.name}
                    </span>
                    <span className="block text-xs text-ink-secondary leading-relaxed">
                      {item.context}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full-width DIU Education band with hairline-framed portrait */}
        <div className="mt-8 rounded-panel border border-hairline bg-surface p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center md:gap-8">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="mx-auto max-w-[230px] overflow-hidden rounded-control border border-hairline bg-surface-subtle md:mx-0">
                <img
                  src={profilePhoto}
                  alt="Portrait of Mostafizur Rahman Antu"
                  width={230}
                  height={288}
                  loading="eager"
                  decoding="sync"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <div>
                <p className="font-mono text-xs text-accent">
                  Undergraduate Education · {identity.campus}
                </p>
                <h3 className="mt-1 font-serif text-2xl md:text-3xl text-ink">
                  {identity.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-secondary">
                  {identity.institution}
                </p>
              </div>

              <p className="prose-measure text-sm leading-relaxed text-ink-secondary md:text-base">
                Focusing on low-resource code-mixed Bangla NLP, medical imaging quality control,
                computer vision, and deterministic web systems. Active across Kaggle competitions,
                algorithmic problem solving, and undergraduate research.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={identity.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-1.5 rounded-control bg-accent px-4 font-mono text-xs font-medium text-[var(--accent-ink-on-fill)] hover:bg-accent-hover monograph-transition"
                >
                  <span>Download Academic CV</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </a>
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-1.5 rounded-control border border-hairline-strong bg-paper px-4 font-mono text-xs font-medium text-ink hover:bg-surface-subtle monograph-transition"
                >
                  <span>View Resume (PDF)</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
