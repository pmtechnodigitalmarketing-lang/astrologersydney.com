import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import BranchesSection from "../components/BranchesSection";
import CardCarousel from "../components/CardCarousel";
import TestimonialsSection from "../components/TestimonialsSection";
import { astrologyServices } from "../data/servicesData";
import { CinematicHero } from "../components/CinematicHero";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="home-container">
      <CinematicHero />

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
