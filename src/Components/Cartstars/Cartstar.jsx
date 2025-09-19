import React from 'react'
import "./Cartstars.css";

const Cartstars = () => {
    return (
        <div className="cartstars-wrap">
            {/* Overlay Logo */}
            <img className="cartstars-overlay" src="\cartbg.png" alt="Cartstars Logo" />

            {/* Header */}
            <div className="cartstars-header">
                <div className="cartstars-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="cartstars-case">
                <div className="cartstars-brand">
                    <img src="\Logo Hidden to Visible Animator.png" alt="Cartstars" />
                </div>
                <div>
                    <p className="cartstars-issue">
                        CartStars is an exclusive community for retail and eCommerce leaders, especially those in the top 5% in their field. <br /> It offers real insights, peer connections, and vendor partnerships without the fluff. The service includes member-only <br /> content, in-person and virtual events, and a private app for on-the-go insights.
                    </p>
                </div>
            </div>

            {/* What we did */}
            <div className="cartstars-solution">
                <h2 className="cartstars-solution-head">What we did ?</h2>
                <p className="cartstars-solution-text">
                    For CartStars, I created the complete <span className='cartstars-accent'> brand identity</span> along with designing and developing the website. The brand was built to reflect exclusivity, professionalism, and trust, aligning with CartStars’ vision of being a premium community for top retail and eCommerce leaders. The website was designed with a <span className='cartstars-accent'> clean, modern layout</span> that highlights membership benefits, networking opportunities, and partner connections, while maintaining a seamless user experience. Together, the identity and site establish CartStars as a credible, high-end platform that resonates with its audience of industry leaders.

                </p>
            </div>

            {/* Links */}
            <div className="cartstars-refs">
                <p>Design Link:</p>
                <h5>

                    <a target='_blank' style={{color:"white" }} href=" https://www.figma.com/design/ntxdTOcBQ6VSH5KV2CMBou/CARTSTARS-Figma--Waleed-s-Copy-?node-id=2223-4586&t=IO1JjjwOchA2QYio-0"> https://www.figma.com/design/ntxdTOcBQ6VSH5KV2CMBou/CARTSTARS-Figma--Waleed-s-Copy-?node-id=2223-4586&t=IO1JjjwOchA2QYio-0</a>

                </h5>
                <p>Website Link:</p>
                <h5>
                     <a target='_blank' style={{color:"white" }} href="  https://cartstars.com/"> https://cartstars.com/</a>
                    
                </h5>
            </div>
        </div>
    )
}

export default Cartstars
