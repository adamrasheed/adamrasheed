import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const fallbackMeta = {
  title: 'Adam Rasheed | San Diego Front-end Developer',
  description: `Adam Rasheed is a front-end developer who specializes in custom Shopify theme development and custom WordPress theme development, and GatsbyJS Development`,
}

const Head = ({ title, description, photo }) => (
  <Helmet>
    <html lang="en" />
    <title>{title || fallbackMeta.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content={
            description || 'Adam Rasheed is a front-end developer based in San Diego, California who specializes in custom Shopify theme development and custom WordPress theme development'
          }
    />

    <meta
      name="keywords"
      content="front-end developer, san diego react developer, San Diego Shopify developer"
    />

    <meta
      property="og:title"
      content={title || fallbackMeta.title}
    />
    {/* <!-- Twitter --> */}
    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content={
            title || 'Adam Rasheed | San Diego Front-end Developer'
          }
    />
    <meta name="twitter:site" content="@arasheedphoto" />
    <meta name="twitter:creator" content="@arasheedphoto" />
    <meta
      name="twitter:description"
      content={description || ''}
    />
    {photo ? <meta name="twitter:image:src" content={photo} /> : null}

    {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
    <meta name="og:title" content={title || fallbackMeta.title} />
    {photo ? <meta name="og:image" content={photo} /> : null}
    <meta
      name="og:description"
      content={description || fallbackMeta.description}
    />
    <meta name="og:url" content="https://adamrasheed.com" />
    <meta name="og:site_name" content="Adam Rasheed" />
    <meta name="og:type" content="website" />
  </Helmet>
)

export default Head

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}
