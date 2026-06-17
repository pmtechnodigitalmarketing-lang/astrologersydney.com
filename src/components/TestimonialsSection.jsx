import React from 'react';
import './TestimonialsSection.css';

const defaultReviews = [
  { id: 1, name: "Chloe S., Sydney", text: "The insights I received were incredibly accurate. It helped me navigate a tough career transition with confidence.", rating: 5, image: "https://i.pravatar.cc/150?img=47" },
  { id: 2, name: "Lachlan M., Melbourne", text: "I was skeptical at first, but the relationship reading was spot on. Highly recommend their services!", rating: 5, image: "https://i.pravatar.cc/150?img=11" },
  { id: 3, name: "Mia J., Brisbane", text: "A truly transformative experience. The astrologer was compassionate and deeply knowledgeable.", rating: 5, image: "https://i.pravatar.cc/150?img=32" },
  { id: 4, name: "Oliver B., Perth", text: "The negative energy removal session brought so much peace to my home. I feel lighter and more positive.", rating: 5, image: "https://i.pravatar.cc/150?img=53" },
  { id: 5, name: "Isla T., Adelaide", text: "Their guidance has been a beacon of light during difficult times. Thank you for the clarity.", rating: 5, image: "https://i.pravatar.cc/150?img=44" },
  { id: 6, name: "Jack W., Gold Coast", text: "Professional, confidential, and incredibly insightful. The best spiritual service I've ever used.", rating: 5, image: "https://i.pravatar.cc/150?img=68" },
];

const TestimonialsSection = ({ customReviews }) => {
  const displayReviews = customReviews || defaultReviews;
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Cosmic Success Stories</h2>
        <p>Read what our clients have to say about their transformative experiences with our trusted guides.</p>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {displayReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="stars">
                {'★'.repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <img src={review.image} alt={review.name} className="author-image" />
                <span>{review.name}</span>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {displayReviews.map(review => (
            <div key={`dup-${review.id}`} className="review-card">
              <div className="stars">
                {'★'.repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <img src={review.image} alt={review.name} className="author-image" />
                <span>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
