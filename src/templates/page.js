import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const Page = ({ data }) => {
  const templateSlug = data.wordpressPage.template
    .replace('.php', '')
    .replace('page-', '')

  const { wordpressPage } = data
  return (
    <Layout template={templateSlug}>
      <h1 className="page-title">{wordpressPage.title}</h1>
      {wordpressPage.featured_media ? (
        <Img
          className="page-image page__image"
          fluid={
              wordpressPage.featured_media.localFile.childImageSharp.fluid
            }
        />
      ) : null}

      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
        dangerouslySetInnerHTML={{
          __html: wordpressPage.content,
        }}
      />
    </Layout>
  )
}

export default Page

Page.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object,
  }).isRequired,
}

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      id
      title
      template
      slug
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
