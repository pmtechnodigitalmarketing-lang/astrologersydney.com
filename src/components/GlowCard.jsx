import React, { useEffect, useRef } from 'react';
import './GlowCard.css';

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  lavender: { base: 260, spread: 300 }
};

const GlowCard = ({ 
  children, 
  className = '', 
  glowColor = 'purple'
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor] || glowColorMap.purple;

  const getInlineStyles = () => ({
    '--base': base,
    '--spread': spread,
    '--radius': '24', // matching loc-card border-radius
    '--border': '2',
    '--backdrop': 'rgba(255, 255, 255, 0.05)',
    '--backup-border': 'rgba(140, 107, 186, 0.2)',
    '--size': '350',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 80) * 1%) / var(--bg-spot-opacity, 0.15)), transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'fixed',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: 'none'
  });

  return (
    <div
      ref={cardRef}
      data-glow
      style={getInlineStyles()}
      className={`glow-card-wrapper ${className}`}
    >
      <div data-glow className="glow-card-inner"></div>
      {children}
    </div>
  );
};

export default GlowCard;
