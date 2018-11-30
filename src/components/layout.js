import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer'
import '../scss/main.scss'

const Layout = ({ children, template }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            social {
              account
              url
            }
          }
        }
        wordpressAcfOptions {
          options {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Adam Rasheed is a front-end develoepr based in San Diego, California. He specializes in cusotm Shopify theme development and custom WordPress theme development',
            },
            {
              name: 'keywords',
              content: 'front-end developer, shopify developer',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          jobTitle={data.wordpressAcfOptions.options.title}
        />
        <div className={`main${template ? ` main--${template}` : ``}`}>
          {children}
        </div>
        <Footer
          title={data.site.siteMetadata.title}
          social={data.site.siteMetadata.social}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
