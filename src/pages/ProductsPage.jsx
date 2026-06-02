import { Reveal } from '../components/ui/Reveal';
import { Products } from '../sections/Products';
import { PRODUCTS } from '../data/site';
import { FinalCTA } from '../sections/FinalCTA';

export function ProductsPage() {
  const granite = PRODUCTS.find((p) => p.id === 'granite');

  return (
    <div className="pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8 lg:pb-12">
        <Reveal>
          <p className="eyebrow">Products</p>
          <h1 className="section-heading mt-4">Stone selection for every vision</h1>
          <p className="section-lead">
            Four material categories with diverse finishes and characteristics — chosen and finished to your exact specifications and design requirements.
          </p>
        </Reveal>
      </section>
      <Products embedded showHeading={false} />
      {granite?.varieties && (
        <section className="border-t border-white/[0.06] pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-cream lg:text-3xl">Granite varieties</h2>
              <p className="mt-3 max-w-2xl text-sm text-creamMuted">
                Each variety selected for color consistency, grain pattern, and durability ratings verified through testing.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {granite.varieties.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-creamMuted"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
      <FinalCTA />
    </div>
  );
}
