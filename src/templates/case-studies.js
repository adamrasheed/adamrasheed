import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CaseStudyPreview from '../components/CaseStudy/CaseStudyPreview'
class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <h1 className="page-title">{data.wordpressPage.title}</h1>
        <section className="section-case-studies">
          <div className="container">
            {data.allWordpressWpCaseStudies.edges.map(({ node }, i) => (
              <CaseStudyPreview
                title={node.title}
                key={i}
                slug={`case-studies/${node.slug}`}
                tags={node.tags}
                subtitle={node.acf.subtitle}
                teaser={node.acf.teaser}
                image={
                  node.featured_media != null
                    ? node.featured_media.localFile.childImageSharp.fluid
                    : null
                }
              />
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export default FreelancePage

export const query = graphql`
  query CaseStudiesPage {
    wordpressPage(slug: { eq: "case-studies" }) {
      title
    }
    allWordpressWpCaseStudies {
      edges {
        node {
          title
          slug
          featured_media {
            alt_text
            localFile {
              childImageSharp {
                id
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          tags {
            name
          }
          acf {
            subtitle
            teaser
          }
        }
      }
    }
  }
`
