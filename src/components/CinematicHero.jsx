import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import "./CinematicHero.css";
import { Link } from "react-router-dom";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const heroContent = [
  {
    title: (
      <>
        Get Your Ex<br />
        Love Back
      </>
    ),
    subtitle:
      "Reconnect with your lost love and rebuild a strong, lasting relationship. Our expert astrologers provide powerful remedies and guidance to resolve misunderstandings, heal past wounds, and reignite the spark between you and your partner.",
    image: "/images/ex_love_back.png",
  },
  {
    title: (
      <>
        Black Magic<br />
        Removal
      </>
    ),
    subtitle:
      "Protect yourself and your loved ones from negative energies, evil eyes, and dark forces. We offer sacred spiritual cleansing and protective shields to eliminate blockages and bring peace, prosperity, and positivity back into your life.",
    image: "/images/black_magic_removal.png",
  },
  {
    title: (
      <>
        Love Problem<br />
        Solution in 24 Hrs
      </>
    ),
    subtitle:
      "Facing continuous arguments, family objections, or trust issues? Get immediate, effective astrological solutions for all your love and marriage problems within 24 hours. Experience harmony and joy in your relationship once again.",
    image: "/images/love_problem_solution.png",
  },
];

export function CinematicHero({
  brandName = "Soul Astrology",
  tagline1 = "Discover your true",
  tagline2 = "Cosmic Blueprint.",
  cardHeading = "Cosmic Clarity, Delivered.",
  cardDescription = <><span className="ch-text-highlight">Soul Astrology Centre</span> empowers seekers with authentic Vedic guidance, precise birth chart analysis, and powerful spiritual remedies.</>,
  metricValue = 25,
  metricLabel = "Years Experience",
  ctaHeading = "Start your journey.",
  ctaDescription = "Unlock the profound mysteries of your cosmic blueprint. Join thousands who have found love, peace, and life-changing clarity through Master Jai's authentic Vedic guidance.",
  ...props
}) {
  const containerRef = useRef(null);
  const mainCardRef = useRef(null);
  const mockupRef = useRef(null);
  const requestRef = useRef(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 1. High-Performance Mouse Interaction Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 2. Complex Cinematic Scroll Timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".ch-card-left", ".ch-card-right", ".ch-mockup-scale", ".floating-badge", ".ch-phone-widget"], { autoAlpha: 0 });
      gsap.set(".ch-cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)", pointerEvents: "none" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".ch-hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".ch-mockup-scale",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: isMobile ? 0.65 : 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".ch-phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".ch-card-left", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".ch-card-right", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".ch-hero-text-wrapper", { autoAlpha: 0 })
        .set(".ch-cta-wrapper", { autoAlpha: 1, pointerEvents: "auto" }) 
        .to({}, { duration: 1.5 })
        .to([".ch-mockup-scale", ".floating-badge", ".ch-card-left", ".ch-card-right"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(".main-card", { 
          width: isMobile ? "92vw" : "85vw", 
          height: isMobile ? "92vh" : "85vh", 
          borderRadius: isMobile ? "32px" : "40px", 
          ease: "expo.inOut", 
          duration: 1.8 
        }, "pullback") 
        .to(".ch-cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]); 

  return (
    <div
      ref={containerRef}
      className="ch-container"
      {...props}
    >
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme" aria-hidden="true" />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="ch-hero-text-wrapper">
        <h1 className="text-track gsap-reveal text-3d-matte ch-text-title1">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte ch-text-title2">
          {tagline2}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: Tactile CTA Buttons */}
      <div className="ch-cta-wrapper gsap-reveal">
        <h2 className="ch-cta-title text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="ch-cta-desc">
          {ctaDescription}
        </p>
        <div className="ch-btn-group">
          <Link to="/contact" aria-label="Book a Consultation" className="ch-btn btn-modern-light group">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
            <div className="ch-btn-text">
              <div className="ch-btn-text-small">Schedule Now</div>
              <div className="ch-btn-text-large">Book Session</div>
            </div>
          </Link>
          <a href="https://wa.me/61450144999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Message" className="ch-btn btn-modern-dark group">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 0C5.385 0 .004 5.38.004 12.025c0 2.12.553 4.186 1.603 6.002L.014 24l6.113-1.603c1.745.962 3.722 1.47 5.904 1.47 6.646 0 12.027-5.38 12.027-12.025C24 5.38 18.677 0 12.031 0zm3.623 17.305c-.322.906-1.859 1.66-2.556 1.745-.697.085-1.503.255-4.823-1.12-4.015-1.658-6.61-5.748-6.812-6.02-.202-.27-1.624-2.16-1.624-4.12 0-1.96 1.026-2.923 1.393-3.327.366-.405.795-.506 1.058-.506.264 0 .528.005.762.016.242.011.567-.093.889.684.331.796 1.135 2.766 1.235 2.97.101.202.169.438.034.707-.135.27-.203.438-.405.674-.202.236-.423.518-.6.719-.196.225-.402.467-.174.855.228.388 1.014 1.67 2.183 2.716 1.507 1.349 2.762 1.765 3.15 1.956.388.19.615.157.848-.112.234-.27 1.002-1.168 1.272-1.572.27-.405.539-.337.893-.202.355.135 2.247 1.06 2.632 1.253.385.193.642.287.734.444.093.158.093.92-.229 1.825z"/>
            </svg>
            <div className="ch-btn-text">
              <div className="ch-btn-text-small" style={{ color: '#a3a3a3' }}>Chat With Us</div>
              <div className="ch-btn-text-large">WhatsApp</div>
            </div>
          </a>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div className="ch-card-wrapper">
        <div ref={mainCardRef} className="main-card premium-depth-card gsap-reveal">
          <div className="card-sheen" aria-hidden="true" />

          {/* DYNAMIC RESPONSIVE GRID */}
          <div className="ch-card-inner">
            
            {/* 1. TOP (Mobile) / RIGHT (Desktop): BRAND NAME */}
            <div className="ch-card-right gsap-reveal">
              <h2 className="ch-brand-name text-card-silver-matte">
                {brandName}
              </h2>
            </div>

            {/* 2. MIDDLE (Mobile) / CENTER (Desktop): ROTATING IMAGES */}
            <div className="ch-card-middle">
              <div className="ch-mockup-scale" ref={mockupRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '400px', height: '580px', marginTop: '40px', borderRadius: '3rem', overflow: 'hidden', boxShadow: '0 40px 80px -15px rgba(0,0,0,0.9), 0 15px 25px -5px rgba(0,0,0,0.7)', willChange: 'transform', transformStyle: 'preserve-3d' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentContentIndex}
                      initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{ position: 'absolute', width: '100%', height: '100%' }}
                    >
                      <img
                        src={heroContent[currentContentIndex].image}
                        alt={heroContent[currentContentIndex].title.props?.children?.join?.("") || "Astrology Service"}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 3. BOTTOM (Mobile) / LEFT (Desktop): ROTATING TEXT */}
            <div className="ch-card-left gsap-reveal">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContentIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="ch-card-heading">
                    {heroContent[currentContentIndex].title}
                  </h3>
                  <p className="ch-card-desc">
                    {heroContent[currentContentIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
