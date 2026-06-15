import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './AustraliaLocations.css';

const regions = ["All", "New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Territories"];

const stateData = [
  { state: "Sydney", region: "New South Wales" }, { state: "Newcastle", region: "New South Wales" }, { state: "Wollongong", region: "New South Wales" },
  { state: "Melbourne", region: "Victoria" }, { state: "Geelong", region: "Victoria" }, { state: "Ballarat", region: "Victoria" },
  { state: "Brisbane", region: "Queensland" }, { state: "Gold Coast", region: "Queensland" }, { state: "Cairns", region: "Queensland" },
  { state: "Perth", region: "Western Australia" }, { state: "Fremantle", region: "Western Australia" },
  { state: "Adelaide", region: "South Australia" }, { state: "Mount Gambier", region: "South Australia" },
  { state: "Hobart", region: "Tasmania" }, { state: "Launceston", region: "Tasmania" },
  { state: "Canberra", region: "Territories" }, { state: "Darwin", region: "Territories" }, { state: "Alice Springs", region: "Territories" }
];

const branchImages = {
  "Sydney": "/images/locations/sydney_landmark_1781159154031.png",
  "Newcastle": "/images/locations/newcastle_landmark_1781159169241.png",
  "Wollongong": "/images/locations/wollongong_landmark_1781159188783.png",
  "Melbourne": "/images/locations/melbourne_landmark_1781159210441.png",
  "Geelong": "/images/locations/geelong_landmark_1781159234940.png",
  "Ballarat": "/images/locations/ballarat_landmark_1781159254138.png",
  "Brisbane": "/images/locations/brisbane_landmark_1781159270161.png",
  "Gold Coast": "/images/locations/gold_coast_landmark_1781159295036.png",
  "Cairns": "/images/locations/cairns_landmark_1781159311660.png",
  "Perth": "/images/locations/perth_landmark_1781159323968.png",
  "Fremantle": "/images/locations/fremantle_landmark_1781159343112.png",
  "Adelaide": "/images/locations/adelaide_landmark_1781159360067.png",
  "Mount Gambier": "/images/locations/mount_gambier_landmark_1781159375533.png",
  "Hobart": "/images/locations/hobart_landmark_1781159389356.png",
  "Launceston": "/images/locations/launceston_landmark_1781159406970.png",
  "Canberra": "/images/locations/canberra_landmark_1781159421162.png",
  "Darwin": "/images/locations/darwin_landmark_1781159433936.png",
  "Alice Springs": "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=800&auto=format&fit=crop"
};

const locations = stateData.map((data) => ({
  ...data,
  image: branchImages[data.state] || 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop'
}));

const AustraliaLocations = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');

  const filteredLocations = locations.filter(loc => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      loc.state.toLowerCase().includes(searchLower) || 
      loc.region.toLowerCase().includes(searchLower) ||
      "australia".includes(searchLower);
      
    const matchesRegion = activeRegion === 'All' || loc.region === activeRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="locations-masterpiece">
      <div className="loc-aura loc-aura-1"></div>
      <div className="loc-aura loc-aura-2"></div>
      <div className="loc-aura loc-aura-3"></div>

      <div className="loc-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="loc-hero-badge-minimal">
            <span className="badge-line"></span>
            LOCATIONS
            <span className="badge-line"></span>
          </div>
          <h1 className="loc-hero-title">
            PREMIUM ASTROLOGY<br/>
            <span className="italic">Sanctuaries</span> FOR GUIDANCE,<br/>
            HEALING, AND <span className="highlight">PURPOSE.</span>
          </h1>
          <p className="loc-hero-subtitle">
            Experience profound cosmic guidance in person at our luxurious, tranquil centers across Australia.
          </p>
          
          <div className="loc-search-wrapper">
            <div className="loc-search-glass">
              <span className="material-symbols-outlined">search</span>
              <input
                type="text"
                placeholder="Find a branch (e.g. Sydney, Melbourne)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="loc-filters">
            {regions.map(region => (
              <button
                key={region}
                className={`loc-filter-btn ${activeRegion === region ? 'active' : ''}`}
                onClick={() => setActiveRegion(region)}
              >
                {activeRegion === region && (
                  <motion.div
                    layoutId="activeRegionBubble"
                    className="loc-filter-bubble"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="loc-filter-text">{region}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="loc-grid-container container">
        <motion.div layout className="loc-grid">
          <AnimatePresence mode='popLayout'>
            {filteredLocations.map((loc, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ 
                  opacity: { duration: 0.4 },
                  layout: { type: "spring", bounce: 0.1, duration: 0.6 }
                }}
                key={loc.state}
                className="loc-card"
                onClick={() => navigate(`/location/${loc.state}`)}
              >
                <div className="loc-card-image">
                  <img src={loc.image} alt={loc.state} loading="lazy" />
                  <div className="loc-card-gradient"></div>
                </div>
                <div className="loc-card-glass">
                  <div className="loc-card-info">
                    <div className="loc-card-icon">
                      <span className="material-symbols-outlined">location_city</span>
                    </div>
                    <div className="loc-card-text">
                      <h3>{loc.state}</h3>
                      <p>{loc.region}</p>
                    </div>
                  </div>
                  <div className="loc-card-action">
                    <span className="action-text">Explore</span>
                    <span className="material-symbols-outlined action-arrow">arrow_forward</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredLocations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="loc-no-results"
          >
            <span className="material-symbols-outlined">travel_explore</span>
            <h3>No sanctuaries found</h3>
            <p>We couldn't find any branches matching your search criteria. Try a different region or city.</p>
          </motion.div>
        )}
      </div>

      {/* FAQ Section */}
      <section className="loc-faq-section container">
        <motion.div 
          className="loc-faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Visit Guidelines</h2>
          <p>Everything you need to know about experiencing our physical spaces.</p>
        </motion.div>
        
        <div className="loc-faq-grid">
          {[
            { q: "Do I need an appointment before visiting?", a: "Yes, all of our branches operate strictly by appointment only to ensure absolute privacy and dedicated time for each client." },
            { q: "Can I get my Kundali read at any branch?", a: "Absolutely! All of our spiritual centers are fully equipped and staffed by expert Vedic Astrologers." },
            { q: "Are online consultations available?", a: "Yes. If you cannot visit one of our branches in person, we offer premium video consultations with identical insight accuracy." }
          ].map((faq, i) => (
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
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AustraliaLocations;
