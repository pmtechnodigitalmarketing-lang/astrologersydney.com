import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';
import SEO from '../components/SEO';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Blog = () => {
  return (
    <div className="blog-layout">
      <SEO 
        title="Astrology Blog & Insights | Soul Astrology Centre" 
        description="Read our latest articles on love, karma, compatibility, and Vedic astrology remedies."
      />

      <div className="blog-container">
        {/* Hero Section */}
        <motion.section 
          className="hero-section shadow-primary"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div 
            className="hero-bg" 
            style={{ backgroundImage: "url('/images/relationship_astrology_hero.png')" }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <motion.div 
                className="trending-badge"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="trending-dot"></span>
                Relationship Rescue
              </motion.div>
              <motion.h1 
                className="blog-hero-title"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Navigating the Pain of Extramarital Affairs: An Astrological Guide
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Discover the planetary combinations that trigger infidelity, how deep karmic cycles play a role, and the spiritual remedies available to either heal your marriage or find necessary closure.
              </motion.p>
              
              <motion.div 
                className="author-info"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <img 
                  src="https://ui-avatars.com/api/?name=Lyra+Starweaver&background=ec4899&color=fff" 
                  alt="Lyra Starweaver" 
                  className="author-avatar" 
                />
                <div>
                  <p className="author-name">Lyra Starweaver</p>
                  <p className="author-time">10 min read</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Filter & Search Bar */}
        <motion.section 
          className="filter-bar glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="filter-pills no-scrollbar">
            <button className="filter-pill active">All</button>
            <button className="filter-pill">Love & Marriage</button>
            <button className="filter-pill">Affairs & Karma</button>
            <button className="filter-pill">Healing Remedies</button>
            <button className="filter-pill">Compatibility</button>
          </div>
          
          <div className="search-input-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input type="text" className="search-input" placeholder="Search the archives..." />
          </div>
        </motion.section>

        {/* Featured Editorial Layout */}
        <div className="section-header">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            style={{fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-on-surface)'}}
          >
            Editor's Picks
          </motion.h2>
        </div>
        
        <section className="editorial-layout mb-xl">
          <motion.div 
            className="editorial-main article-card"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            transition={{ duration: 0.6 }}
          >
            <div className="article-img-wrapper" style={{ height: '400px' }}>
              <img 
                src="/images/1124000019581294130.jpg" 
                alt="Heartbreak Healing" 
                className="article-img" 
              />
              <div className="article-badge" style={{ backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none' }}>Deep Healing</div>
            </div>
            <div className="article-content" style={{ padding: '2rem' }}>
              <h3 className="article-title" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Why Does Love Fail? Astrological Reasons Behind Breakups</h3>
              <p className="article-desc" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                An in-depth analysis of Venus afflictions, severe Mars-Rahu conjunctions, and 7th house doshas that cause recurring heartbreak—and how ethical astrology can help you overcome them. Learn to identify the karmic patterns holding you back, discover practical remedies to heal past wounds, and explore how cosmic timing plays a crucial role in manifesting a healthy, long-lasting relationship. Whether you are currently navigating a difficult separation or seeking to break a cycle of disappointment, this comprehensive guide offers the spiritual clarity you need to move forward with an open heart.
              </p>
              
              <div className="article-footer">
                <div className="author-info-small">
                  <img src="https://ui-avatars.com/api/?name=Lyra+Starweaver&background=ec4899&color=fff" alt="Lyra Starweaver" className="author-avatar-small" style={{ width: '36px', height: '36px' }} />
                  <span className="author-name-small" style={{ fontSize: '1.1rem' }}>Lyra Starweaver</span>
                </div>
                <span className="article-time" style={{ fontSize: '1.1rem' }}>15 min read</span>
              </div>
            </div>
          </motion.div>

          <div className="editorial-sidebar">
            {/* Sidebar Card 1 */}
            <motion.article 
              className="article-card"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="article-img-wrapper" style={{ height: '180px' }}>
                <img 
                  src="/images/karmic_debt_landscape.png" 
                  alt="Scorpio Deep Dive" 
                  className="article-img" 
                />
                <div className="article-badge">Karma</div>
              </div>
              <div className="article-content">
                <h3 className="article-title">Karmic Debt in Relationships</h3>
                <p className="article-desc">Are you repeating the same toxic patterns? Learn how past-life karma dictates your current romantic life.</p>
                <div className="article-footer">
                  <div className="author-info-small">
                    <img src="https://ui-avatars.com/api/?name=Nova+Reed&background=1E3A8A&color=fff" alt="Nova" className="author-avatar-small" />
                    <span className="author-name-small">Nova Reed</span>
                  </div>
                  <span className="article-time">8 min read</span>
                </div>
              </div>
            </motion.article>

            {/* Sidebar Card 2 */}
            <motion.article 
              className="article-card"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="article-img-wrapper" style={{ height: '180px' }}>
                <img 
                  src="/images/644225921742130200.jpg" 
                  alt="Full Moon Ritual" 
                  className="article-img" 
                />
                <div className="article-badge">Remedies</div>
              </div>
              <div className="article-content">
                <h3 className="article-title">Vedic Remedies for Lost Love</h3>
                <p className="article-desc">Powerful mantras and astrological rituals to clear negative energy and attract your true soulmate.</p>
                <div className="article-footer">
                  <div className="author-info-small">
                    <img src="https://ui-avatars.com/api/?name=Elara+Moon&background=6b21a8&color=fff" alt="Elara" className="author-avatar-small" />
                    <span className="author-name-small">Elara Moon</span>
                  </div>
                  <span className="article-time">4 min read</span>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <div className="section-header">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            style={{fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-on-surface)'}}
          >
            Latest Articles
          </motion.h2>
        </div>

        {/* Article Grid */}
        <section className="article-grid">
          {/* Card 1 */}
          <motion.article 
            className="article-card"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="article-img-wrapper">
              <img 
                src="/images/serene-village-landscape.jpg" 
                alt="Ancient Roots" 
                className="article-img" 
              />
              <div className="article-badge">Compatibility</div>
            </div>
            <div className="article-content">
              <h3 className="article-title">Kundali Matching: Beyond the Score</h3>
              <p className="article-desc">Why 36 Gunas aren't always enough. The hidden planetary aspects that determine true marital harmony.</p>
              
              <div className="article-footer">
                <div className="author-info-small">
                  <img src="https://ui-avatars.com/api/?name=Orion+Vance&background=1E3A8A&color=fff" alt="Orion Vance" className="author-avatar-small" />
                  <span className="author-name-small">Orion Vance</span>
                </div>
                <span className="article-time">5 min read</span>
              </div>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article 
            className="article-card"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="article-img-wrapper">
              <img 
                src="/images/astro-butterfly.jpg" 
                alt="Mars Retrograde" 
                className="article-img" 
              />
              <div className="article-badge">Warning Signs</div>
            </div>
            <div className="article-content">
              <h3 className="article-title">Astrological Signs of Infidelity</h3>
              <p className="article-desc">How the positioning of Rahu, Venus, and the 7th Lord can indicate a partner's wandering eye and hidden affairs.</p>
              
              <div className="article-footer">
                <div className="author-info-small">
                  <img src="https://ui-avatars.com/api/?name=Nova+Reed&background=ec4899&color=fff" alt="Nova Reed" className="author-avatar-small" />
                  <span className="author-name-small">Nova Reed</span>
                </div>
                <span className="article-time">8 min read</span>
              </div>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article 
            className="article-card"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="article-img-wrapper">
              <img 
                src="/images/toxic-marriage-signs.jpg" 
                alt="Toxic Marriage Signs" 
                className="article-img" 
              />
              <div className="article-badge">Healing</div>
            </div>
            <div className="article-content">
              <h3 className="article-title">Healing from a Toxic Marriage</h3>
              <p className="article-desc">Astrological guidance on when to fight for your marriage using remedies, and when the stars say it's time to walk away.</p>
              
              <div className="article-footer">
                <div className="author-info-small">
                  <img src="https://ui-avatars.com/api/?name=Elara+Moon&background=6b21a8&color=fff" alt="Elara Moon" className="author-avatar-small" />
                  <span className="author-name-small">Elara Moon</span>
                </div>
                <span className="article-time">4 min read</span>
              </div>
            </div>
          </motion.article>
        </section>
      </div>
    </div>
  );
};

export default Blog;
