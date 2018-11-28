import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        wordpressSiteMetadata {
          name
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
          meta={[
            { name: 'description', content: 'Adam Rasheed is a front-end develoepr based in San Diego, California. He specializes in cusotm Shopify theme development and custom WordPress theme development' },
            { name: 'keywords', content: 'front-end developer, shopify developer' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.wordpressSiteMetadata.name} jobTitle={data.wordpressAcfOptions.options.title}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
