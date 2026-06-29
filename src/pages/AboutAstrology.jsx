import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AboutAstrology.css';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import TestimonialsSection from '../components/TestimonialsSection';

const AboutAstrology = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Soul Astrology Centre",
    "description": "Discover the profound history and mission of the Soul Astrology Centre. Learn about our lead astrologer and authentic Vedic healing methodologies.",
    "url": "https://Pandit prabhu ram.com/info/about-astrology"
  };

  const aboutFaqs = [
    { question: "Do you offer virtual consultations?", answer: "Yes, we serve clients globally. Virtual sessions via video call are just as effective and spiritually accurate as in-person visits." },
    { question: "Is my personal information kept confidential?", answer: "Absolutely. We adhere to the strictest spiritual and professional ethics. Your readings, personal details, and energetic vulnerabilities are never shared." },
    { question: "What should I prepare before a session?", answer: "For astrological readings, we require your exact date, time, and city of birth. For energetic healings, we simply ask that you come with an open heart and a quiet space." },
    { question: "How long does a clearing or remedy take to work?", answer: "While some clients feel immediate relief, complex karmic blockages generally begin to unravel within 11 to 21 days of consistently applying the given remedies." }
  ];

  return (
    <div className="about-page">
      <SEO
        title="About Us | Soul Astrology Centre"
        description="Discover the profound history and mission of the Soul Astrology Centre. Learn about our lead astrologer and authentic Vedic healing methodologies."
        schema={schema}
      />

      {/* 1. Immersive Parallax Hero Section */}
      <section className="about-hero-section">
        <div className="stars-overlay"></div>
        <div className="about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="cosmic-badge">Our Origins</div>
            <h1 className="about-hero-title">
              Bridging the <span className="highlight">Cosmic</span><br /><span className="italic-text">and the Earthly</span>
            </h1>
            <p className="about-hero-subtitle">
              Discover the deep spiritual lineage, authentic methodologies, and powerful healings that form the foundation of our practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Master Profile Card */}
      <section className="master-profile-section">
        <div className="master-profile-container">
          <motion.div
            className="master-image-box"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="master-image-glow"></div>
            <img loading="lazy" src="/images/163114817763752088.jpg" alt="Our Lead Astrologer" />
          </motion.div>

          <motion.div
            className="master-text-box"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2>Meet Our Lead Astrologer</h2>
            <p>
              With over two decades of dedicated spiritual practice, our Lead Astrologer is a highly revered guide in Vedic Astrology and Energetic Healing. Born into a lineage of intuitive practitioners, they have spent their life mastering the ancient texts and decoding the intricate language of the cosmos.
            </p>
            <p>
              Unlike commercial psychics, our astrologer approaches every reading as a sacred contract. They specialize in identifying deep-rooted karmic blockages, neutralizing negative energetic attachments, and providing pinpoint accurate timelines for love, career, and personal success.
            </p>
            <div className="master-extra-info">
              <p><strong>Core Specialties:</strong> Precise Life Predictions, Ancestral Karma Clearing, Financial Astrology, and Aura Purification. Over 5,000 clients globally trust our unmatched accuracy and profound spiritual remedies.</p>
            </div>
            <div className="master-quote">
              "The stars do not punish us; they simply show us the exact curriculum our soul signed up for. My duty is to help you pass the test with grace."
            </div>
            <div className="master-action-area">
              <button onClick={() => navigate('/contact')} className="book-consultation-btn">
                Book Your Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Cosmic Journey Timeline (Methodology) */}
      <section className="cosmic-journey-section">
        <div className="section-header">
          <h2>Our Vedic Methodology</h2>
        </div>

        <div className="timeline-container">
          {/* Step 1 */}
          <motion.div
            className="timeline-step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="step-number">01</span>
            <div className="timeline-content">
              <h3>Natal Blueprint Analysis</h3>
              <p>We begin by calculating the precise mathematical positions of the planets at your exact moment of birth using authentic Jyotish techniques, creating the unalterable map of your soul's journey.</p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="timeline-step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="step-number">02</span>
            <div className="timeline-content">
              <h3>Dasha System Decoding</h3>
              <p>We read the Dasha system (planetary periods) to understand exactly what energies are currently influencing your life—revealing the hidden root causes behind sudden obstacles, financial ruins, or relationship breakdowns.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="timeline-step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="step-number">03</span>
            <div className="timeline-content">
              <h3>Karmic Neutralization</h3>
              <p>Once the root cause is identified, we do not just leave you with a prediction. We provide powerful, ethical remedies (Upayas), mantras, and spiritual clearings to actively alter the trajectory of your fate.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Interactive Core Values */}
      <section className="core-values-section">
        <div className="section-header">
          <h2>Why Choose Us?</h2>
        </div>

        <div className="values-marquee-container">
          <div className="values-marquee-track">
            {/* Group 1 */}
            <div className="value-card">
              <div className="value-card-left gradient-purple">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="value-card-number">01</div>
              </div>
              <div className="value-card-right">
                <h3>100% Confidentiality</h3>
                <p>Your sessions, personal details, and readings are kept in absolute, sacred secrecy.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-left gradient-pink">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div className="value-card-number">02</div>
              </div>
              <div className="value-card-right">
                <h3>Ethical Practices</h3>
                <p>We never use dark magic to fight dark magic. We work exclusively with divine white light.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-left gradient-blue">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">target</span>
                </div>
                <div className="value-card-number">03</div>
              </div>
              <div className="value-card-right">
                <h3>Pinpoint Accuracy</h3>
                <p>No generic readings. We provide highly specific timelines and actionable, practical advice.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-left gradient-green">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="value-card-number">04</div>
              </div>
              <div className="value-card-right">
                <h3>Deep Empathy</h3>
                <p>We listen without judgment. Your pain is entirely valid, and we are here to help you heal it.</p>
              </div>
            </div>

            {/* Group 2 (Duplicate for seamless loop) */}
            <div className="value-card">
              <div className="value-card-left gradient-purple">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="value-card-number">01</div>
              </div>
              <div className="value-card-right">
                <h3>100% Confidentiality</h3>
                <p>Your sessions, personal details, and readings are kept in absolute, sacred secrecy.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-left gradient-pink">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div className="value-card-number">02</div>
              </div>
              <div className="value-card-right">
                <h3>Ethical Practices</h3>
                <p>We never use dark magic to fight dark magic. We work exclusively with divine white light.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-left gradient-blue">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">target</span>
                </div>
                <div className="value-card-number">03</div>
              </div>
              <div className="value-card-right">
                <h3>Pinpoint Accuracy</h3>
                <p>No generic readings. We provide highly specific timelines and actionable, practical advice.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-left gradient-green">
                <div className="value-icon-wrapper">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="value-card-number">04</div>
              </div>
              <div className="value-card-right">
                <h3>Deep Empathy</h3>
                <p>We listen without judgment. Your pain is entirely valid, and we are here to help you heal it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cohesive Testimonials */}
      <TestimonialsSection />

      {/* 6. FAQ Section */}
      <section className="about-faq-container">
        <FAQ data={aboutFaqs} title="Frequently Asked Questions" subtitle="Learn more about our process and consultations." />
      </section>

    </div>
  );
};

export default AboutAstrology;
