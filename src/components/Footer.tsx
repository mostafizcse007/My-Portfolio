import { identity, publicProfiles } from "@/data/profiles";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-subtle/50 py-8">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg text-ink">{identity.name}</p>
          <p className="font-mono text-xs text-ink-secondary">
            {identity.institution} · {identity.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {publicProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-secondary hover:text-ink monograph-transition"
            >
              {profile.name}
            </a>
          ))}
          <a
            href={identity.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent hover:underline"
          >
            CV
          </a>
          <a
            href={identity.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent hover:underline"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
