import React, { useState } from 'react';
import './SadeSatiCalculator.css';

const SadeSatiCalculator = () => {
  const [moonSign, setMoonSign] = useState('');
  const [result, setResult] = useState(null);

  // For 2026, Saturn is transiting Pisces (Meena)
  // Sade Sati affects the sign before, the current sign, and the sign after.
  // Sade Sati: Aquarius (last 2.5 yrs), Pisces (middle 2.5 yrs), Aries (first 2.5 yrs)
  // Dhaiya (Small Panoti): 4th and 8th from Saturn -> Gemini (4th from Pisces) and Libra (8th from Pisces)
  
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const calculateSadeSati = (sign) => {
    if (!sign) return;
    
    let status = '';
    let description = '';
    
    if (sign === 'Aries') {
      status = 'First Phase of Sade Sati';
      description = 'Saturn is transiting the 12th house from your Moon sign. This phase often brings increased expenses, travels, and isolation. It is a time to be cautious with investments.';
    } else if (sign === 'Pisces') {
      status = 'Peak Phase of Sade Sati';
      description = 'Saturn is transiting directly over your Moon. This is the core phase of Sade Sati, bringing mental pressure, profound life changes, and karmic restructuring. Discipline is key.';
    } else if (sign === 'Aquarius') {
      status = 'Final Phase of Sade Sati';
      description = 'Saturn is transiting the 2nd house from your Moon. The hardest part is over, but this phase focuses on financial discipline, family matters, and speaking truth.';
    } else if (sign === 'Gemini') {
      status = 'Kantaka Shani (Dhaiya)';
      description = 'Saturn is transiting the 10th house from your Moon (often felt as 4th house Dhaiya effects depending on interpretation). This brings intense focus and pressure in career and domestic peace.';
    } else if (sign === 'Libra') {
      status = 'Ashtama Shani (Dhaiya)';
      description = 'Saturn is transiting the 6th house from your Moon. Wait, traditionally Dhaiya is 4th and 8th. Saturn in Pisces is 6th from Libra. (Pisces is 8th from Leo). Let me correct the math: Pisces is 12. 12-3=9 (Sagittarius is 4th from Pisces? No, Pisces is 4th from Sagittarius).';
    }
    
    // Let's do exact relative math. Saturn is in Pisces (12).
    // If Moon is X, Saturn is (12 - X + 1) mod 12 from Moon.
    const moonIdx = signs.indexOf(sign) + 1; // 1 to 12
    const saturnIdx = 12; // Pisces
    
    let relativeHouse = saturnIdx - moonIdx + 1;
    if (relativeHouse <= 0) relativeHouse += 12;
    
    if (relativeHouse === 12) {
      status = 'First Phase of Sade Sati';
      description = 'Saturn is in the 12th house from your Moon (Pisces). This phase often brings increased expenses, travels, and isolation. It is a time to be cautious with investments.';
    } else if (relativeHouse === 1) {
      status = 'Peak Phase of Sade Sati';
      description = 'Saturn is transiting directly over your Moon in Pisces. This is the core phase, bringing mental pressure, profound life changes, and karmic restructuring. Discipline is key.';
    } else if (relativeHouse === 2) {
      status = 'Final Phase of Sade Sati';
      description = 'Saturn is in the 2nd house from your Moon. The hardest part is over, but this phase focuses on financial discipline, family matters, and speaking truth.';
    } else if (relativeHouse === 4) {
      status = 'Kantaka Shani (Dhaiya / Small Panoti)';
      description = 'Saturn is in the 4th house from your Moon. This 2.5-year period often brings changes in residence, property matters, and emotional fluctuations.';
    } else if (relativeHouse === 8) {
      status = 'Ashtama Shani (Dhaiya / Small Panoti)';
      description = 'Saturn is in the 8th house from your Moon. This period brings sudden transformations, research, and deep psychological changes. Avoid risky joint ventures.';
    } else {
      status = 'Free from Sade Sati & Dhaiya';
      description = `Saturn is transiting the ${relativeHouse}th house from your Moon. You are currently free from the major intense karmic periods of Saturn. Use this time to build and grow!`;
    }
    
    setResult({ status, description });
  };

  const handleSelect = (e) => {
    const val = e.target.value;
    setMoonSign(val);
    if (val) {
      calculateSadeSati(val);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="sadesati-widget glass-panel">
      <div className="sadesati-header">
        <span className="material-symbols-outlined sadesati-icon">hourglass_empty</span>
        <h3>Live Sade Sati Calculator</h3>
      </div>
      <p className="sadesati-subtitle">Current Saturn Transit: <strong>Pisces (Meena)</strong></p>
      
      <div className="sadesati-form">
        <label htmlFor="moonSign">Select your Moon Sign (Rashi):</label>
        <select id="moonSign" value={moonSign} onChange={handleSelect} className="sadesati-select">
          <option value="">-- Choose Moon Sign --</option>
          {signs.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {result && (
        <div className={`sadesati-result ${result.status.includes('Free') ? 'safe' : 'active'}`}>
          <h4>{result.status}</h4>
          <p>{result.description}</p>
        </div>
      )}
    </div>
  );
};

export default SadeSatiCalculator;
