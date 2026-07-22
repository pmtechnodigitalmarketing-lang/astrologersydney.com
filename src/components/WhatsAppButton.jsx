import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <div className="floating-contact-group">
      {/* Email Button */}
      <a
        href="mailto:masterjai999@gmail.com"
        className="contact-float email-float"
        title="Email Us"
      >
        <span className="material-symbols-outlined">mail</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+61450144999"
        className="contact-float call-float"
        title="Call Us"
      >
        <span className="material-symbols-outlined">call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/61450144999?text=%E2%9C%A8%20Hari%20Om!%20%E2%9C%A8%0A%0AHello%20Soul%20Astrology%20Centre%20%F0%9F%99%8F%0A%0AI%20would%20like%20to%20book%20an%20astrological%20consultation.%20Could%20you%20please%20guide%20me%20on%20the%20next%20steps%3F%20%F0%9F%8C%9F"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-float whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <img src="/images/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" loading="lazy" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
