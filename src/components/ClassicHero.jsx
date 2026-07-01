import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ClassicHero.css';

const heroContent = [
  {
    title: "GET YOUR EX LOVE BACK",
    subtitle: "Restore Peace, Happiness & Positivity in Your Relationship",
    description: "Reconnect with your lost love and rebuild a strong, lasting relationship. Our expert astrologers provide powerful remedies and guidance to resolve misunderstandings.",
    signsTitle: "SIGNS YOU MAY NEED LOVE HEALING",
    signs: [
      "Continuous arguments and misunderstandings",
      "Interference from third parties or family",
      "Sudden loss of interest or communication",
      "Trust issues and emotional distance",
      "Feeling lonely, stressed, or heartbroken"
    ],
    image: "/images/Master Jai Bn-1.webp",
  },
  {
    title: "BLACK MAGIC REMOVAL",
    subtitle: "Restore Peace, Happiness & Positivity",
    description: "Black magic and evil forces can affect your health, relationships, career, and peace of mind. Master Jai uses powerful spiritual techniques to clear negativity and protect you from bad energy.",
    signsTitle: "SIGNS OF BLACK MAGIC OR NEGATIVITY",
    signs: [
      "Constant stress, anxiety & fear",
      "Unexplained health problems",
      "Financial loss & career obstacles",
      "Relationship problems & fights",
      "Bad dreams & restless sleep"
    ],
    image: "/images/Master Jai Bn-3.webp",
  },
  {
    title: "SOLVE LOVE PROBLEMS",
    subtitle: "Immediate & Effective Astrological Solutions",
    description: "Facing continuous arguments, family objections, or trust issues? Get immediate, effective astrological solutions for all your love problems within 24 hours.",
    signsTitle: "SIGNS OF SEVERE LOVE PROBLEMS",
    signs: [
      "Family objections to marriage",
      "Constant fighting for no reason",
      "Partner is cheating or lying",
      "One-sided love or rejection",
      "Divorce or separation threats"
    ],
    image: "/images/Master Jai Bn-2.webp",
  }
];

export function ClassicHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="classic-hero-section poster-layout">
      {/* Banner Images */}
      <div className="banner-images-wrapper">
        {heroContent.map((slide, index) => (
          <img
            key={`bg-${index}`}
            className={`classic-hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            src={slide.image}
            alt={slide.title}
          />
        ))}
      </div>

      <div className="classic-hero-dots">
        {heroContent.map((slide, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`classic-hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
