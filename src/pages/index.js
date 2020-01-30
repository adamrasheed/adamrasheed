import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Spring } from 'react-spring'

import HomeHero from 'src/components/Home/HomeHero'
import Layout from '../components/layout'
import CaseStudyPreview from '../components/CaseStudy/Preview/CaseStudyPreview'
import BlogsPreview from '../components/Blog/BlogsPreview'
import Contact from '../components/Contact'
import Container from '../components/Container'
import PreviewHeader from '../components/PreviewHeader'

import { font } from '../utils/Typography'

const IndexPage = ({
  data: {
    allWordpressWpCaseStudies,
    allWordpressPost,
  },
}) => (
  <Layout>
      <HomeHero />

      <Spring
        config={{ delay: 750 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <section
            style={{ marginBottom: '4rem', fontFamily: font.body, ...props }}
          >
            <Container>
              <PreviewHeader title="Case Studies" link="/case-studies" />
              {allWordpressWpCaseStudies ?.edges ?.map(({ node }) => (
                <CaseStudyPreview
                  noAnimation
                  title={node.title}
                  key={node.slug}
                  slug={`/case-studies/${node.slug}`}
                  tags={node.tags}
                  subtitle={node.acf.subtitle}
                  teaser={node.acf.teaser}
                  image={
                    // eslint-disable-next-line camelcase
                    node ?.featured_media ?.localFile.childImageSharp.fluid

                }
                />
              ))}
            </Container>
          </section>
        )}
      </Spring>

      {allWordpressPost ?.edges && (
        <section className="preview blog-preview">
          <Container>
            <PreviewHeader title="Blog Articles" link="/blog" />
            <BlogsPreview posts={allWordpressPost.edges} />
          </Container>
        </section>
      )}
      <Contact />
    </Layout>
)
export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.object,
    allWordpressWpCaseStudies: PropTypes.object,
  }).isRequired,
}

export const query = graphql`
  query HeroQuery {
    allWordpressWpCaseStudies(limit: 2) {
      edges {
        node {
          title
          slug
          wordpress_id
          modified
          content
          acf {
            subtitle
            teaser
          }
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
            wordpress_id
            name
          }
        }
      }
    }
    allWordpressPost(limit: 2) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, Y")
        }
      }
    }
  }
`
