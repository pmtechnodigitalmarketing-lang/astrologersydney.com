import React from 'react';
import './TransitTrackerWidget.css';

const TransitTrackerWidget = () => {
  // Current Transits for 2026 / general setup
  const transits = [
    { planet: 'Sun (Surya)', sign: 'Gemini (Mithuna)', icon: 'light_mode', status: 'Neutral' },
    { planet: 'Moon (Chandra)', sign: 'Changes every 2.5 days', icon: 'dark_mode', status: 'Fast Moving' },
    { planet: 'Mars (Mangal)', sign: 'Aries (Mesha)', icon: 'local_fire_department', status: 'Own Sign (Strong)' },
    { planet: 'Mercury (Budh)', sign: 'Taurus (Vrishabha)', icon: 'auto_awesome', status: 'Friendly' },
    { planet: 'Jupiter (Guru)', sign: 'Cancer (Karka)', icon: 'diamond', status: 'Exalted (Very Strong)' },
    { planet: 'Venus (Shukra)', sign: 'Leo (Simha)', icon: 'favorite', status: 'Enemy Sign' },
    { planet: 'Saturn (Shani)', sign: 'Pisces (Meena)', icon: 'hourglass_bottom', status: 'Neutral' },
    { planet: 'Rahu (North Node)', sign: 'Aquarius (Kumbha)', icon: 'storm', status: 'Co-Lord (Strong)' },
    { planet: 'Ketu (South Node)', sign: 'Leo (Simha)', icon: 'visibility_off', status: 'Enemy Sign' }
  ];

  return (
    <div className="transit-tracker-widget glass-panel">
      <div className="tracker-header">
        <span className="material-symbols-outlined tracker-main-icon">public</span>
        <div>
          <h3>Live Planetary Transits</h3>
          <p>Current positions of the Navagrahas in the Zodiac</p>
        </div>
      </div>

      <div className="tracker-list">
        {transits.map((t, idx) => (
          <div key={idx} className="tracker-row">
            <div className="planet-info">
              <span className="material-symbols-outlined planet-icon">{t.icon}</span>
              <span className="planet-name">{t.planet}</span>
            </div>
            <div className="sign-info">
              <span className="sign-name">{t.sign}</span>
            </div>
            <div className="status-info">
              <span className={`status-badge ${t.status.includes('Strong') || t.status.includes('Exalted') ? 'positive' : t.status.includes('Enemy') ? 'negative' : 'neutral'}`}>
                {t.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransitTrackerWidget;
