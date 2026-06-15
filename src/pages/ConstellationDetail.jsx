import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { constellationData } from '../data/constellationData';
import './ConstellationDetail.css';

const ConstellationDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
    const constellation = constellationData[id];
    setData(constellation);
  }, [id]);

  if (data === undefined) {
    return (
      <div className="article-layout article-flex-center">
        <div className="glass-panel p-xl text-center">
          <h2 className="text-primary mb-md">Constellation Not Found</h2>
          <p className="text-variant mb-lg">The celestial information you seek is currently unavailable.</p>
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  if (!data) return null;

  // Helper to get random constellations for the Explore More widget
  const getRandomConstellations = (currentId, count = 3) => {
    const keys = Object.keys(constellationData).filter(k => k !== currentId);
    // Shuffle
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    return keys.slice(0, count).map(k => ({ id: k, ...constellationData[k] }));
  };

  return (
    <div className="constellation-page">
      
      {/* Immersive Hero */}
      <section className="constellation-hero">
        <div className="breadcrumbs">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{data.title}</span>
        </div>
        
        <div className="constellation-hero-content">
          <h1>{data.title}</h1>
          <h3>{data.subtitle}</h3>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="constellation-container">
        
        {/* Left Column: Article Body */}
        <main className="constellation-main">
          <div className="intro-text">
            {data.intro}
          </div>

          {/* Sections Content */}
          {data.sections.map((section, idx) => (
            <div key={idx} id={section.id} className="content-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </main>

        {/* Right Column: Sidebar Widgets */}
        <aside className="constellation-sidebar">
          
          {/* Quick Facts Widget */}
          <div className="glass-widget">
            <h3 className="widget-title">
              <span className="material-symbols-outlined">analytics</span>
              Quick Facts
            </h3>
            <div className="quick-facts-grid">
              {data.details.map((detail, idx) => (
                <div key={idx} className="fact-item">
                  <span className="fact-label">{detail.label}</span>
                  <span className="fact-value">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stargazing Guide Widget */}
          <div className="glass-widget">
            <h3 className="widget-title">
              <span className="material-symbols-outlined">explore</span>
              Stargazing Guide
            </h3>
            <p style={{ color: 'rgba(26, 26, 46, 0.8)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              The best time to observe {data.title} is during its peak visibility months. Look towards the night sky away from city light pollution.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(107, 33, 168,0.1)', padding: '1rem', borderRadius: '12px' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>visibility</span>
              <span style={{ color: '#fff', fontSize: '0.9rem' }}>Requires a clear, dark sky. Binoculars recommended for deep-sky objects.</span>
            </div>
          </div>

          {/* Sticky On This Page */}
          <div className="glass-widget sticky-toc">
            <h3 className="widget-title">
              <span className="material-symbols-outlined">list</span>
              On This Page
            </h3>
            <ul className="toc-list">
              {data.sections.map((section, idx) => (
                <li key={idx} className="toc-item">
                  <a href={`#${section.id}`} className="toc-link">
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore More Widget */}
          <div className="glass-widget">
            <h3 className="widget-title">
              <span className="material-symbols-outlined">rocket_launch</span>
              Explore More
            </h3>
            <div className="explore-links-wrapper">
              {getRandomConstellations(id, 3).map((constellation, idx) => (
                <Link key={idx} to={`/constellation/${constellation.id}`} className="explore-link">
                  <div className="explore-link-icon">
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{constellation.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Constellation</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default ConstellationDetail;
