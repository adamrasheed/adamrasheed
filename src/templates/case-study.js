import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import CaseStudyCta from '../components/CaseStudy/CaseStudyCta'

class CaseStudy extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <main className="case-study">
          <article className="case-study__content">
            <h1 className="page-title">{data.wordpressWpCaseStudies.title}</h1>
            {data.wordpressWpCaseStudies.featured_media != null ? (
              <Img
                className="featured-img case-study__img"
                fluid={
                  data.wordpressWpCaseStudies.featured_media.localFile
                    .childImageSharp.fluid
                }
              />
            ) : null}

            {data.wordpressWpCaseStudies.acf.overview != null ? (
              <div className="container container--small">
                <h2>Project Overview</h2>
                <ul>
                  {data.wordpressWpCaseStudies.acf.overview.map(point => (
                    <li>{point.overview_point}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div
              className="container container--smal"
              dangerouslySetInnerHTML={{
                __html: data.wordpressWpCaseStudies.content,
              }}
            />
            <CaseStudyCta />
          </article>
        </main>
      </Layout>
    )
  }
}

export default CaseStudy

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    wordpressWpCaseStudies(slug: { eq: $slug }) {
      id
      title
      slug
      acf {
        overview {
          overview_point
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      content
    }
  }
`
