import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { FAQ } from '../data/site';

export function FaqSection({ embedded = false }) {
  const [open, setOpen] = useState(0);

  return (
    <section className={embedded ? 'pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className={embedded ? '' : 'text-center'}>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-heading mt-4">Export inquiries answered</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQ.map((item, i) => (
            <Reveal key={item.q}>
              <div className="glass overflow-hidden rounded-xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-cream">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gold transition ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className="accordion-content" data-open={open === i}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-creamMuted">{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
