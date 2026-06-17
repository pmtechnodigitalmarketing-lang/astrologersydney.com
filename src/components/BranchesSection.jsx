import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BranchesSection.css";

const branches = [
  {
    id: "sydney",
    city: "Sydney HQ",
    phone: "+61 2 8000 1111",
    image: "/images/locations/sydney_landmark_1781159154031.png",
    icon: "location_city",
  },
  {
    id: "melbourne",
    city: "Melbourne",
    phone: "+61 3 9000 2222",
    image: "/images/locations/melbourne_landmark_1781159210441.png",
    icon: "business",
  },
  {
    id: "brisbane",
    city: "Brisbane",
    phone: "+61 7 3000 3333",
    image: "/images/locations/brisbane_landmark_1781159270161.png",
    icon: "apartment",
  },
  {
    id: "perth",
    city: "Perth",
    phone: "+61 8 6000 4444",
    image: "/images/locations/perth_landmark_1781159323968.png",
    icon: "landscape",
  },
  {
    id: "adelaide",
    city: "Adelaide",
    phone: "+61 8 7000 5555",
    image: "/images/locations/adelaide_landmark_1781159360067.png",
    icon: "park",
  },
];

const BranchesSection = () => {
  const [activeBranch, setActiveBranch] = useState("sydney");

  return (
    <section className="branches-section">
      <div className="branches-container">
        <motion.div
          className="branches-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="branches-badge">
            <span className="material-symbols-outlined">public</span>
            Our Presence
          </div>
          <h2>Visit Our Branches</h2>
          <p>
            Experience profound cosmic guidance in person at our luxurious,
            tranquil centers across Australia.
          </p>
        </motion.div>

        <div className="branches-accordion">
          {branches.map((branch, index) => {
            const isActive = activeBranch === branch.id;
            return (
              <motion.div
                key={branch.id}
                className={`accordion-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveBranch(branch.id)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={branch.image}
                  alt={branch.city}
                  className="accordion-image"
                />
                <div className="accordion-overlay"></div>

                <div className="accordion-content">
                  <div className="accordion-icon-wrap">
                    <span className="material-symbols-outlined">
                      {branch.icon}
                    </span>
                  </div>

                  <div className="accordion-text">
                    <h3>{branch.city}</h3>
                    <div className="accordion-detail">
                      <p>{branch.address}</p>
                    </div>
                    <div className="accordion-detail">
                      <span className="material-symbols-outlined">call</span>
                      <p>{branch.phone}</p>
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="btn-branch-contact"
                    >
                      Book Visit
                    </a>
                  </div>
                </div>

                {/* Vertical Title for when card is collapsed */}
                <div className="accordion-vertical-title">{branch.city}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
