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
            <img src="\ux.png" alt="" />

          </div>
          <h3 className="service-title">User Experience Design</h3>
          <p className="service-description">
            Crafting seamless and intuitive user journeys to enhance engagement
            and satisfaction.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="\ui.png" alt="" />
          </div>
          <h3 className="service-title">User Interface Design</h3>
          <p className="service-description">
            Creating visually appealing interfaces that combine aesthetics with
            functionality.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="\bulb.png" alt="" />
          </div>
          <h3 className="service-title">Branding</h3>
          <p className="service-description">
            Shaping identities into visual systems that connect, resonate, and
            stand out.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="public\wf.png" alt="" />
          </div>
          <h3 className="service-title">Wireframing & Mockups</h3>
          <p className="service-description">
            Developing detailed wireframes and high-fidelity mockups to
            visualize design effectively.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="\rw.png" alt="" />
          </div>
          <h3 className="service-title">Responsive Web Design</h3>
          <p className="service-description">
            Designing adaptable and responsive websites that gives a consistent
            user experience across all devices.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="\ma.png" alt="" />
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
