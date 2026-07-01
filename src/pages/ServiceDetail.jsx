import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { astrologyServices } from '../data/servicesData';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const service = astrologyServices.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2 className="glow-text">Service not found in the cosmos</h2>
        <button onClick={() => navigate(-1)} className="btn btn-outline mt-4">Return</button>
      </div>
    );
  }

  const otherServices = astrologyServices.filter(s => s.slug !== serviceSlug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Pandit prabhu ram",
      "url": "https://Pandit prabhu ram.com"
    },
    "serviceType": "Spiritual Guidance"
  };

  return (
    <div className="premium-service-detail">
      <SEO
        title={service.title}
        description={service.description}
        schema={serviceSchema}
      />

      <div className="container relative z-10 sd-page-container">
        <motion.div
          className="glass-panel main-content-panel"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sd-split-layout">
            <div className="sd-image-col">
              <img src={service.image} alt={service.title} className="sd-service-img" width="800" height="600" fetchpriority="high" />

              <div className="glass-panel action-card mt-5">
                <div className="sd-rating mb-4">
                  <span className="sd-stars">★★★★★</span>
                  <span className="rating-text">Divine Shield Rated</span>
                </div>

                <h4 className="mb-4">Ready for clarity?</h4>
                <div className="sd-action-buttons-premium">
                  <button className="btn btn-primary full-width mb-3 pulse-btn" onClick={() => window.location.href = 'tel:+61450144999'}>
                    <span className="material-symbols-outlined">call</span> Schedule Call
                  </button>
                  <button className="btn btn-outline full-width" onClick={() => window.open(`https://wa.me/61450144999?text=${encodeURIComponent('✨ Hari Om! ✨\n\nHello Soul Astrology Centre 🙏\n\nI am interested in booking the *' + service.title + '* service. Could you please guide me on the next steps? 🌟')}`, '_blank')}>
                    <span className="material-symbols-outlined">chat</span> WhatsApp Message
                  </button>
                </div>
              </div>
            </div>

            <div className="sd-text-col">
              <h1 className="sd-hero-title mb-2">{service.title}</h1>
              <p className="mb-4" style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '500' }}>
                {service.description}
              </p>
              <div className="sd-full-description mb-5">
                {service.longDescription ? (
                  service.longDescription.map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{paragraph}</p>
                  ))
                ) : (
                  <p>{service.description}</p>
                )}
              </div>

              <h3 className="mb-3">What You Will Discover</h3>
              <div className="sd-benefits-premium">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    className="benefit-item-premium"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="material-symbols-outlined benefit-icon">stars</span>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Portals Section */}
        <motion.div
          className="other-portals-section mt-5 pt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-gradient mb-5">Explore Other Portals</h2>
          <div className="other-portals-grid">
            {otherServices.slice(0, 4).map(other => (
              <motion.button
                key={other.id}
                className="glass-panel portal-nav-card"
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => navigate(`/service/${other.slug}`)}
              >
                {other.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {service.faqs && (
          <div className="mt-5 pt-5 mb-5">
            <FAQ data={service.faqs} title="Seeker FAQ" subtitle={`Common questions about our ${service.title} session.`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
