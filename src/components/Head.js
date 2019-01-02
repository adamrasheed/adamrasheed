import React from 'react'
import Helmet from 'react-helmet'

const fallbackMeta = {
  title: 'Adam Rasheed | San Diego Front-end Developer',
}

class Head extends React.Component {
  render() {
    const { title, description, photo } = this.props
    return (
      <Helmet>
        <html lang="en" />
        <title>{title ? title : fallbackMeta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            description
              ? description
              : 'Adam Rasheed is a front-end developer based in San Diego, California who specializes in custom Shopify theme development and custom WordPress theme development'
          }
        />

        <meta
          name="keywords"
          content="front-end developer, san diego react developer, San Diego Shopify developer"
        />

        <meta
          property="og:title"
          content={title ? title : fallbackMeta.title}
        />
        {/*<!-- Twitter -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        {description ? (
          <meta name="twitter:card" content={description} />
        ) : null}

        <meta
          name="twitter:title"
          content={
            title ? title : 'Adam Rasheed | San Diego Front-end Developer'
          }
        />
        <meta name="twitter:site" content="@arasheedphoto" />
        <meta name="twitter:creator" content="@arasheedphoto" />
        <meta
          name="twitter:description"
          content={
            description
              ? description
              : 'Adam Rasheed is a front-end developer based in San Diego, California who specializes in custom Shopify theme development and custom WordPress theme development'
          }
        />
        {photo ? <meta name="twitter:image:src" content={photo} /> : null}

        {/*<!-- Open Graph general (Facebook, Pinterest & Google+) -->*/}
        <meta name="og:title" content={title ? title : fallbackMeta.title} />
        {photo ? <meta name="og:image" content={photo} /> : null}

        <meta name="og:url" content="https://adamrasheed.com" />
        <meta name="og:site_name" content="Adam Rasheed" />
        <meta name="og:type" content="website" />
      </Helmet>
    )
  }
}

export default Head
