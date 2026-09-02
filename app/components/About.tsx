import Section from "@/app/components/Section";
import { summary } from "@/app/data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="text-base leading-relaxed text-muted">{summary}</p>
    </Section>
  );
}
