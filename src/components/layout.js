import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer'

// import '../scss/main.scss'

const Layout = ({ children, template }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        wordpressSiteMetadata {
          name
        }
        wordpressAcfOptions {
          options {
            title
            tagline
            social_accounts {
              account
              url {
                url
              }
            }
          }
        }
        wordpressPage(slug: { eq: "about" }) {
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 1200) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.wordpressSiteMetadata.name}
          meta={[
            {
              name: 'description',
              content:
                'Adam Rasheed is a front-end developer based in San Diego, California who specializes in custom Shopify theme development and custom WordPress theme development',
            },
            {
              name: 'keywords',
              content: 'front-end developer, shopify developer',
            },
          ]}
        >
          <html lang="en" />
          <meta
            property="og:title"
            content="Adam Rasheed | San Diego Front-end Developer"
          />
          {/*<!-- Twitter -->*/}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:card"
            content={data.wordpressAcfOptions.options.tagline}
          />
          <meta
            name="twitter:title"
            content={data.wordpressSiteMetadata.name}
          />
          <meta name="twitter:site" content="@arasheedphoto" />
          <meta name="twitter:creator" content="@arasheedphoto" />
          <meta
            name="twitter:description"
            content={data.wordpressAcfOptions.options.tagline}
          />
          <meta
            name="twitter:image:src"
            content={
              data.wordpressPage.featured_media.localFile.childImageSharp.fixed
                .src
            }
          />
          {/*<!-- Open Graph general (Facebook, Pinterest & Google+) -->*/}
          <meta name="og:title" content="m" />
          <meta
            name="og:image"
            content={
              data.wordpressPage.featured_media.localFile.childImageSharp.fixed
                .src
            }
          />
          <meta name="og:url" content="https://adamrasheed.com" />
          <meta name="og:site_name" content="Adam Rasheed" />
          <meta name="og:type" content="website" />
        </Helmet>
        <Header
          siteTitle={data.wordpressSiteMetadata.name}
          jobTitle={data.wordpressAcfOptions.options.title}
        />
        <div className={`main${template ? ` main--${template}` : ``}`}>
          {children}
        </div>
        <Footer
          title={data.wordpressSiteMetadata.name}
          social={data.wordpressAcfOptions.options.social_accounts}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
