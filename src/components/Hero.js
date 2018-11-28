import React from 'react'
import { Link } from 'gatsby'

const Hero = ({tagline, specialize, career}) => (
    <div className="hero">
      <div className="container hero__container">
          <h1 className="hero__title" dangerouslySetInnerHTML={{
            __html: tagline
          }} />
          <div className="hero__body">
              <p dangerouslySetInnerHTML={{
                  __html: specialize
              }} />
              <p dangerouslySetInnerHTML={{
                __html: career
                }}/>
              <p>
                  I'm also taking on select freelance projects. Wanna see if we’d be a good fit? Learn more
                  <span className="ib" style={{ marginLeft: '0.35rem'}}><Link to="/about">about me</Link>.</span>
              </p>
          </div>
      </div>
    </div>
)

export default Hero