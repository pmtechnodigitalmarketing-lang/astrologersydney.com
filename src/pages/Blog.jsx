import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import SEO from "../components/SEO";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const allArticles = [
  {
    id: 1,
    title: "Why Does Love Fail? Astrological Reasons Behind Breakups",
    desc: "An in-depth analysis of Venus afflictions, severe Mars-Rahu conjunctions, and 7th house doshas that cause recurring heartbreak�and how ethical astrology can help you overcome them. Learn to identify the karmic patterns holding you back, discover practical remedies to heal past wounds, and explore how cosmic timing plays a crucial role in manifesting a healthy, long-lasting relationship. Whether you are currently navigating a difficult separation or seeking to break a cycle of disappointment, this comprehensive guide offers the spiritual clarity you need to move forward with an open heart.",
    badge: "Deep Healing",
    category: "Love & Marriage",
    img: "/images/1124000019581294130.webp",
    author: "Lyra Starweaver",
    authorAvatar: "https://ui-avatars.com/api/?name=Lyra+Starweaver&background=ec4899&color=fff",
    time: "15 min read",
    isMainEditorPick: true
  },
  {
    id: 2,
    title: "Karmic Debt in Relationships",
    desc: "Are you repeating the same toxic patterns? Learn how past-life karma dictates your current romantic life.",
    badge: "Karma",
    category: "Affairs & Karma",
    img: "/images/karmic_debt_landscape.webp",
    author: "Nova Reed",
    authorAvatar: "https://ui-avatars.com/api/?name=Nova+Reed&background=1E3A8A&color=fff",
    time: "8 min read",
    isEditorSidebar: true
  },
  {
    id: 3,
    title: "Vedic Remedies for Lost Love",
    desc: "Powerful mantras and astrological rituals to clear negative energy and attract your true soulmate.",
    badge: "Remedies",
    category: "Healing Remedies",
    img: "/images/644225921742130200.webp",
    author: "Elara Moon",
    authorAvatar: "https://ui-avatars.com/api/?name=Elara+Moon&background=6b21a8&color=fff",
    time: "4 min read",
    isEditorSidebar: true
  },
  {
    id: 4,
    title: "Kundali Matching: Beyond the Score",
    desc: "Why 36 Gunas aren't always enough. The hidden planetary aspects that determine true marital harmony.",
    badge: "Compatibility",
    category: "Compatibility",
    img: "/images/serene-village-landscape.webp",
    author: "Orion Vance",
    authorAvatar: "https://ui-avatars.com/api/?name=Orion+Vance&background=1E3A8A&color=fff",
    time: "5 min read",
    isLatest: true
  },
  {
    id: 5,
    title: "Astrological Signs of Infidelity",
    desc: "How the positioning of Rahu, Venus, and the 7th Lord can indicate a partner's wandering eye and hidden affairs.",
    badge: "Warning Signs",
    category: "Affairs & Karma",
    img: "/images/astro-butterfly.webp",
    author: "Nova Reed",
    authorAvatar: "https://ui-avatars.com/api/?name=Nova+Reed&background=ec4899&color=fff",
    time: "8 min read",
    isLatest: true
  },
  {
    id: 6,
    title: "Healing from a Toxic Marriage",
    desc: "Astrological guidance on when to fight for your marriage using remedies, and when the stars say it's time to walk away.",
    badge: "Healing",
    category: "Healing Remedies",
    img: "/images/toxic-marriage-signs.webp",
    author: "Elara Moon",
    authorAvatar: "https://ui-avatars.com/api/?name=Elara+Moon&background=6b21a8&color=fff",
    time: "4 min read",
    isLatest: true
  }
];

const categories = ["All", "Love & Marriage", "Affairs & Karma", "Healing Remedies", "Compatibility"];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = activeFilter === "All" || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isFiltering = activeFilter !== "All" || searchQuery !== "";

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
            style={{ backgroundImage: "url('/images/relationship_astrology_hero.webp')" }}
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
                  loading="lazy"
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
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-pill ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="search-input-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search the archives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.section>

        {!isFiltering ? (
          <>
            {/* Featured Editorial Layout */}
            <div className="section-header">
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
                style={{fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-on-surface)"}}
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
                <div className="article-img-wrapper" style={{ height: "400px" }}>
                  <img 
                    src={allArticles[0].img} 
                    alt={allArticles[0].title} 
                    className="article-img" 
                    loading="lazy"
                  />
                  <div className="article-badge" style={{ backgroundColor: "var(--color-primary)", color: "#fff", border: "none" }}>{allArticles[0].badge}</div>
                </div>
                <div className="article-content" style={{ padding: "2rem" }}>
                  <h3 className="article-title" style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{allArticles[0].title}</h3>
                  <p className="article-desc" style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                    {allArticles[0].desc}
                  </p>
                  
                  <div className="article-footer">
                    <div className="author-info-small">
                      <img src={allArticles[0].authorAvatar} alt={allArticles[0].author} className="author-avatar-small" style={{ width: "36px", height: "36px" }} loading="lazy" />
                      <span className="author-name-small" style={{ fontSize: "1.1rem" }}>{allArticles[0].author}</span>
                    </div>
                    <span className="article-time" style={{ fontSize: "1.1rem" }}>{allArticles[0].time}</span>
                  </div>
                </div>
              </motion.div>

              <div className="editorial-sidebar">
                {allArticles.filter(a => a.isEditorSidebar).map((article, idx) => (
                  <motion.article 
                    key={article.id}
                    className="article-card"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
                    transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2) }}
                  >
                    <div className="article-img-wrapper" style={{ height: "180px" }}>
                      <img 
                        src={article.img} 
                        alt={article.title} 
                        className="article-img" 
                        loading="lazy"
                      />
                      <div className="article-badge">{article.badge}</div>
                    </div>
                    <div className="article-content">
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-desc">{article.desc}</p>
                      <div className="article-footer">
                        <div className="author-info-small">
                          <img src={article.authorAvatar} alt={article.author} className="author-avatar-small" loading="lazy" />
                          <span className="author-name-small">{article.author}</span>
                        </div>
                        <span className="article-time">{article.time}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <div className="section-header">
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
                style={{fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-on-surface)"}}
              >
                Latest Articles
              </motion.h2>
            </div>

            {/* Article Grid */}
            <section className="article-grid">
              {allArticles.filter(a => a.isLatest).map((article, idx) => (
                <motion.article 
                  key={article.id}
                  className="article-card"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
                  transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
                >
                  <div className="article-img-wrapper">
                    <img 
                      src={article.img} 
                      alt={article.title} 
                      className="article-img" 
                      loading="lazy"
                    />
                    <div className="article-badge">{article.badge}</div>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-desc">{article.desc}</p>
                    
                    <div className="article-footer">
                      <div className="author-info-small">
                        <img src={article.authorAvatar} alt={article.author} className="author-avatar-small" loading="lazy" />
                        <span className="author-name-small">{article.author}</span>
                      </div>
                      <span className="article-time">{article.time}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>
          </>
        ) : (
          <section className="article-grid" style={{ marginTop: "40px" }}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.article 
                  key={article.id}
                  className="article-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="article-img-wrapper">
                    <img 
                      src={article.img} 
                      alt={article.title} 
                      className="article-img" 
                      loading="lazy"
                    />
                    <div className="article-badge">{article.badge}</div>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-desc">{article.desc}</p>
                    <div className="article-footer">
                      <div className="author-info-small">
                        <img src={article.authorAvatar} alt={article.author} className="author-avatar-small" loading="lazy" />
                        <span className="author-name-small">{article.author}</span>
                      </div>
                      <span className="article-time">{article.time}</span>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div style={{ padding: "40px", gridColumn: "1 / -1", textAlign: "center" }}>
                <h3 style={{ fontFamily: "var(--font-display)", color: "var(--color-on-surface-variant)" }}>No articles found for your search.</h3>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Blog;

