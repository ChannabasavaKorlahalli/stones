import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { ABOUT_PARAGRAPHS, CEO_MESSAGE, TIMELINE } from '../data/site';

export function Story({ showCeo = true, embedded = false }) {
  return (
    <section className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">The prominent & global story</p>
          <h2 className="section-heading mt-4">India&apos;s premier stone export house</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-creamMuted">
            {ABOUT_PARAGRAPHS.map((p) => (
              <Reveal key={p.slice(0, 40)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="glass rounded-2xl p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our journey</p>
              <ul className="mt-6 space-y-6">
                {TIMELINE.map((t) => (
                  <li key={t.year} className="border-l-2 border-gold/30 pl-5">
                    <p className="font-display text-lg font-semibold text-gold">{t.year}</p>
                    <p className="mt-1 font-medium text-cream">{t.title}</p>
                    <p className="mt-1 text-sm text-creamMuted">{t.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {showCeo && (
          <Reveal className="mt-14">
            <div className="glass rounded-2xl border border-gold/10 p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">From the CEO&apos;s desk</p>
              <blockquote className="mt-6 text-lg leading-relaxed text-cream/90 lg:text-xl">
                &ldquo;{CEO_MESSAGE.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-white/10 pt-6">
                <p className="font-display text-lg font-semibold text-cream">{CEO_MESSAGE.name}</p>
                <p className="text-sm text-creamMuted">{CEO_MESSAGE.title}</p>
              </footer>
            </div>
          </Reveal>
        )}

        {embedded && (
          <Reveal className="mt-10">
            <Link to="/about" className="btn-ghost">
              Know more <ArrowRight size={16} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
