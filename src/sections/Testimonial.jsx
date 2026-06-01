import { Reveal } from '../components/ui/Reveal';
import { TESTIMONIAL } from '../data/site';

export function Testimonial() {
  return (
    <section className="border-t border-white/[0.06] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow">The client stories</p>
          <h2 className="section-heading mt-4">Prosperity of uncluttered perfections</h2>
        </Reveal>
        <Reveal className="mt-10">
          <blockquote className="glass rounded-2xl p-8 lg:p-12">
            <p className="font-display text-2xl leading-snug text-cream lg:text-3xl">&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
            <footer className="mt-8 text-sm font-semibold text-gold">{TESTIMONIAL.author}</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
