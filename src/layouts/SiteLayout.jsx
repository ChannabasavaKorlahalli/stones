import { Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { BackToTop } from '../components/BackToTop';
import { Nav } from '../components/Nav';
import {
  BRAND_NAME,
  COMPANY_NAME,
  CONTACT,
  LOGO,
  PRODUCTS,
  TAGLINE,
} from '../data/site';

export function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to main content
      </a>
      <div className="noise-overlay" aria-hidden />
      <Nav />
      <main id="main-content" className="bg-hero-gradient text-cream">
        <Outlet />
      </main>
      <BackToTop />
      <footer className="border-t border-white/[0.06] bg-navy px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <span className="logo-shell">
              <img src={LOGO} alt={BRAND_NAME} className="logo-img opacity-95" width={167} height={161} loading="lazy" />
            </span>
            <p className="mt-4 max-w-sm text-sm text-creamMuted">{TAGLINE}</p>
            <p className="mt-2 text-xs text-steel">{COMPANY_NAME}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-creamMuted">
              <li>
                <Link to="/about" className="transition hover:text-cream">
                  About
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="transition hover:text-cream">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/artifacts" className="transition hover:text-cream">
                  Artifacts
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-cream">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Products</p>
            <ul className="mt-4 space-y-2 text-sm text-creamMuted">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link to="/products" className="transition hover:text-cream">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Head office</p>
            <address className="mt-4 space-y-2 text-sm not-italic text-creamMuted">
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.phoneHref} className="transition hover:text-gold">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="transition hover:text-gold">
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-white/[0.06] pt-6 text-center text-xs text-creamMuted">
          © {new Date().getFullYear()} {COMPANY_NAME} · {BRAND_NAME} · All rights reserved
        </p>
      </footer>
    </>
  );
}
