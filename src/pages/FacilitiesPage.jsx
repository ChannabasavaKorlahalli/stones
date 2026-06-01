import { Reveal } from '../components/ui/Reveal';
import { Facilities } from '../sections/Facilities';
import { FinalCTA } from '../sections/FinalCTA';

export function FacilitiesPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8 lg:pb-12">
        <Reveal>
          <p className="eyebrow">Company</p>
          <h1 className="section-heading mt-4">Facilities & operations</h1>
          <p className="section-lead">
            Manufacturing, delivery, packaging, and quality control — delivering excellence worldwide.
          </p>
        </Reveal>
      </section>
      <Facilities embedded />
      <FinalCTA />
    </div>
  );
}
