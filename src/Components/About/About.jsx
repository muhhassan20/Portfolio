import "./about.css";
import React from "react";

const AboutSection = () => {
  return (
    <div className="main-about">
      <div className="about-left">
        <div className="about">
          <h4>About me</h4>
          <h2>I can deliver results that exceed your expectations.</h2>
        </div>
        <div className="about-bottom">
          <h1>Designing clarity with every click.</h1>
          <div className="img-bar1">
            <img src="/repository section guider.png" alt="" />
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="img-bar2">
          <img src="/repository section guider.png" alt="" />
        </div>

        <div className="para">
          <p>
            Hi, I'm a UI/UX designer based in Islamabad, with over 5 years of
            industrial experience crafting visually engaging digital experiences
            that strategically convert visitors into real users. I specialize in
            creating user-centered designs that help businesses grow, retain
            users, and drive measurable results.
            <br />
            I enjoy working on meaningful projects that solve real problems and
            bring value to people. From wireframing to prototyping, I aim to
            create clean, intuitive interfaces that feel natural to use.
            <br />I care deeply about quality from visuals to usability and
            believe good design should be as functional as it is visually
            appealing.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">
              50<span className="plus">+</span>
            </div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              50<span className="plus">+</span>
            </div>
            <div className="stat-label">World Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              5<span className="plus">+</span>
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
