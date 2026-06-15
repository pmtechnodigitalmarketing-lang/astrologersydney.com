import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { astrologyServices } from '../data/servicesData';
import FAQ from '../components/FAQ';
import './Services.css';
import SEO from '../components/SEO';

const servicesFaqs = [
  { question: "How do I book a session?", answer: "You can book a session by navigating to our Contact page and filling out the inquiry form, or by calling our direct line. We will get back to you within 24 hours to schedule." },
  { question: "Do I need to prepare anything beforehand?", answer: "For most readings, you just need an open mind and a quiet space. If you're doing an astrology reading, please have your exact birth date, time, and location ready." },
  { question: "What if I need to cancel or reschedule?", answer: "We require 24 hours notice for any cancellations or rescheduling. This allows us to offer the time slot to someone else in need." },
  { question: "Do you offer custom spiritual packages?", answer: "Yes! If you need a combination of reading, cleansing, and protection, we can create a custom package with a tailored price during your initial consultation." }
];

// Tarot Card Component with 3D Tilt & Holographic Effect
const TarotCard = ({ service, index }) => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  // Create a background position for the hologram based on tilt
  const hologramX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const hologramY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onClick={() => navigate(`/service/${service.slug}`)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="tarot-card-wrapper"
    >
      <div className="tarot-card-inner">
        <motion.div 
          className="tarot-card-hologram" 
          style={{ backgroundPositionX: hologramX, backgroundPositionY: hologramY }}
        />
        <div className="tarot-image-container">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="tarot-content">
          <h3>{service.title}</h3>
          <p>{service.description.substring(0, 100)}...</p>
          <div className="tarot-action">
            Explore Mysticism <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <SEO title="Our Services | Soul Astrology Centre" description="Explore our sacred astrology readings, spiritual healing, and mystical services." />
      
      <div className="container section" style={{ paddingTop: '100px' }}>
        
        {/* Premium Editorial Hero Section */}
        <motion.div 
          className="services-premium-hero"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span> SERVICES
          </div>
          <h1 className="premium-hero-title">
            Premium Astrology<br />
            <span className="italic-accent">Services</span> for Love,<br />
            Timing, and <span className="gradient-text">Purpose.</span>
          </h1>
          <p className="premium-hero-subtitle">
            Choose a focused reading, a blended spiritual session, or a deeper consultation designed around your most important question.
          </p>
        </motion.div>

        {/* Tarot Card Deck Grid */}
        <div className="tarot-deck-grid">
          {astrologyServices.map((service, idx) => (
            <TarotCard key={service.id || idx} service={service} index={idx} />
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div 
          className="services-premium-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <div className="cta-eyebrow">
              <span className="eyebrow-line"></span> APPOINTMENTS
            </div>
            <h2>Ready to Choose the Reading That Fits Your Destiny?</h2>
            <p>Book a private consultation and receive divine guidance shaped around your unique cosmic timing, relationships, and life's next chapter.</p>
          </div>
          <div className="cta-action">
            <button className="btn btn-primary cta-btn" onClick={() => window.location.href = '/contact'}>
              Schedule Appointment
            </button>
          </div>
          
          {/* Mystical Background Glows */}
          <div className="cta-glow cta-glow-left"></div>
          <div className="cta-glow cta-glow-right"></div>
        </motion.div>

      </div>
      <div style={{ padding: '2rem 0 6rem' }}>
        <FAQ data={servicesFaqs} title="Services & Booking FAQ" subtitle="Everything you need to know about preparing for your session." />
      </div>
    </div>
  );
};

export default Services;
