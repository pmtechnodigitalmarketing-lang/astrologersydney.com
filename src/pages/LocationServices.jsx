import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LocationServices.css';
import SEO from '../components/SEO';
import { astrologyServices } from '../data/servicesData';
import { ExpandableCard } from '../components/ui/ExpandableCard';

const getShuffledServices = (services, stateName) => {
  if (!stateName) return services;
  let seed = 0;
  for (let i = 0; i < stateName.length; i++) {
    seed = stateName.charCodeAt(i) + ((seed << 5) - seed);
  }
  const shuffled = [...services];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.abs(Math.sin(seed++) * 10000) % 1;
    const j = Math.floor(random * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const LocationServices = () => {
  const { stateName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stateName]);

  const displayServices = useMemo(() => getShuffledServices(astrologyServices, stateName), [stateName]);

  const locationFaqs = [
    { question: `Do you offer in-person sessions in ${stateName}?`, answer: `While we do have physical locations in select cities across ${stateName}, the majority of our clients prefer the convenience and immediate availability of our secure online video consultations.` },
    { question: "Are virtual sessions as effective as in-person ones?", answer: "Absolutely. Energy is not bound by physical distance. A virtual reading or distant healing session is just as powerful and accurate as sitting in the same room." },
    { question: "How do I pay for a distance reading?", answer: "We accept all major credit cards and secure online payment methods via our booking portal. Payment is collected when you reserve your time slot." }
  ];

  return (
    <div className="loc-detail-page">
      <SEO 
        title={`Spiritual Services in ${stateName}`}
        description={`Find top-rated astrology, psychic readings, and spiritual healing services serving ${stateName}.`}
      />
      
      {/* Background Magic */}
      <div className="loc-detail-bg-1"></div>
      <div className="loc-detail-bg-2"></div>

      {/* Hero Section */}
      <section className="loc-detail-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="loc-detail-badge">
              <span className="badge-line"></span>
              {stateName}
              <span className="badge-line"></span>
            </div>
            <h1 className="loc-detail-title">
              PREMIUM ASTROLOGY<br/>
              <span className="italic">Services</span> FOR LOVE,<br/>
              TIMING, AND <span className="highlight">PURPOSE.</span>
            </h1>
            <p className="loc-detail-subtitle">
              Choose a focused reading, a blended spiritual session, or a deeper consultation designed around your most important question.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expandable Cards Grid */}
      <section className="loc-services-grid-container container">
        <div className="loc-services-grid">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <ExpandableCard
                title={service.title}
                src={service.image}
                description={service.shortDescription || "Premium Astrology Service"}
                classNameExpanded="loc-card-expanded-content"
              >
                <h4>Service Overview</h4>
                {service.longDescription ? (
                  service.longDescription.map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{paragraph}</p>
                  ))
                ) : (
                  <p>{service.description}</p>
                )}
                <div className="loc-card-booking">
                  <button onClick={() => navigate(`/service/${service.slug}`)} className="loc-card-book-btn">Book This Session</button>
                </div>
              </ExpandableCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modernized FAQ Section */}
      <section className="loc-detail-faq-section container">
        <div className="loc-faq-header">
          <h2>State Guidelines</h2>
          <p>Everything you need to know about experiencing our sessions in {stateName}.</p>
        </div>
        
        <div className="loc-faq-grid">
          {locationFaqs.map((faq, i) => (
            <motion.div 
              key={i}
              className="loc-faq-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="faq-icon-wrapper">
                <span className="material-symbols-outlined">help</span>
              </div>
              <div>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LocationServices;
