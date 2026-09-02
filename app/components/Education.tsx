import Section from "@/app/components/Section";
import { education } from "@/app/data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((entry) => (
          <div
            key={`${entry.school}-${entry.degree}`}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {entry.school}
              </h3>
              <p className="text-sm text-muted">{entry.degree}</p>
            </div>
            <span className="text-sm text-muted">{entry.period}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
