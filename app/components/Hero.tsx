import { profile } from "@/app/data/profile";

export default function Hero() {
  const contactItems = [profile.email, profile.location].filter(Boolean);

  return (
    <section id="top" className="scroll-mt-24 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-strong">
          {profile.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {contactItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-strong"
            >
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
