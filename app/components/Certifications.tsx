import Section from "@/app/components/Section";
import { certifications } from "@/app/data/profile";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div
            key={`${cert.issuer}-${cert.name}`}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent-strong"
                  >
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
              <p className="text-sm text-muted">{cert.issuer}</p>
            </div>
            <span className="text-sm text-muted">{cert.date}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
