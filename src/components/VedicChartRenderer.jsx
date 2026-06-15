import React from 'react';

const houseCenters = {
  1: { x: 50, y: 25 },
  2: { x: 25, y: 15 },
  3: { x: 15, y: 25 },
  4: { x: 25, y: 50 },
  5: { x: 15, y: 75 },
  6: { x: 25, y: 85 },
  7: { x: 50, y: 75 },
  8: { x: 75, y: 85 },
  9: { x: 85, y: 75 },
  10: { x: 75, y: 50 },
  11: { x: 85, y: 25 },
  12: { x: 75, y: 15 }
};

const VedicChartRenderer = ({ chartData }) => {
  // chartData is expected to be an object where keys are house numbers (1-12)
  // and values are arrays of strings (e.g., ["Su", "Mo", "Ma"]) representing planets
  
  // We also might want to render the zodiac sign number in each house.
  // For simplicity, let's assume chartData[i].signNum has the sign number and chartData[i].planets has the planets.

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', aspectRatio: '1', position: 'relative' }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', border: '2px solid var(--color-primary)' }}>
        {/* Outer Square */}
        <rect x="0" y="0" width="100" height="100" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
        
        {/* Diagonals */}
        <line x1="0" y1="0" x2="100" y2="100" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="var(--color-primary)" strokeWidth="1" />
        
        {/* Inner Diamond */}
        <line x1="50" y1="0" x2="100" y2="50" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="100" y1="50" x2="50" y2="100" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="50" y1="100" x2="0" y2="50" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="0" y1="50" x2="50" y2="0" stroke="var(--color-primary)" strokeWidth="1" />

        {/* Render Planets and Signs */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((houseNum) => {
          const data = chartData[houseNum] || { signNum: houseNum, planets: [] };
          const pos = houseCenters[houseNum];
          return (
            <g key={houseNum}>
              {/* Sign Number */}
              <text 
                x={pos.x} 
                y={pos.y + (data.planets.length > 0 ? 8 : 2)} 
                fontSize="5" 
                fill="rgba(255,255,255,0.4)" 
                textAnchor="middle"
              >
                {data.signNum}
              </text>
              {/* Planets */}
              <text 
                x={pos.x} 
                y={pos.y - 2} 
                fontSize="6" 
                fill="var(--color-primary)" 
                textAnchor="middle"
                fontWeight="bold"
              >
                {data.planets.join(', ')}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default VedicChartRenderer;
