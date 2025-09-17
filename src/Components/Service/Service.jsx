import React from "react";

import "./service.css";

const ServicesSection = () => {
  return (
    <div className="services-container">
      {/* Header */}
      <div className="services-header">
        <h2 className="services-title">Explore My Services</h2>
        <p className="services-subtitle">
          Embark on a Design Journey, Discovering Tailored Solutions Infused
          with Passion, Precisions, and Purpose to Shape Tomorrow's Experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="#DC2626"
              />
            </svg>
          </div>
          <h3 className="service-title">User Experience Design</h3>
          <p className="service-description">
            Crafting seamless and intuitive user journeys to enhance engagement
            and satisfaction.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                fill="#DC2626"
              />
            </svg>
          </div>
          <h3 className="service-title">User Interface Design</h3>
          <p className="service-description">
            Creating visually appealing interfaces that combine aesthetics with
            functionality.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#DC2626"
              />
            </svg>
          </div>
          <h3 className="service-title">Branding</h3>
          <p className="service-description">
            Shaping identities into visual systems that connect, resonate, and
            stand out.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                fill="#DC2626"
              />
            </svg>
          </div>
          <h3 className="service-title">Wireframing & Mockups</h3>
          <p className="service-description">
            Developing detailed wireframes and high-fidelity mockups to
            visualize design effectively.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill="#DC2626" />
            </svg>
          </div>
          <h3 className="service-title">Responsive Web Design</h3>
          <p className="service-description">
            Designing adaptable and responsive websites that gives a consistent
            user experience across all devices.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-1.99zM17 19H7V5h10v14z"
                fill="#DC2626"
              />
            </svg>
          </div>
          <h3 className="service-title">Mobile App Design</h3>
          <p className="service-description">
            Designing intuitive and user-friendly mobile applications for iOS
            and Android Platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
