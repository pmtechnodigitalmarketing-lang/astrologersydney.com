import React from 'react';
import AustraliaLocations from '../components/AustraliaLocations';
import TestimonialsSection from '../components/TestimonialsSection';

const locationReviews = [
  { id: 1, name: "Sarah L., Sydney", text: "Visiting the Sydney branch changed my life. The astrologer was so accurate about my career transition.", rating: 5, image: "https://i.pravatar.cc/150?img=47" },
  { id: 2, name: "Mark D., Melbourne", text: "The Melbourne team helped me clear the negative energy in my home. I felt an immediate difference.", rating: 5, image: "https://i.pravatar.cc/150?img=11" },
  { id: 3, name: "Jessica T., Brisbane", text: "I highly recommend the Brisbane center for relationship readings. They provided such clarity and peace of mind.", rating: 5, image: "https://i.pravatar.cc/150?img=32" },
  { id: 4, name: "David W., Perth", text: "A truly professional experience in Perth. Their guidance was exactly what I needed to move forward.", rating: 5, image: "https://i.pravatar.cc/150?img=53" }
];

const Locations = () => {
  return (
    <div className="locations-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <AustraliaLocations />
      <TestimonialsSection customReviews={locationReviews} />
    </div>
  );
};

export default Locations;
