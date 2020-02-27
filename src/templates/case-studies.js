import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import CaseStudyPreview from '../components/CaseStudy/Preview/CaseStudyPreview'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

const FreelancePage = ({ data: { wordpressPage, allWordpressWpCaseStudies } }) => (
  <Layout>
    <PageTitle title={wordpressPage.title} />
    <section className="section-case-studies">
      <Container>
        {allWordpressWpCaseStudies ?.edges ?.map(({ node }, i) => (
          <CaseStudyPreview
            title={node.title}
            key={i}
            slug={`/case-studies/${node.slug}`}
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

export default FreelancePage

FreelancePage.propTypes = {
  data: PropTypes.shape({
    allWordpressWpCaseStudies: PropTypes.object,
    wordpressPage: PropTypes.object,
  }).isRequired,
}

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
