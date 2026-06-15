import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const defaultFaqs = [
  {
    question: "Is my session completely confidential?",
    answer: "Absolutely. All readings and consultations are strictly confidential. We hold your personal information and the details of your session in the highest sacred trust."
  },
  {
    question: "How should I prepare for a reading?",
    answer: "Find a quiet space where you won't be disturbed. Take a few deep breaths, clear your mind, and write down 2-3 specific questions or areas of life you want to focus on."
  },
  {
    question: "Do you predict exact dates and times?",
    answer: "We focus on reading energies, patterns, and planetary influences rather than fatalistic predictions. We provide timelines and windows of opportunity, empowering you to make the best choices."
  },
  {
    question: "Can I record my session?",
    answer: "Yes, you are welcome to record audio of your session for personal review. Many clients find it helpful to listen back to the guidance received weeks or months later."
  }
];

const FAQ = ({ data = defaultFaqs, title = "Frequently Asked Questions", subtitle = "Clarity on how we work and what you can expect." }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="faq-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="faq-title"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="faq-subtitle"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="faq-container">
          {data.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="faq-question"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <motion.div
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="material-symbols-outlined">expand_more</span>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
