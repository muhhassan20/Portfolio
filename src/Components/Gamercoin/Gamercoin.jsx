import React from 'react'
import "./Gamercoin.css";

const Gamercoin = () => {
    return (
        <div className="gamercoin-wrap">
            {/* Overlay Logo */}
            <img className="gamercoin-overlay" src="\coinbg.png" alt="Gamercoin Logo" />

            {/* Header */}
            <div className="gamercoin-header">
                <div className="gamercoin-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="gamercoin-case">
                <div className="gamercoin-brand">
                    <img src="\coinlogo.png" alt="Gamercoin" />
                </div>
                <div>
                    <p className="gamercoin-issue">
                        I redesigned the website for Gamer Coin, a platform where users can play their favorite games and earn coins as rewards. The focus of the redesign was to create a<span className="gamercoin-accent">modern engaging interface</span>, engaging interface that appeals to gamers while keeping the experience <span className="gamercoin-accent">simple</span> and <span className="gamercoin-accent">intuitive</span>. The layout highlights the platform’s core value—turning gameplay into real rewards—through bold visuals, clear navigation, and dynamic interactions. The updated design not only improves usability but also strengthens Gamer Coin’s identity as a fun, rewarding, and gamer-friendly platform.

                    </p>
                </div>
            </div>

            {/* Links */}
            <div className="gamercoin-refs">
                <p>Design Link:</p>
                <h5>





                    <a target='_blank' style={{ color: "white" }} href=" https://www.figma.com/design/IhOjlRoN4kqfIO3hpZhk8C/Gamercoin-%7C-UI-UX-Refresh--25?node-id=17-140&p=f&t=KCmMqfYCwCigQMm4-0"> https://www.figma.com/design/IhOjlRoN4kqfIO3hpZhk8C/Gamercoin-%7C-UI-UX-Refresh--25?node-id=17-140&p=f&t=KCmMqfYCwCigQMm4-0 </a>


                </h5>
            </div>
        </div>
    )
}

export default Gamercoin
