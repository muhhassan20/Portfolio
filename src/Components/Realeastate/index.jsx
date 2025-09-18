import React from 'react'
import "./style.css";
const index = () => {
    return (
        <div className="wrap">
            <img className="overlay" src="\lunabg.png" alt="" />

            {/* Header */}
            <div className="topbar">
                <div className="marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="case">
                <div className="brand">
                    <img src="\logoYuna.0cb88fc0e6594b07e839 1.png" alt="Lucky Backyards" />
                </div>
                <div>
                    <p className="issue">
                        Yuna Homes is a real estate platform that showcases a variety of residential properties, focusing on clean aesthetics,<br />ease of use, and polished listing presentation. The site features beautiful property visuals, logical navigation, and <br /> persuasive trust elements to help potential homebuyers browse with confidence.
                    </p>
                </div>
            </div>

            {/* What we did */}
            <div className="solution">
                <h2 className="solution-head">What we did ?</h2>
                <p className="solution-text">
                    In designing and developing the Yuna Homes website, the goal was to create a <span className='accent'>clean, modern interface</span> that highlights property imagery and <span className='accent'>clean, visual hierarchy</span> , making browsing simple and engaging. Listings were structured to help users quickly compare options like price, location, and amenities, while seamless navigation between the gallery, about, testimonials, and contact sections supports  <span className='accent'>smooth user flow</span>  . With clear branding and user-friendly layouts, the design builds trust and credibility, striking the right balance between elegance and functionality so users feel inspired and supported while exploring homes.
                </p>
            </div>

            {/* Links */}
            <div className="refs">
                <p>Website Link:</p>
                <h5>
                    <u>https://yunahomes.com/</u>
                </h5>
            </div>
        </div>
    )
}





export default index