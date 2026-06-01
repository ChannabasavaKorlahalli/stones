import { Reveal } from '../components/ui/Reveal';
import { Story } from '../sections/Story';
import { Quality } from '../sections/Quality';
import { FinalCTA } from '../sections/FinalCTA';

export function AboutPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8 lg:pb-12">
        <Reveal>
          <p className="eyebrow">About</p>
          <h1 className="section-heading mt-4">The prominent and global story</h1>
          <p className="section-lead">
            India&apos;s premier stone export brand — specializing in premium marble, granite, sandstone,
            and limestone since 2013.
          </p>
        </Reveal>
      </section>
      <Story />
      <Quality embedded />
      <FinalCTA />
    </div>
  );
}
