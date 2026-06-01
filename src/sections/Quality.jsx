import { Reveal } from '../components/ui/Reveal';
import { CSR_TEXT, LOGISTICS_TEXT, QUALITY_POINTS } from '../data/site';

export function Quality({ embedded = false }) {
  return (
    <section className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Quality & responsibility</p>
          <h2 className="section-heading mt-4">Uncompromising standards</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="glass h-full rounded-2xl p-8 lg:col-span-1">
              <h3 className="font-display text-xl font-semibold text-cream">Quality assurance</h3>
              <ul className="mt-5 space-y-3 text-sm text-creamMuted">
                {QUALITY_POINTS.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="text-gold">—</span> {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-cream">Logistics & packaging</h3>
              <p className="mt-4 text-sm leading-relaxed text-creamMuted">{LOGISTICS_TEXT}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-cream">Social responsibility</h3>
              <p className="mt-4 text-sm leading-relaxed text-creamMuted">{CSR_TEXT}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
