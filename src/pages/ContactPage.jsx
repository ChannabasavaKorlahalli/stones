import { Reveal } from '../components/ui/Reveal';
import { Contact } from '../sections/Contact';
import { FaqSection } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';

export function ContactPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-4 lg:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="section-heading mt-4">Connect with our export desk</h1>
        </Reveal>
      </section>
      <Contact />
      <FaqSection embedded />
      <FinalCTA />
    </div>
  );
}
