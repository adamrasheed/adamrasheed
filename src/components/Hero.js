import React from 'react'
import { Link } from 'gatsby'

const Hero = ({tagline, specialize, career}) => (
    <div className="hero">
      <div className="container hero__container">
          <h1 className="hero__title">{ tagline }</h1>
          <div className="hero__body">
              <p>{ specialize }</p>
              <p>{ career }</p>
              
              <p>
                  I'm also taking on select freelance projects. Wanna see if we’d be a good fit? Learn more
                  <span className="ib"><Link to="/about">about me</Link>.</span>
              </p>
          </div>
      </div>
    </div>
)

export default Hero