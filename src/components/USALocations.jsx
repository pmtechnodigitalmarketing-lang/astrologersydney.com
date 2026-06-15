import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './USALocations.css';

const regions = ["All", "West", "Midwest", "South", "Northeast"];

// High quality celestial, city, and nature backgrounds
const baseImages = [
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&fm=webp&fit=crop&w=800&q=80"
];

const stateData = [
  { state: "Alabama", region: "South" }, { state: "Alaska", region: "West" }, { state: "Arizona", region: "West" }, { state: "Arkansas", region: "South" }, { state: "California", region: "West" },
  { state: "Colorado", region: "West" }, { state: "Connecticut", region: "Northeast" }, { state: "Delaware", region: "South" }, { state: "Florida", region: "South" }, { state: "Georgia", region: "South" },
  { state: "Hawaii", region: "West" }, { state: "Idaho", region: "West" }, { state: "Illinois", region: "Midwest" }, { state: "Indiana", region: "Midwest" }, { state: "Iowa", region: "Midwest" },
  { state: "Kansas", region: "Midwest" }, { state: "Kentucky", region: "South" }, { state: "Louisiana", region: "South" }, { state: "Maine", region: "Northeast" }, { state: "Maryland", region: "South" },
  { state: "Massachusetts", region: "Northeast" }, { state: "Michigan", region: "Midwest" }, { state: "Minnesota", region: "Midwest" }, { state: "Mississippi", region: "South" }, { state: "Missouri", region: "Midwest" },
  { state: "Montana", region: "West" }, { state: "Nebraska", region: "Midwest" }, { state: "Nevada", region: "West" }, { state: "New Hampshire", region: "Northeast" }, { state: "New Jersey", region: "Northeast" },
  { state: "New Mexico", region: "West" }, { state: "New York", region: "Northeast" }, { state: "North Carolina", region: "South" }, { state: "North Dakota", region: "Midwest" }, { state: "Ohio", region: "Midwest" },
  { state: "Oklahoma", region: "South" }, { state: "Oregon", region: "West" }, { state: "Pennsylvania", region: "Northeast" }, { state: "Rhode Island", region: "Northeast" }, { state: "South Carolina", region: "South" },
  { state: "South Dakota", region: "Midwest" }, { state: "Tennessee", region: "South" }, { state: "Texas", region: "South" }, { state: "Utah", region: "West" }, { state: "Vermont", region: "Northeast" },
  { state: "Virginia", region: "South" }, { state: "Washington", region: "West" }, { state: "West Virginia", region: "South" }, { state: "Wisconsin", region: "Midwest" }, { state: "Wyoming", region: "West" }
];

const locations = stateData.map((data, index) => ({
  ...data,
  image: baseImages[index % baseImages.length],
  // Assign a random height multiplier for masonry effect
  heightMultiplier: [1, 1.2, 1.5, 0.8][index % 4]
}));

const USALocations = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = activeRegion === 'All' || loc.region === activeRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="constellation-section">
      {/* Premium Hero Search Header */}
      <div className="constellation-hero">
        <div className="stars-overlay"></div>
        <motion.div 
          className="container hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title glow-text text-gradient">Stellar Portals</h1>
          <p className="hero-subtitle">
            Find localized spiritual guidance across the cosmos. Select your state to enter.
          </p>
          
          <div className="search-glass-panel">
            <span className="material-symbols-outlined search-icon-large">search</span>
            <input
              type="text"
              placeholder="Enter your cosmic location (e.g. Texas, New York)..."
              className="premium-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="region-filters-premium">
            {regions.map(region => (
              <button
                key={region}
                className={`premium-region-tab ${activeRegion === region ? 'active' : ''}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container">
        <motion.div layout className="constellation-grid">
          <AnimatePresence>
            {filteredLocations.map((loc, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                key={loc.state}
                className="portal-masonry-card"
                style={{ gridRowEnd: `span ${Math.floor(loc.heightMultiplier * 20)}` }}
                onClick={() => navigate(`/location/${loc.state}`)}
              >
                <img loading="lazy" src={loc.image} alt={loc.state} className="portal-parallax-image" />
                <div className="portal-glass-overlay"></div>
                <div className="portal-card-content">
                  <h3>{loc.state}</h3>
                  <div className="enter-portal-btn">
                    Enter <span className="material-symbols-outlined">east</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredLocations.length === 0 && (
          <div className="no-results-premium">
            <span className="material-symbols-outlined large-icon">travel_explore</span>
            <p>No ethereal portals found in that sector.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default USALocations;
