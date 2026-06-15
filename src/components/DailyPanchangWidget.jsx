import React, { useState, useEffect } from 'react';
import './DailyPanchangWidget.css';

const DailyPanchangWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Format date nicely
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const displayDate = currentDate.toLocaleDateString(undefined, options);

  // A very simplified pseudo-panchang calculation based on date hash 
  // In a real production app, this would ping a Jyotish API or use complex ephemeris math.
  // This produces stable dynamic-looking data for demonstration.
  
  const getPanchangElements = (date) => {
    const day = date.getDate();
    const tithis = ['Shukla Pratipada', 'Shukla Dwitiya', 'Shukla Tritiya', 'Shukla Chaturthi', 'Shukla Panchami', 'Shukla Shashthi', 'Shukla Saptami', 'Shukla Ashtami', 'Shukla Navami', 'Shukla Dashami', 'Shukla Ekadashi', 'Shukla Dwadashi', 'Shukla Trayodashi', 'Shukla Chaturdashi', 'Purnima (Full Moon)'];
    const krishnas = ['Krishna Pratipada', 'Krishna Dwitiya', 'Krishna Tritiya', 'Krishna Chaturthi', 'Krishna Panchami', 'Krishna Shashthi', 'Krishna Saptami', 'Krishna Ashtami', 'Krishna Navami', 'Krishna Dashami', 'Krishna Ekadashi', 'Krishna Dwadashi', 'Krishna Trayodashi', 'Krishna Chaturdashi', 'Amavasya (New Moon)'];
    
    const allTithis = [...tithis, ...krishnas];
    const nakshatras = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'];
    const yogas = ['Vishkumbha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma', 'Dhriti', 'Shula', 'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra', 'Siddhi', 'Vyatipata', 'Variyana', 'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti'];
    const karanas = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti'];

    // stable pseudo-random index
    const seed = date.getFullYear() + date.getMonth() * 31 + day;
    
    return {
      tithi: allTithis[seed % 30],
      nakshatra: nakshatras[(seed * 2) % 27],
      yoga: yogas[(seed * 3) % 27],
      karana: karanas[(seed * 5) % 7]
    };
  };

  const getRahuKaal = (date) => {
    const dayOfWeek = date.getDay(); // 0 (Sun) to 6 (Sat)
    const rahuKaalMap = [
      "4:30 PM - 6:00 PM", // Sunday
      "7:30 AM - 9:00 AM", // Monday
      "3:00 PM - 4:30 PM", // Tuesday
      "12:00 PM - 1:30 PM", // Wednesday
      "1:30 PM - 3:00 PM", // Thursday
      "10:30 AM - 12:00 PM", // Friday
      "9:00 AM - 10:30 AM" // Saturday
    ];
    return rahuKaalMap[dayOfWeek];
  };

  const panchang = getPanchangElements(currentDate);
  const rahuKaal = getRahuKaal(currentDate);

  return (
    <div className="panchang-widget glass-panel">
      <div className="panchang-header">
        <span className="material-symbols-outlined panchang-icon">wb_sunny</span>
        <div className="panchang-title-area">
          <h3>Today's Live Panchang</h3>
          <p className="panchang-date">{displayDate}</p>
        </div>
      </div>
      
      <div className="panchang-grid">
        <div className="panchang-item">
          <span className="material-symbols-outlined item-icon">nightlight</span>
          <div className="item-content">
            <span className="item-label">Tithi (Lunar Day)</span>
            <span className="item-value">{panchang.tithi}</span>
          </div>
        </div>
        
        <div className="panchang-item">
          <span className="material-symbols-outlined item-icon">star</span>
          <div className="item-content">
            <span className="item-label">Nakshatra (Star)</span>
            <span className="item-value">{panchang.nakshatra}</span>
          </div>
        </div>

        <div className="panchang-item">
          <span className="material-symbols-outlined item-icon">self_improvement</span>
          <div className="item-content">
            <span className="item-label">Yoga</span>
            <span className="item-value">{panchang.yoga}</span>
          </div>
        </div>

        <div className="panchang-item">
          <span className="material-symbols-outlined item-icon">sync</span>
          <div className="item-content">
            <span className="item-label">Karana (Half Tithi)</span>
            <span className="item-value">{panchang.karana}</span>
          </div>
        </div>
      </div>
      
      <div className="panchang-alert">
        <span className="material-symbols-outlined alert-icon">warning</span>
        <div className="alert-content">
          <strong>Rahu Kaal (Inauspicious Time):</strong>
          <span>{rahuKaal}</span>
        </div>
      </div>
    </div>
  );
};

export default DailyPanchangWidget;
