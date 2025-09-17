import React from 'react'
import './hero.css';
const Herosection = () => {
  return (
 <div className="hero-container">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-links">
          <a href="#" className="nav-link">UX Design</a>
          <a href="#" className="nav-link">UI Design</a>
          <a href="#" className="nav-link">Branding</a>
          <a href="#" className="nav-link">Wireframing & Mockups</a>
          <a href="#" className="nav-link">Responsive Design</a>
          <a href="#" className="nav-link">Mobile App Design</a>
        </div>
        <button className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Main Text */}
        <div className="hero-text">
          <h3 className='craft'>CRAFTING EXCELLENCE</h3>
          <h1 className="main-title">
            <span>UI/UX</span>
            <span>DESIGNER</span>
          </h1>
          
          <button className="cta-button">
            <div className="button-icon">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Let's work together</span>
          </button>
        </div>

        {/* Right Side - Description */}
        <div className="description">
          <div className="bullet-point"/>
          <p>
            I create digital designs that not only enhance your brand's visual identity 
            but also improve user experiences, boost engagement, and drive 
            measurable results.
          </p>
        </div>
      </div>

      {/* Bottom Right Text */}
      <div className="bottom-text">
        THROUGH EVERY PIXEL
      </div>

    
    </div>
  );
}

export default Herosection