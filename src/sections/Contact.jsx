import { useState } from 'react';
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { CONTACT, PRODUCTS } from '../data/site';

const stoneOptions = [...PRODUCTS.map((p) => p.name), 'Multiple / Other'];

export function Contact({ embedded = false }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=Stone%20Export%20Enquiry&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className={embedded ? 'pb-12 lg:pb-16' : 'border-t border-white/[0.06] py-24 lg:py-32'}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            {!embedded && (
              <>
                <p className="eyebrow">Contact us</p>
                <h2 className="section-heading mt-4">Request a stone export quotation</h2>
                <p className="section-lead">
                  Share your stone type, finish, quantity, and destination. Our export desk responds with
                  availability and commercial terms.
                </p>
              </>
            )}
            <div className={embedded ? '' : 'mt-10'}>
              <div className="space-y-4">
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-creamMuted transition hover:text-gold">
                  <Phone size={18} className="text-gold" />
                  {CONTACT.phone}
                </a>
                <a href={CONTACT.whatsappHref} className="flex items-center gap-3 text-creamMuted transition hover:text-gold">
                  <MessageCircle size={18} className="text-gold" />
                  WhatsApp {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-creamMuted transition hover:text-gold">
                  <Mail size={18} className="text-gold" />
                  {CONTACT.email}
                </a>
                <p className="flex gap-3 text-creamMuted">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                  {CONTACT.address}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs text-creamMuted">Name</span>
                  <input name="name" required className="input-field" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-creamMuted">Company</span>
                  <input name="company" required className="input-field" autoComplete="organization" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-creamMuted">Country</span>
                  <input name="country" required className="input-field" autoComplete="country-name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-creamMuted">Stone type</span>
                  <select name="stone" required className="input-field" defaultValue="">
                    <option value="" disabled>
                      Select stone
                    </option>
                    {stoneOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs text-creamMuted">Project requirement</span>
                  <input name="requirement" required className="input-field" placeholder="e.g. granite slabs 2cm, 500 sqm" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-creamMuted">Phone</span>
                  <input name="phone" type="tel" required className="input-field" autoComplete="tel" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-creamMuted">Email</span>
                  <input name="email" type="email" required className="input-field" autoComplete="email" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs text-creamMuted">Message</span>
                  <textarea name="message" rows={4} className="input-field resize-none" placeholder="Finish, dimensions, Incoterms, target port..." />
                </label>
              </div>
              <button type="submit" className="btn-gold mt-6 w-full">
                Send enquiry <ArrowRight size={18} />
              </button>
              {submitted && (
                <p className="mt-4 text-center text-sm text-gold">Opening your email client with enquiry details…</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
