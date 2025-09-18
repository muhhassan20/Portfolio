import React from 'react'
import "./Nutrinut.css";

const Nutrinut = () => {
    return (
        <div className="nutri-wrap">
            <img className="nutri-overlay" src="\Nutrinut Snacks Logo.png" alt="" />

            {/* Header */}
            <div className="nutri-header">
                <div className="nutri-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="nutri-case">
                <div className="nutri-brand">
                    <img src="\nutrilogo.png" alt="Yuna Homes" />
                </div>
                <div>
                    <p className="nutri-issue">
                        At Nutrinut Snacks, we are committed to providing you with the finest quality roasted dry nuts with the touch of dry <br /> fruits. Every pouch is crafted with care, using fully organic, non-GMO, and gluten-free ingredients, sourced directly <br />from the farmers.
                    </p>
                </div>
            </div>

            {/* What we did */}
            <div className="nutri-solution">
                <h2 className="nutri-solution-head">What we did ?</h2>
                <p className="nutri-solution-text">
                    For Nutrinut Snacks, we handled the complete brand journey from identity to digital presence. We designed the logo and crafted packaging that reflects the brand’s focus on health, freshness, and authenticity, while visually standing out on shelves. Alongside this, we developed a <span className='nutri-accent'>clean and engaging website</span> that showcases their range of roasted dry nuts and fruit blends, emphasizing their use of organic, non-GMO, and gluten-free ingredients. The combined effort created a cohesive brand experience that highlights Nutrinut’s values and makes it easy for customers to connect with their products both online and offline.</p>

            </div>

            {/* Links */}
            <div className="nutri-refs">
                <p> Design Link:</p>
                <h5>
                    <u>Design Link:
                        https://www.figma.com/design/ok7XICMo4KTqS7WHzT2IYR/Nutrinut-Snacks-%7C-Web-2025?node-id=2114-218&t=KTelDOGZ9hP1HzzO-0</u>
                </h5>
                <p>Website Link:</p>
                <h5>
                    <u>https://nutrinutsnacks.com/</u>
                </h5>
            </div>
        </div>
    )
}


export default Nutrinut