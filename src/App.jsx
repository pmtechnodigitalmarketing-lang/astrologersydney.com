import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Home = lazy(() => import('./pages/Home'));
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <div className="cosmic-bg"></div>
        <Navbar />
        <WhatsAppButton />
        <main className="main-content">
            <Suspense fallback={<div className="flex-center text-primary">Loading...</div>}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
