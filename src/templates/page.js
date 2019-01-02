import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class Page extends React.Component {
  render() {
    const { data } = this.props
    const templateSlug = data.wordpressPage.template
      .replace('.php', '')
      .replace('page-', '')
    return (
      <Layout template={templateSlug}>
        <h1 className="page-title">{data.wordpressPage.title}</h1>
        {data.wordpressPage.featured_media ? (
          <Img
            className="page-image page__image"
            fluid={
              data.wordpressPage.featured_media.localFile.childImageSharp.fluid
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
            __html: data.wordpressPage.content,
          }}
        />
      </Layout>
    )
  }
}

export default Page

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
