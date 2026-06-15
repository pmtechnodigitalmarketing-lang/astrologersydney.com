import React from 'react';
import { Link } from 'react-router-dom';
import './SouthernSkySection.css';

const constellations = [
  { name: 'Crux', label: 'The Southern Cross' },
  { name: 'Carina', label: 'The Keel' },
  { name: 'Vela', label: 'The Sails' },
  { name: 'Puppis', label: 'The Poop Deck' },
  { name: 'Eridanus', label: 'The River' },
  { name: 'Pavo', label: 'The Peacock' },
  { name: 'Grus', label: 'The Crane' },
  { name: 'Phoenix', label: 'The Firebird' },
  { name: 'Tucana', label: 'The Toucan' },
  { name: 'Volans', label: 'The Flying Fish' },
  { name: 'Dorado', label: 'The Dolphinfish' }
];

const SouthernSkySection = () => {
  return (
    <section className="southern-sky-section">
      <div className="southern-sky-container">
        <h2 className="southern-sky-title">Southern Sky Constellations</h2>
        <p className="southern-sky-subtitle">Discover the cosmic secrets written in the stars of the Southern Hemisphere.</p>
        
        <div className="southern-sky-grid">
          {constellations.map((constellation, index) => (
            <Link 
              key={index} 
              to={`/constellation/${constellation.name.toLowerCase()}`} 
              className="constellation-card glass-panel"
              style={{ textDecoration: 'none' }}
            >
              <div className="constellation-icon-container">
                <span className="material-symbols-outlined constellation-icon">
                  star_rate
                </span>
              </div>
              <span className="constellation-name">{constellation.name}</span>
              <span className="constellation-label">{constellation.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SouthernSkySection;
