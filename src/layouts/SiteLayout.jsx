import { Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { BackToTop } from '../components/BackToTop';
import { Nav } from '../components/Nav';


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
    </>
  );
}
