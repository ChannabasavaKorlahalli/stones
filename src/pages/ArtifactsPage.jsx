import { Reveal } from '../components/ui/Reveal';
import { Artifacts } from '../sections/Artifacts';
import { FinalCTA } from '../sections/FinalCTA';

export function ArtifactsPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8 lg:pb-12">
        <Reveal>
          <p className="eyebrow">Artifacts</p>
          <h1 className="section-heading mt-4">Stone articles & custom programs</h1>
          <p className="section-lead">
            Monuments, architectural profiles, landscaping elements, and bespoke interior stone work.
          </p>
        </Reveal>
      </section>
      <Artifacts embedded />
      <FinalCTA />
    </div>
  );
}
