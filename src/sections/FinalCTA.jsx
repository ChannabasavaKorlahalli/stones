import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

export function FinalCTA() {
  return (
    <section className="border-t border-white/[0.06] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Experience timeless elegance with our collection of marble, granite, sandstone & limestone
          </h2>
          <Link to="/contact" className="btn-gold mt-8">
            Get in touch <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
