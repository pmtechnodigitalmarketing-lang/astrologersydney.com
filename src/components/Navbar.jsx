import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, FileText, Briefcase, MapPin, Home } from 'lucide-react';
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
          <img src="/images/logo.webp" alt="Soul Astrology Centre Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">SOUL ASTROLOGY CENTRE</span>
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
