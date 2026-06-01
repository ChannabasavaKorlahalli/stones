import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { COMPANY_NAME, WHY_CLIENTS_CHOOSE_US } from '../data/site';

export function AboutIntro({ embedded = false }) {
  return (
    <section id="about" className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Who are we?</p>
          <h2 className="section-heading mt-4">
            {embedded ? 'Built on trust & stone craft' : 'Global natural stone partner'}
          </h2>
          <p className="section-lead">
            {COMPANY_NAME} is a prominent global supplier, manufacturer, exporter, and wholesaler of Indian
            granite, marble, sandstone, limestone, and stone articles.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CLIENTS_CHOOSE_US.map((item) => (
            <Reveal key={item.title}>
              <div className="glass h-full rounded-2xl p-6">
                <CheckCircle2 className="text-gold" size={22} />
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-creamMuted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {!embedded && (
          <Reveal className="mt-10">
            <Link to="/about" className="btn-ghost">
              Our full story <ArrowRight size={16} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
