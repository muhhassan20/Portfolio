import React from 'react'
import "./back.css";

const back = () => {
    return (
        <div className="back-container">
            <img  className='bg-img'
            src="\greenlogo.png" alt="" />
            <div className="main-content">
                {/* Header Section */}
                <div className="header-section">
                    <h2 className="work-back-label">Some Projects In Depth</h2>
                    <p className="back-title">
                        A closer look at selected projects, showcasing the process, challenges, and impact of each design solution.
                    </p>
                </div>
                <div className="background-text-right">
                    <img src="\repository section guider.png" alt="decorative" />
                </div>
            </div>

            {/* Lucky Backyards Project */}
            <div className="milestone-section">
                <div className="milestone-content">
                    <div className="milestone-border">
                        <div className="milestone-header">
                            <div className="project-logo">
                                <img src="\logo.23dd9f6f.svg" alt="Lucky Backyards" />
                          
                            </div>
                        </div>
                        <p className="milestone-description">
                            The previous website struggled with <strong>poor user engagement</strong> and <strong>low retention time</strong>. It lacked visual appeal, clear <br />
                            messaging, and intuitive navigation, resulting in minimal customer inquiries and zero direct orders through the <br />
                            platform. The <strong>outdated design</strong> failed to reflect the quality and value of the services offered, creating a gap between <br />
                            digital presence and actual business potential.
                        </p>
                    </div>
                </div>
            </div>

            {/* What we did section */}
            <div className="what-we-did-section">
                <h2 className="what-we-did-title">What we did ?</h2>
                <p className="what-we-did-description">
                    We redesigned the Lucky Backyards website to <span className="highlight">better reflect the quality</span> of their services. By <span className="highlight">enhancing visuals and layout</span>, we made it easier to showcase their outdoor projects. Navigation was <span className="highlight">simplified</span> to guide users smoothly through services and portfolios. We also streamlined the quote request process to <span className="highlight">improve user interaction</span>. The overall experience is now more engaging, intuitive, and conversion-focused.
                </p>
            </div>

            <div className="second-section">
                <div className="background-text-left">
                    <p >
                        Design Link:
                    </p>
                    <h5><u>https://www.figma.com/design/0QGPTst9K0ZSLFTmK8JHjU/Luckybackyards-Sellspage?node-id=0-1&p=f&t=brEyoZ1arDs5c29-0</u></h5>
                    <br />
                    <p>
                        Website Link:
                    </p>
                    <h5><u>https://www.luckybackyards.com/</u></h5> 
                        
                    
                </div>
                
            </div>
           
        </div>
    );
};

export default back
