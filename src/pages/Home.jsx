import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import BranchesSection from "../components/BranchesSection";
import CardCarousel from "../components/CardCarousel";
import TestimonialsSection from "../components/TestimonialsSection";
import { astrologyServices } from "../data/servicesData";
import "./Home.css";

const heroContent = [
  {
    title: (
      <>
        Heal From Love &<br />
        Relationship Breakups
      </>
    ),
    subtitle:
      "Find clarity and closure after a difficult breakup. Our expert astrologers analyze your planetary transits to uncover the karmic lessons behind your past relationships. Receive compassionate guidance to release emotional blockages, rebuild your confidence, and prepare your heart for lasting connections.",
  },
  {
    title: (
      <>
        Find Peace Through
        <br />
        Spiritual Healing
      </>
    ),
    subtitle:
      "Awaken your true potential through profound spiritual healing. Uncover the unseen energetic blocks and karmic patterns holding you back from happiness. Our guides use sacred techniques to balance your chakras and align you with the universe's natural rhythms for a life of greater harmony.",
  },
  {
    title: (
      <>
        Unlock Your True
        <br />
        Career Potential
      </>
    ),
    subtitle:
      "Discover the professional path you were destined for by tapping into the cosmic blueprint of your career. We analyze your astrological houses to reveal your hidden talents and optimal periods for business expansion. Let the stars align your ambitions with your destiny for true professional success.",
  },
];

const Home = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effects
  const yHeroText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHeroText = useTransform(scrollY, [300, 600], [1, 0]);
  const ySolarSystem = useTransform(scrollY, [0, 500], [0, -150]);
  const rotateSolarSystem = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <div className="home-container">
      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: yHeroText, opacity: opacityHeroText }}
          >
            <div className="live-cosmos-badge">
              <div className="badge-dot"></div>
              <span className="badge-text">Live Cosmos</span>
            </div>

            <div
              className="hero-text-carousel"
              style={{
                display: "grid",
                gridTemplateAreas: '"stack"',
                minHeight: "260px",
                marginBottom: "2.5rem",
                alignItems: "start",
              }}
            >
              <AnimatePresence>
                <motion.div
                  key={currentContentIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ gridArea: "stack" }}
                >
                  <h1
                    className="hero-title"
                    style={{ margin: 0, paddingBottom: "1rem" }}
                  >
                    {heroContent[currentContentIndex].title}
                  </h1>

                  <p className="hero-subtitle" style={{ margin: 0 }}>
                    {heroContent[currentContentIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary btn-large">
                <span className="material-symbols-outlined">explore</span>
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: ySolarSystem, rotate: rotateSolarSystem }}
          >
            <div className="solar-system-container">
              <div className="sun-core"></div>

              {/* Orbits and Planets */}
              <div className="orbit orbit-1">
                <div className="planet mercury"></div>
              </div>
              <div className="orbit orbit-2">
                <div className="planet venus"></div>
              </div>
              <div className="orbit orbit-3">
                <div className="planet earth">
                  <div className="moon"></div>
                </div>
              </div>
              <div className="orbit orbit-4">
                <div className="planet mars"></div>
              </div>
              <div className="orbit orbit-5">
                <div className="planet jupiter"></div>
              </div>
              <div className="orbit orbit-6">
                <div className="planet saturn">
                  <div className="saturn-rings"></div>
                </div>
              </div>
              <div className="orbit orbit-7">
                <div className="planet uranus"></div>
              </div>
              <div className="orbit orbit-8">
                <div className="planet neptune"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Discover Your Cosmic Blueprint</h2>
          <p>
            We provide ancient wisdom tailored for modern life, helping you
            uncover your true potential.
          </p>
        </motion.div>

        <CardCarousel
          services={astrologyServices}
          onServiceClick={setSelectedService}
        />
      </section>

      {/* Branches Section */}
      <BranchesSection />

      {/* Trust & Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3>17,000+</h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>25+ Years</h3>
            <p>Vedic Experience</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>99.9%</h3>
            <p>Accuracy Rate</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3>Global</h3>
            <p>Client Presence</p>
          </motion.div>
        </div>
      </section>

      {/* Trusted Guidance Section */}
      <section className="trusted-guidance-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Trusted Cosmic Guidance</h2>
          <p>Why thousands of seekers choose our spiritual experts</p>
        </motion.div>

        <div className="guidance-grid">
          <motion.div
            className="guidance-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <div className="guidance-icon">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h3>Verified Experts</h3>
            <p>
              Every astrologer undergoes a rigorous vetting process to ensure
              authentic, highly accurate readings.
            </p>
          </motion.div>

          <motion.div
            className="guidance-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <div className="guidance-icon">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <h3>100% Confidential</h3>
            <p>
              Your personal data and readings are secured with bank-level
              encryption. We respect your privacy completely.
            </p>
          </motion.div>

          <motion.div
            className="guidance-card"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            <div className="guidance-icon">
              <span className="material-symbols-outlined">history_edu</span>
            </div>
            <h3>Ancient Wisdom</h3>
            <p>
              Our methodologies are deeply rooted in traditional Vedic, Western,
              and spiritual scriptures.
            </p>
          </motion.div>

          <motion.div
            className="guidance-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
          >
            <div className="guidance-icon">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3>24/7 Support</h3>
            <p>
              The cosmos never sleeps, and neither do we. Reach out to our
              dedicated support team anytime, day or night.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready for Your First Reading?</h2>
          <p>
            Join thousands of others who have found clarity and direction
            through our personalized cosmic insights.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            <span className="material-symbols-outlined">calendar_month</span>
            Book a Consultation
          </Link>
        </motion.div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="service-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedService(null)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="modal-image-wrapper">
                <img src={selectedService.image} alt={selectedService.title} />
              </div>

              <div className="modal-text-content">
                <h2>{selectedService.title}</h2>
                <p className="modal-description">
                  {selectedService.description}
                </p>

                <ul className="modal-benefits">
                  {selectedService.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i}>
                      <span className="material-symbols-outlined check-icon">
                        check_circle
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="modal-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/contact")}
                  >
                    Book Now
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/service/${selectedService.slug}`)}
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
