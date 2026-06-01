import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { TiltCard } from '../components/ui/TiltCard';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { PRODUCTS } from '../data/site';

export function Products({ embedded = false, showHeading = true }) {
  const [active, setActive] = useState(null);

  return (
    <section id="products" className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {showHeading && (
          <Reveal>
            <p className="eyebrow">Our products</p>
            <h2 className="section-heading mt-4">Marble, granite & natural stone</h2>
            <p className="section-lead">
              Timeless elegance and unmatched quality — export programs for slabs, tiles, monuments, and
              bespoke stone articles.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:gap-8 ${showHeading ? 'mt-14' : 'mt-0'}`}>
          {PRODUCTS.map((p) => (
            <Reveal key={p.id}>
              <TiltCard className="glass overflow-hidden rounded-2xl">
                <div onMouseEnter={() => setActive(p.id)} onMouseLeave={() => setActive(null)}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <OptimizedImage
                      src={p.image}
                      alt={p.name}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                    <div className="absolute bottom-0 p-6 lg:p-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold">{p.tagline}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-cream lg:text-3xl">{p.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <ul className="space-y-2 text-sm text-creamMuted">
                      {p.specs.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="text-gold">—</span> {s}
                        </li>
                      ))}
                    </ul>
                    <p
                      className={`mt-4 text-sm leading-relaxed text-cream/80 transition-all duration-500 ${
                        active === p.id
                          ? 'max-h-48 opacity-100'
                          : 'max-h-0 overflow-hidden opacity-0 lg:max-h-48 lg:opacity-100'
                      }`}
                    >
                      {p.detail}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {!embedded && (
          <Reveal className="mt-10 text-center">
            <Link to="/products" className="btn-gold">
              View all products <ArrowRight size={16} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
