import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import './ExpandableCard.css';

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className = '',
  classNameExpanded = '',
  ...props
}) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="expandable-overlay"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="expandable-modal-wrapper">
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={`expandable-modal ${classNameExpanded}`}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="expandable-modal-image-wrapper">
                  <img
                    src={src}
                    alt={title}
                    className="expandable-modal-image"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <div className="expandable-modal-content-wrapper">
                <div className="expandable-modal-header">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="expandable-modal-desc"
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="expandable-modal-title"
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="expandable-close-btn"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="expandable-modal-body">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="expandable-modal-children"
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={`expandable-trigger-card ${className}`}
      >
        <div className="expandable-trigger-inner">
          <motion.div layoutId={`image-${title}-${id}`}>
            <img
              src={src}
              alt={title}
              className="expandable-trigger-image"
              loading="lazy"
            />
          </motion.div>
          <div className="expandable-trigger-footer">
            <div className="expandable-trigger-text">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="expandable-trigger-desc"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="expandable-trigger-title"
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className="expandable-open-btn"
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
