import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, ShieldCheck, Sparkles, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ClassicHero.css';

const heroContent = [
  {
    title: "GET YOUR EX LOVE BACK",
    subtitle: "Restore Peace, Happiness & Positivity in Your Relationship",
    description: "Reconnect with your lost love and rebuild a strong, lasting relationship. Our expert astrologers provide powerful remedies and guidance to resolve misunderstandings.",
    signsTitle: "SIGNS YOU MAY NEED LOVE HEALING",
    signs: [
      "Continuous arguments and misunderstandings",
      "Interference from third parties or family",
      "Sudden loss of interest or communication",
      "Trust issues and emotional distance",
      "Feeling lonely, stressed, or heartbroken"
    ],
    image: "/images/ChatGPT Image Jun 23, 2026, 08_47_38 PM.png",
    mobileImage: "/images/ChatGPT Image Jun 25, 2026, 10_46_14 AM.png",
  },
  {
    title: "REMOVE NEGATIVE ENERGY",
    subtitle: "Restore Peace, Happiness & Positivity",
    description: "Negative energy and evil forces can affect your health, relationships, career, and peace of mind. Master Jai uses powerful spiritual techniques to clear negativity and protect you from bad energy.",
    signsTitle: "SIGNS YOU MAY HAVE NEGATIVE ENERGY",
    signs: [
      "Constant stress, anxiety & fear",
      "Unexplained health problems",
      "Financial loss & career obstacles",
      "Relationship problems & fights",
      "Bad dreams & restless sleep"
    ],
    image: "/images/ChatGPT Image Jun 23, 2026, 08_46_06 PM.png",
    mobileImage: "/images/ChatGPT Image Jun 25, 2026, 10_47_10 AM.png",
  },
  {
    title: "SOLVE LOVE PROBLEMS",
    subtitle: "Immediate & Effective Astrological Solutions",
    description: "Facing continuous arguments, family objections, or trust issues? Get immediate, effective astrological solutions for all your love problems within 24 hours.",
    signsTitle: "SIGNS OF SEVERE LOVE PROBLEMS",
    signs: [
      "Family objections to marriage",
      "Constant fighting for no reason",
      "Partner is cheating or lying",
      "One-sided love or rejection",
      "Divorce or separation threats"
    ],
    image: "/images/ChatGPT Image Jun 23, 2026, 08_48_47 PM.png",
    mobileImage: "/images/ChatGPT Image Jun 25, 2026, 10_47_56 AM.png",
  }
];

export function ClassicHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="classic-hero-section poster-layout">
      {/* Background Images */}
      {heroContent.map((slide, index) => (
        <div
          key={`bg-${index}`}
          className={`classic-hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url('${isMobile && slide.mobileImage ? slide.mobileImage : slide.image}')` }}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="classic-hero-overlay"></div>

      <div className="poster-container container">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="poster-content-grid"
          >
            {/* Left Column: Text & Signs */}
            <div className="poster-left">
              <div className="poster-top-badge">
                FEELING STRESSED, UNLUCKY OR ENERGIZED FOR NO REASON?
              </div>

              <h1 className="poster-main-title">
                {heroContent[currentSlide].title}
              </h1>

              <div className="poster-subtitle-banner">
                {heroContent[currentSlide].subtitle}
              </div>

              <p className="poster-description">
                {heroContent[currentSlide].description}
              </p>

              <div className="poster-signs-box">
                <div className="poster-signs-header">
                  {heroContent[currentSlide].signsTitle}
                </div>
                <ul className="poster-signs-list">
                  {heroContent[currentSlide].signs.map((sign, idx) => (
                    <li key={idx}>
                      <span className="sign-icon">✨</span>
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Master Jai & Badges */}
            <div className="poster-right">
              <div className="master-jai-block">
                <div className="mj-subtitle">WORLD FAMOUS ASTROLOGER</div>
                <div className="mj-title">MASTER JAI</div>
                <div className="mj-badge">EXPERT IN ASTROLOGY & SPIRITUAL HEALING</div>
              </div>

              <div className="poster-features-grid">
                <div className="feature-item">
                  <div className="feature-icon"><ShieldCheck size={28} /></div>
                  <div className="feature-text">PROTECTION FROM NEGATIVITY</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Sparkles size={28} /></div>
                  <div className="feature-text">SPIRITUAL CLEANSING</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Zap size={28} /></div>
                  <div className="feature-text">POWERFUL VEDIC RITUALS</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><HeartHandshake size={28} /></div>
                  <div className="feature-text">POSITIVE ENERGY & PEACE OF MIND</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Contact Bar (Static across slides) */}
        <div className="poster-contact-bar">
          <a href="tel:+61405077444" className="contact-action">
            <div className="contact-icon-wrapper">
              <PhoneCall size={28} />
            </div>
            <div className="contact-details">
              <span className="contact-label">CALL NOW & GET SOLUTION</span>
              <span className="contact-number">+61 405 077 444</span>
            </div>
          </a>

          <div className="contact-email">
            <Mail size={20} className="email-icon" />
            <a href="mailto:masterjai999@gmail.com">masterjai999@gmail.com</a>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="poster-footer-bar">
          <div className="footer-item">
            <CheckCircle2 size={16} /> REMOVE NEGATIVE ENERGY
          </div>
          <div className="footer-item">
            <CheckCircle2 size={16} /> BRING PEACE, HAPPINESS & SUCCESS
          </div>
          <div className="footer-item">
            <CheckCircle2 size={16} /> PROTECT YOURSELF & YOUR FAMILY
          </div>
          <div className="footer-item">
            <CheckCircle2 size={16} /> LIVE A POSITIVE & STRESS-FREE LIFE
          </div>
        </div>
      </div>

      <div className="classic-hero-dots">
        {heroContent.map((slide, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`classic-hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
