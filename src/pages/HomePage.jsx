import { Hero } from '../sections/Hero';
import { AboutIntro } from '../sections/AboutIntro';
import { Products } from '../sections/Products';
import { Testimonial } from '../sections/Testimonial';
import { Global } from '../sections/Global';
import { FinalCTA } from '../sections/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro embedded />
      <Products embedded showHeading />
      <Testimonial />
      <Global embedded />
      <FinalCTA />
    </>
  );
}
