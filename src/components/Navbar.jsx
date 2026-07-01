import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, FileText, Briefcase, MapPin, Home } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);
import './Navbar.css';

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/info/about-astrology', icon: Info },
  { name: 'Blog', url: '/blog', icon: FileText },
  { name: 'Services', url: '/services', icon: Briefcase },
  { name: 'Branches', url: '/locations', icon: MapPin }
];

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('');

  // Close mobile menu and update active tab when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    // Find matching tab
    const currentItem = navItems.find(item => 
      location.pathname === item.url || 
      (item.url !== '/' && location.pathname.startsWith(item.url))
    );
    
    if (currentItem) {
      setActiveTab(currentItem.name);
    } else {
      setActiveTab('');
    }
  }, [location.pathname]);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.webp" alt="Soul Astrology Centre Logo" className="navbar-logo-img" width="160" height="60" />

        </Link>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isTabActive = activeTab === item.name;

            return (
              <div key={item.name} className="nav-item">
                <Link 
                  to={item.url} 
                  onClick={() => setActiveTab(item.name)}
                  className={`nav-link ${isTabActive ? 'active' : ''}`}
                >
                  <Icon size={16} strokeWidth={2.5} />
                  <span>{item.name}</span>
                  
                  {isTabActive && (
                    <motion.div
                      layoutId="lamp"
                      className="tubelight-lamp-container"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="tubelight-lamp-base">
                        <div className="tubelight-blur-1" />
                        <div className="tubelight-blur-2" />
                        <div className="tubelight-blur-3" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              </div>
            );
          })}
          
          {/* Mobile Only Consultation Buttons */}
          <div className="navbar-actions mobile-only">
            <a href="tel:+61450144999" className="btn btn-call">
              Call Now
            </a>
            <Link to="/contact" className="btn btn-book">
              Book Now
            </Link>
          </div>

          {/* Mobile Only Social Icons */}
          <div className="mobile-social-icons">
            <Link to="/" className="social-icon-btn instagram-btn" aria-label="Instagram">
              <InstagramIcon />
            </Link>
            <Link to="/" className="social-icon-btn facebook-btn" aria-label="Facebook">
              <FacebookIcon />
            </Link>
            <Link to="/" className="social-icon-btn twitter-btn" aria-label="X / Twitter">
              <TwitterIcon />
            </Link>
            <Link to="/" className="social-icon-btn youtube-btn" aria-label="YouTube">
              <YoutubeIcon />
            </Link>
          </div>

        </nav>
        <div className="navbar-actions desktop-only">
          <a href="tel:+61450144999" className="btn btn-call">
            Call Now
          </a>
          <Link to="/contact" className="btn btn-book">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
