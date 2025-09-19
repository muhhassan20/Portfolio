import React from 'react'
import "./History.css";

const History = () => {
    return (
        <div className="history-container">

            <div className="main-content">
                {/* Header Section */}
                <div className="header-section">
                    <h2 className="work-history-label">Work History</h2>
                    <h1 className="history-title">
                        Designing Through the
                        <br />
                        Years
                    </h1>
                </div>
                <div className="background-text-right">
                    <img src="\repository section guider.png" alt="" />
                    <h2 className="large-background-text">
                        The Road
                        <br />
                        Behind the Work
                    </h2>
                </div>
            </div>

            {/* First Timeline Entry */}
            <div className="timeline-section">
                <div className="timeline-content">
                    <div className="timeline-border">
                        <div className="timeline-header">
                            <h3 className="timeline-year">2020-2021</h3>
                            <h4 className="timeline-role">FREELANCE</h4>
                        </div>
                        <p className="timeline-description">
                            While pursuing my Bachelor's degree, I worked as a freelance designer, taking on diverse projects <br /> across
                            UI/UX design, branding, and graphics. This phase helped me build a strong design foundation,<br /> improve
                            client communication, and adapt quickly to different industries and design needs.
                        </p>
                    </div>
                </div>







            </div>
            <div className="two-section">
                <div className="background-text-left">
                    <h2 className="large-background-text large-background-text-left">
                        Experience That
                        <br />
                        Built My
                        <br />
                        Perspective
                    </h2>
                </div>

                <div className="timeline-content">
                    <div className="timeline-border">
                        <div className="timeline-header">
                            <h3 className="timeline-year">2022-Present</h3>
                            <h4 className="timeline-role">OBS TECHNOLOGIA</h4>
                        </div>
                        <p className="timeline-description">
                            Designing user-focused web and mobile products with cross-functional teams. - Turned user needs <br /> into
                            wireframes, prototypes, and clean UI designs - Ran user testing to improve product usability - Built <br /> and
                            maintained design systems for consistent UX - Collaborated closely with developers and <br /> stakeholders -
                            Mentored junior designers with regular feedback
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default History