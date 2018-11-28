import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = ({ data }) => (
  <Layout>
    <h1 className="page-title">About</h1>
    <img src="" alt="" />
    <div className="container about__container">
      <div className="about__body">
        <h2 className="about__title">{ data.site.siteMetadata.tagLine }</h2>
        <div className="about__bio">
          <p>
            Adam Rasheed is a San-Diego based front-end developer who creates
            well-designed websites and e-commerce stores. A data nerd at heart,
            Adam majored in Economics at Cal State San Bernardino, and has used
            his data-analysis powers mainly for good. Like many of his
            generation, he was drawn to coding and design originally as an
            angsty teen trying to make his MySpace page look cool–but not too
            cool.
          </p>

          <p>
            Since those days he has been pretty busy both in-house and as a
            freelancer, and with his YouTube channel where he teaches people how
            to use Sketch. He has a variety of experience such as creating
            custom Wordpress themes, UI design, and speaks fluent HTML, CSS,
            Javascript, PHP, and Liquid. (note from editor: one could also add
            sarcasm to that list)
          </p>

          <p>
            Adam’s loves to tackle a challenge head-on by analyzing it and
            coming up with a plan to solve the needs of his clients that makes
            sense for their big-picture goals. Most recently, he's working as a
            Lead Shopify Developer at Blenders Eyewear in sunny San Diego. He’s
            also taking on select freelance projects. Does your product team
            need a hand bringing your designs to life? Learn how he can help{' '}
            <Link to="/freelance">here</Link>.
          </p>

          <p className="small about-credit">
            Words by{' '}
            <a
              href="https://www.linkedin.com/in/justcallmealyson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alyson Ben-Yehuda
            </a>
          </p>
        </div>
      </div>

      <div className="about__links">
        <div className="link-category">
          <h4 className="preview-title preview-title--small link-category__title">
            Talks
          </h4>
          <div className="about-link">
            <h5 className="about-link__title">
              <a
                href="talkUrl"
                className="about-link__url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk Title
              </a>
            </h5>
            <p className="about-link__desc"> TAlk Description</p>
          </div>
        </div>
        <div className="link-category">
          <h4 className="preview-title preview-title--small link-category__title">
            Education
          </h4>
          <div className="about-link">
            <h5 className="about-link__title">
              <a
                href="eductaionUrl"
                className="about-link__url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Education Title
              </a>
            </h5>
            <p className="about-link__desc">Education Description</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const get = graphql`
  query SiteTagline {
    site {
      siteMetadata {
        tagLine
      }
    }
  }
`
