import Section from "@/app/components/Section";
import { projects } from "@/app/data/profile";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-surface-border bg-surface p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent-strong"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-strong"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
