import Section from "@/app/components/Section";
import { experience } from "@/app/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
