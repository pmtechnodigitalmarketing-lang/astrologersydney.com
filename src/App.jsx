import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

const Blog = lazy(() => import('./pages/Blog'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Locations = lazy(() => import('./pages/Locations'));
const LocationServices = lazy(() => import('./pages/LocationServices'));
const Contact = lazy(() => import('./pages/Contact'));
const ConstellationDetail = lazy(() => import('./pages/ConstellationDetail'));
const AboutAstrology = lazy(() => import('./pages/AboutAstrology'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RemoveSkeleton = () => {
  useEffect(() => {
    // Remove the LCP skeleton after a brief delay to ensure React has painted
    const timer = setTimeout(() => {
      const skeleton = document.getElementById('lcp-skeleton');
      if (skeleton) {
        skeleton.style.opacity = '0';
        skeleton.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => skeleton.remove(), 500);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RemoveSkeleton />
      <div className="app-container">
        <div className="cosmic-bg"></div>
        <Navbar />
        <Suspense fallback={<div className="flex-center text-primary" style={{ minHeight: '100vh' }}>Loading...</div>}>
          <WhatsAppButton />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/constellation/:id" element={<ConstellationDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:serviceSlug" element={<ServiceDetail />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/location/:stateName" element={<LocationServices />} />
              <Route path="/info/about-astrology" element={<AboutAstrology />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
      </Router>
  );
}

export default App;
