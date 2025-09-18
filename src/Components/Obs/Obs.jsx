import React from 'react'
import "./Obs.css";

const Obs = () => {
    return (
        <div className="obs-wrap">
            {/* Overlay Logo */}
            <img className="obs-overlay" src="\obsbg.png" alt="OBS Logo" />

            {/* Header */}
            <div className="obs-header">
                <div className="obs-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="obs-case">
                <div className="obs-brand">
                    <img src="\updated Logo OBS (1)-03 1.png" alt="OBS Technologia" />
                </div>
                <div>
                    <p className="obs-issue">
                        I developed the official website for <span className="obs-accent">OBS Technologia</span>,
                        designed to represent the company’s identity as a forward-thinking IT solutions provider.
                        The website highlights the company’s range of services—including design, development, and
                        digital solutions—through a <span className="obs-accent">clean</span> and
                        <span className="obs-accent"> professional layout</span> that emphasizes
                        <span className="obs-accent"> clarity</span> and
                        <span className="obs-accent"> usability</span>. The structure was built to make it easy for
                        potential clients to understand what OBS offers, explore past work, and connect with the team.
                        With a modern interface and smooth navigation, the site positions OBS Technologia as a reliable,
                        innovative partner for businesses looking to grow through technology.
                    </p>

                </div>
            </div>

            {/* Links */}
            <div className="obs-refs">
                <p>Website Link:</p>
                <h5>
                    <u>
                        https://www.obstechnologia.com/
                                            </u>
                                        </h5>
                                    </div>
                                </div>
                            )
                        }
                        
                        export default Obs
