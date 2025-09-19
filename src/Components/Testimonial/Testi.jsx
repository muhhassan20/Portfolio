import "./Testi.css"
import React from "react"

const Testi = () => {
  return (
    <div className="testi-container">
      <div className="testi-about">
        <h3>Testimonials</h3>
        <img src="\repository section guider.png" alt="" />
      </div>
      <div className="paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="card-header">
            <img
              src="\Ellipse 21.png"
              alt="Nancy Martar"
              className="profile-img"
            />
            <div className="card-info">
              <h4>Nancy Martar</h4>
              <img
                src="\Frame 11.png"
                alt="5 stars"
                className="rating-stars"
              />
            </div>
          </div>
          <p className="testimonial-text">
            Alina is a creative genius. She's dynamic, proactive, and motivated to help her clients. Her work on
            eChoice's broker portal platform has allowed us to take eChoice to the next level. Alina understood a very
            complex brief and brought our ideas to life. I look forward to working with Alina again in the near future.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <img
              src="\Frame 323.png"
              alt="Fawn Rolands"
              className="profile-img"
            />
            <div className="card-info">
              <h4>Fawn Rolands</h4>
              <img
                src="\Frame 11.png"
                className="rating-stars"
              />
            </div>
          </div>
          <p className="testimonial-text">
            I've worked with Alina on a couple of projects now and really value her skills and abilities. She is
            confident and capable, offering exceptional product design work. She is quick in turning things around and
            very easy to collaborate with, which makes working with her seamless.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <img
              src="\2 (2).png"
              alt="Paul Bennett"
              className="profile-img"
            />
            <div className="card-info">
              <h4>Paul Bennett</h4>
              <img
                src="\4s.png"
                alt="4 stars"
                className="rating-stars"
              />
            </div>
          </div>
          <p className="testimonial-text">
            Alina has been a pleasure to work with. Her attention to detail, UX design, and design aesthetic have helped
            us push the limits on various mobile apps we have designed.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <img
              src="\1.png"
              alt="Adam Dong"
              className="profile-img"
            />
            <div className="card-info">
              <h4>Adam Dong</h4>
              <img
                src="\Frame 11.png"
                alt="5 stars"
                className="rating-stars"
              />
            </div>
          </div>
          <p className="testimonial-text">
            Alina is extremely good at what she does and creates beautiful, slick designs. I would recommend her to
            anyone who is looking for a new website or a UI refresh.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testi
