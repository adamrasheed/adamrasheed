import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Head from './Head'
import Header from './Global/Header/Header'
import Footer from './Footer/Footer'

import '../scss/00-global/_reset.scss'
import '../scss/00-global/_global.scss'

const Layout = ({ children, template }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        wordpressSiteMetadata {
          name
          description
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
        <Head
          title={data.wordpressSiteMetadata.name}
          description={data.wordpressSiteMetadata.description}
          tagline={data.wordpressAcfOptions.options.tagline}
          photo={
            data.wordpressPage.featured_media.localFile.childImageSharp.fixed
              .src
          }
        />
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
