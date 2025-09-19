import React from 'react';
import "./Ohs.css"; 

const Ohs = () => {
    return (
        <div className="ohs-wrap">
            {/* Overlay Logo */}
            <img className="ohs-overlay" src="\image 15.png" alt="OHS Logo" />

            {/* Header */}
            <div className="ohs-header">
                <div className="ohs-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="ohs-case">
                <div className="ohs-brand">
                    <img src="\image 14.png" alt="OHS" />
                </div>
                <div>
                    <p className="ohs-issue">
                        OnHand Solutions tracks raw materials when making items, does production runs, tracks time, figures out cost of goods, syncs inventory with shopify and much more.
                    </p>
                </div>
            </div>

            {/* What we did */}
            <div className="ohs-solution">
                <h2 className="ohs-solution-head">What we did ?</h2>
                <p className="ohs-solution-text">
                    I created the complete <span className="ohs-accent">brand identity</span> and <span className="ohs-accent">digital presence</span> for OnHand Solutions, a platform that helps businesses track raw materials, manage production runs, monitor time, calculate cost of goods, and sync inventory with Shopify. The project included designing their logo, defining a modern and cohesive color palette, and developing a clean, conversion-focused landing page. The design emphasizes <span className="ohs-accent">clarity</span> and <span className="ohs-accent">efficiency</span>, mirroring the platform’s functionality, while also establishing a professional and trustworthy visual identity that resonates with its target audience.
                </p>
            </div>

            {/* Links */}
            <div className="ohs-refs">
                <p>Design Link:</p>
                <a href='https://www.figma.com/board/eLaWurdbcDc5XPmwH9AWqr/OnHand-Solutions-Branding-Jam?node-id=161-501&t=ZD2uvXwwlLNRrgoV-0' style={{color:'white'}}>
                    https://www.figma.com/board/eLaWurdbcDc5XPmwH9AWqr/OnHand-Solutions-Branding-Jam?node-id=161-501&t=ZD2uvXwwlLNRrgoV-0</a>
                <p>Website Link:</p>
                <h5>
                    <a href='https://onhandsolution.com/' style={{color:'white'}}>
                        https://onhandsolution.com/</a>
                </h5>
            </div>
        </div>
    );
}

export default Ohs;
