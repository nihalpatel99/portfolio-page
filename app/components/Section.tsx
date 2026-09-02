import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">
          <span className="h-px flex-1 max-w-8 bg-accent/60" />
          {title}
          <span className="h-px flex-1 bg-surface-border" />
        </h2>
        {children}
      </div>
    </section>
  );
}
