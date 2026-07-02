import React from 'react';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <div className="floating-contact-group">
      {/* Email Button */}
      <motion.a 
        href="mailto:masterjai999@gmail.com"
        className="contact-float email-float"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        title="Email Us"
      >
        <span className="material-symbols-outlined">mail</span>
      </motion.a>

      {/* Call Button */}
      <motion.a 
        href="tel:+61450144999"
        className="contact-float call-float"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        title="Call Us"
      >
        <span className="material-symbols-outlined">call</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/61450144999?text=%E2%9C%A8%20Hari%20Om!%20%E2%9C%A8%0A%0AHello%20Soul%20Astrology%20Centre%20%F0%9F%99%8F%0A%0AI%20would%20like%20to%20book%20an%20astrological%20consultation.%20Could%20you%20please%20guide%20me%20on%20the%20next%20steps%3F%20%F0%9F%8C%9F"
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-float whatsapp-float"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        title="Chat with us on WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" loading="lazy" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
