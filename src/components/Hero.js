import React from 'react'
import { Link } from 'gatsby'

const Hero = () => (
    <div className="hero">
      <div className="container hero__container">
          <h1 className="hero__title">tagline</h1>
          <div className="hero__body">
              <p>specialize</p>
              <p>Currently working as a Front-end Developer at <a href="https://www.bvaccel.com/" target="_blank" rel="nofollow noopener">BVAccel</a>. Previously at <a href="https://www.blenderseyewear.com/" target="_blank" rel="nofollow noopener">Blenders</a>.</p>
              
              <p>
                  I'm also taking on select freelance projects. Wanna see if we’d be a good fit? Learn more
                  <span className="ib"><Link href="/about">about me</Link>.</span>
              </p>
          </div>
      </div>
    </div>
)

export default Hero