import { Reveal } from '../components/ui/Reveal';
import { ARTIFACTS } from '../data/site';

export function Artifacts({ embedded = false }) {
  return (
    <section className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Artifacts</p>
          <h2 className="section-heading mt-4">Stone articles & bespoke programs</h2>
          <p className="section-lead">
            Beyond slabs and tiles — monuments, architectural profiles, landscaping elements, and interior
            accents crafted for export.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ARTIFACTS.map((a) => (
            <Reveal key={a.title}>
              <div className="glass h-full rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-cream">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-creamMuted">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
