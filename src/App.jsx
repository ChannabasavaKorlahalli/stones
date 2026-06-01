import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
// Artifacts page removed
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="facilities" element={<FacilitiesPage />} />
        {/* Artifacts route removed */}
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
