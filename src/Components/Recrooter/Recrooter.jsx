import React from 'react'
import "./Recrooter.css";

const Recrooter = () => {
    return (
        <div className="recrooter-wrap">
            {/* Overlay Logo */}
            <img className="recrooter-overlay" src="\recrooterbg.png" alt="Recrooter Logo" />

            {/* Header */}
            <div className="recrooter-header">
                <div className="recrooter-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="recrooter-case">
                <div className="recrooter-brand">
                    <img src="\recrooter logo.png" alt="Recrooter" />
                </div>
                <div>
                    <p className="recrooter-issue">
                        This project was centered on creating a brand and digital presence for an AI-powered interviewer that helps <br /> companies streamline their hiring process. The platform automates scheduling and phone screenings through a <br /> human-sounding AI, designed to reflect a company’s culture and mirror the judgment of its best recruiters.
                    </p>
                </div>
            </div>

            {/* What we did */}
            <div className="recrooter-solution">
                <h2 className="recrooter-solution-head">What we did ?</h2>
                <p className="recrooter-solution-text">
                    For this project, we built a strong brand identity and designed a website that reflects the innovative spirit of the product,  an AI interviewer trained to replicate a company’s culture and top recruiter’s judgment. The branding was crafted to communicate trust, professionalism, and, <span className='recrooter-accent'> cutting-edge technology</span> while the website was designed to clearly present the
                    product’s value: automating scheduling and phone screens with a human-sounding AI. Together, the identity and digital  experience position the product as both reliable and forward-thinking, appealing to companies seeking smarter, culture-aligned hiring solutions.
                </p>
            </div>

            {/* Links */}
            <div className="recrooter-refs">
                <p>Website Link:</p>
                <h5>
                    <a href='https://recrooter.com/' style={{color:'white'}}>https://recrooter.com/</a>
                </h5>
            </div>
        </div>
    )
}

export default Recrooter
