import React from 'react'
import "./Ceo.css";
const Ceo = () => {
    return (
        <div className="ceo-wrap">
            {/* Overlay Logo */}
            <img className="ceo-overlay" src="\Subtitle.png" alt="Ceo Logo" />

            {/* Header */}
            <div className="ceo-header">
                <div className="ceo-marker">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="ceo-case">
                <div className="ceo-brand">
                    <img src="\Subtitle Container.png" alt="Ceo" />
                </div>
                <div>
                    <p className="ceo-issue">
                        I designed and developed a <span className="ceo-accent">personal portfolio</span> website for
                        <span className="ceo-accent"> Osama Bin Shiraz</span>, <span className="ceo-accent">the CEO</span> of OBS Technologia.
                        The portfolio highlights his professional journey, expertise, and leadership in the tech industry,
                        while also reflecting his vision for innovation and growth. The design focuses on a
                        <span className="ceo-accent"> clean</span>, <span className="ceo-accent"> modern</span>, and
                        <span className="ceo-accent"> aesthetic</span> approach, making his achievements, projects,
                        and milestones easy to explore. By combining strong visuals with clear storytelling, the portfolio
                        showcases Osama’s role as a CEO and positions him as a thought leader and innovator, giving him a
                        professional online presence that aligns with his stature.
                    </p>

                </div>
            </div>

            {/* Links */}
            <div className="ceo-refs">
                <p>Design Link:</p>
                <h5>
                    <a target='_blank' style={{ color: "white" }} href=" https://www.figma.com/proto/TxIVyxbbypxfijGHnQxf9I/osama-shiraz-personal-portfolio?node-id=1-156&t=9APmMMuOMxogjQGP-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"> https://www.figma.com/proto/TxIVyxbbypxfijGHnQxf9I/osama-shiraz-personal-portfolio?node-id=1-156&t=9APmMMuOMxogjQGP-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1</a>



                </h5>
            </div>
        </div>
    )
}


export default Ceo