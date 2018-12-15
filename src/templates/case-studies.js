import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import CaseStudyPreview from '../components/CaseStudy/Preview/CaseStudyPreview'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data.allWordpressWpCaseStudies.edges)
    return (
      <Layout>
        <PageTitle title={data.wordpressPage.title} />
        <section className="section-case-studies">
          <Container>
            {data.allWordpressWpCaseStudies.edges.map(({ node }, i) => (
              <CaseStudyPreview
                title={node.title}
                key={i}
                slug={`case-studies/${node.slug}`}
                imgIdSlug={node.slug}
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
          </Container>
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
