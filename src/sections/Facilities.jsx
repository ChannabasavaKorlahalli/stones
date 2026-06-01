import { Reveal } from '../components/ui/Reveal';
import { FACILITIES } from '../data/site';

export function Facilities({ embedded = false }) {
  return (
    <section className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Facilities</p>
          <h2 className="section-heading mt-4">End-to-end stone export infrastructure</h2>
          <p className="section-lead">
            Manufacturing, delivery, packaging, and quality control — integrated under one export-focused
            operation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FACILITIES.map((f) => (
            <Reveal key={f.id}>
              <article className="glass h-full rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{f.subtitle}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-cream">{f.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-creamMuted">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
