import { Reveal } from '../components/ui/Reveal';
import { REGIONS } from '../data/site';

export function Global({ embedded = false }) {
  return (
    <section className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Global reach</p>
          <h2 className="section-heading mt-4">Worldwide reach, enduring excellence</h2>
          <p className="section-lead">
            Our products adorn spaces across the globe. With a footprint spanning continents, we bring
            unparalleled quality and craftsmanship to every corner of the world.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="glass relative aspect-[2/1] overflow-hidden rounded-2xl sm:aspect-[2.2/1]">
            <svg className="absolute inset-0 h-full w-full text-midnightLight" viewBox="0 0 800 400" aria-hidden>
              <ellipse cx="400" cy="200" rx="360" ry="170" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
              {REGIONS.map((r) => (
                <g key={r.id}>
                  <circle cx={(r.x / 100) * 800} cy={(r.y / 100) * 400} r="6" fill="#c9a227" opacity="0.9" />
                  <circle cx={(r.x / 100) * 800} cy={(r.y / 100) * 400} r="14" fill="#c9a227" opacity="0.15" className="animate-pulse-glow" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-3 p-6">
              {REGIONS.map((r) => (
                <span
                  key={r.id}
                  className="rounded-full border border-white/10 bg-midnight/80 px-4 py-1.5 text-xs font-medium text-creamMuted backdrop-blur-sm"
                >
                  {r.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
