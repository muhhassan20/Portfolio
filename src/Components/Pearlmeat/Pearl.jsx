import React from 'react'
import "./Pearl.css";

const Pearl = () => {
    return (
        <div className="container">
            <img className="bg" src="\logo 3.png" alt="" />

            {/* Header */}
            <div className="header">
                <div className="decor-right">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Project */}
            <div className="project">

                <div className="logo">
                    <img src="\logo 2.png" alt="Lucky Backyards" />
                    <h3 className='heading'>Pearl Meat</h3>
                </div>
                <div>
                    <p className="problem">
                        TPearl Meat is a premium meat supplier in Pakistan offering fresh and frozen cuts of goat,<br /> beef, poultry, lamb, and other meat products. Their website emphasizes hygiene, quality <br /> compliance, and customer trust, showcasing product categories like “Lamb Leg,”<br /> “Undercut Steak,” and “Drumsticks” with rich imagery and clear product displays.
                    </p>
                </div>



            </div>

            {/* What we did */}
            <div className="did">
                <h2 className="did-title">What we did ?</h2>
                <p className="did-text">
                    In designing & developing the site, the goal was to create a clean, <span className='red'>visually appetizing</span>  layout that reinforces their brand of  quality. This included intuitive navigation (Products / Why Pearl Meat / About Us / Contact), product highlight sections,and trust elements (“Temperature control vehicles,” “Medically checked,” “Quality compliance”) that build credibility. The  design balances premium feel with  <span className='red'>user-friendliness</span>  , ensuring potential customers can easily see what makes Pearl  Meat stand out.
                </p>
            </div>

            {/* Links */}
            <div className="links">
                <p>Website Link:</p>
                <h5>
                    <a href='https://ww.pearlmeat.com' style={{color:'white'}}>
                        https://www.pearlmeat.com/</a>
                </h5>
            </div>
        </div>
    )
}

export default Pearl
