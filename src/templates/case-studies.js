import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Spring } from 'react-spring'

import CaseStudyPreview from '../components/CaseStudy/Preview/CaseStudyPreview'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

import { animationValues } from '../utils/Styles'

class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle title={data.wordpressPage.title} />
        <section className="section-case-studies">
          <Container>
            {data.allWordpressWpCaseStudies.edges.map(({ node }, i) => (
              <Spring
                config={{ delay: i * 250 }}
                from={animationValues.fadeIn.start}
                to={animationValues.fadeIn.end}
              >
                {props => (
                  <CaseStudyPreview
                    style={props}
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
                )}
              </Spring>
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
