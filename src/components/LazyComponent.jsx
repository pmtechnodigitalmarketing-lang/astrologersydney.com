import React, { useState, useEffect, useRef } from 'react';

const LazyComponent = ({ children, fallback = null }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only load once
          }
        });
      },
      { rootMargin: '200px' } // Pre-load slightly before it comes into view
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={domRef}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyComponent;
