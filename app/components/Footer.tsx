import { profile } from "@/app/data/profile";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-surface-border/80 py-16"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Let&apos;s talk
        </h2>
        <p className="mt-2 text-sm text-muted">{profile.email}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent-strong"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
