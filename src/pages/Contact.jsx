import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQ from '../components/FAQ';
import { astrologyServices } from '../data/servicesData';
import './Contact.css';

const contactFaqs = [
  { question: "How long does it take to get a response?", answer: "We strive to respond to all inquiries within 24 hours during normal business days. If you reach out on a weekend, we will get back to you on Monday." },
  { question: "Do you take emergency bookings?", answer: "Yes, we hold a few emergency slots each week for urgent spiritual crises (such as sudden demonic oppression or acute anxiety). Please call our phone number directly for emergencies." },
  { question: "Can I talk to someone before booking?", answer: "Absolutely. We offer a brief 10-minute discovery call free of charge to ensure our services are the right fit for your specific spiritual needs." }
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, name: val });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    setIsSubmitted(true);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Background Magic */}
      <div className="contact-bg-1"></div>
      <div className="contact-bg-2"></div>
      <div className="contact-bg-3"></div>

      <div className="container section">
        
        {/* Editorial Hero Section */}
        <section className="contact-hero">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-hero-badge">
              <span className="badge-line"></span>
              CONTACT US
              <span className="badge-line"></span>
            </div>
            <h1 className="contact-hero-title">
              CONNECT WITH<br/>
              <span className="italic">Our Guides</span> FOR CLARITY,<br/>
              HEALING, AND <span className="highlight">SUPPORT.</span>
            </h1>
            <p className="contact-hero-subtitle">
              Ready for your session? Connect with our spiritual guides to schedule your private consultation or ask any questions.
            </p>
          </motion.div>
        </section>

        <div className="contact-content">
          {/* Floating Premium Cards */}
          <div className="contact-cards-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Visit Us</h3>
              <p>Soul Astrology Centre<br/>135 Church Street<br/>Parramatta 2150 NSW</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <h3>Call Us</h3>
              <p>+61 450 144 999<br/>Mon-Fri: 9am - 8pm<br/>Sat-Sun: 10am - 6pm</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3>Email Us</h3>
              <p>masterjai999@gmail.com</p>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="contact-form-section"
          >
            <div className="contact-form-info">
              <h2>Send a Message to the Stars</h2>
              <p>
                Whether you're seeking clarity on your birth chart, looking for relationship guidance, or need immediate spiritual support, our highly attuned astrologers are here to help you navigate life's cosmic journey.
              </p>
              
              <div className="contact-benefits-list">
                <div className="contact-benefit-item">
                  <span className="material-symbols-outlined benefit-icon">verified_user</span>
                  <p><strong>100% Confidential:</strong> Your spiritual journey and personal details are always kept entirely private.</p>
                </div>
                <div className="contact-benefit-item">
                  <span className="material-symbols-outlined benefit-icon">bolt</span>
                  <p><strong>Rapid Response:</strong> Our guides review inquiries daily to provide timely cosmic guidance.</p>
                </div>
                <div className="contact-benefit-item">
                  <span className="material-symbols-outlined benefit-icon">self_improvement</span>
                  <p><strong>Personalized Care:</strong> Every consultation is tailored to your unique astrological blueprint.</p>
                </div>
              </div>
              
              <div className="contact-form-decoration">
                <span className="material-symbols-outlined">flare</span>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success-msg"
                >
                  <span className="material-symbols-outlined success-icon">mark_email_read</span>
                  <h3>Transmission Received!</h3>
                  <p>
                    Thank you for reaching out to Soul Astrology Centre. Our guides have received your message and will reply to your earthly inbox shortly.
                  </p>
                  <button className="contact-submit-btn" onClick={() => setIsSubmitted(false)}>
                    <span className="btn-text">Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="form-control" 
                      placeholder="Enter your celestial name" 
                      value={formData.name}
                      onChange={handleNameChange}
                      pattern="[a-zA-Z\s]+"
                      title="Only alphabets and spaces are allowed"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-control" 
                      placeholder="Where should we send the cosmic reply?" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group" style={{ zIndex: dropdownOpen ? 100 : 2 }}>
                    <label htmlFor="service">Service of Interest</label>
                    <div className="custom-dropdown-wrapper">
                      <div 
                        className={`form-control dropdown-trigger ${dropdownOpen ? 'open' : ''} ${formData.service ? 'selected' : ''}`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        {formData.service 
                          ? (astrologyServices.find(s => s.slug === formData.service)?.title || "General Inquiry") 
                          : "Select a mystical path..."}
                        <motion.span 
                          className="material-symbols-outlined select-arrow"
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        >
                          expand_more
                        </motion.span>
                      </div>
                      
                      
                        {dropdownOpen && (
                          <div className="contact-dropdown-menu">
                            <ul>
                              {astrologyServices.slice(0, 5).map((service, i) => (
                                <li 
                                  key={service.id}
                                  onClick={() => {
                                    setFormData({ ...formData, service: service.slug });
                                    setDropdownOpen(false);
                                  }}
                                >
                                  <span className="dropdown-item-text">{service.title}</span>
                                  {formData.service === service.slug && (
                                    <span className="material-symbols-outlined check-icon">check</span>
                                  )}
                                </li>
                              ))}
                              <li
                                onClick={() => {
                                  setFormData({ ...formData, service: "general" });
                                  setDropdownOpen(false);
                                }}
                                className="dropdown-divider-top"
                              >
                                <span className="dropdown-item-text">General Inquiry</span>
                                {formData.service === "general" && (
                                  <span className="material-symbols-outlined check-icon">check</span>
                                )}
                              </li>
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message" 
                      className="form-control" 
                      placeholder="Share your cosmic questions or intentions with us..." 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-submit-btn">
                    <span className="btn-text">Send Transmission</span>
                    <span className="material-symbols-outlined btn-arrow">send</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Google Map Embedded */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="map-section"
          >
            <div className="map-overlay"></div>
            <iframe
              src="https://maps.google.com/maps?q=135%20Church%20Street,%20Parramatta,%202150%20NSW&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cosmic Headquarters Location"
            ></iframe>
          </motion.div>
        </div>
      </div>

      <div className="container contact-faq-container" style={{ marginTop: '6rem' }}>
        <FAQ data={contactFaqs} title="Booking & Support FAQ" subtitle="Answers about contacting us and scheduling." />
      </div>
    </div>
  );
};

export default Contact;
