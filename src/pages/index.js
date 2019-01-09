import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero/Hero'
import CaseStudyPreview from '../components/CaseStudy/Preview/CaseStudyPreview'
import BlogsPreview from '../components/Blog/BlogsPreview'
import Contact from '../components/Contact'
import Container from '../components/Container'
import PreviewHeader from '../components/PreviewHeader'
import { Spring } from 'react-spring'

import { font } from '../utils/Typography'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero
      tagline={data.wordpressAcfOptions.options.tagline}
      specialize={data.wordpressAcfOptions.options.specialization}
      career={data.wordpressAcfOptions.options.career}
      resume={data.wordpressAcfOptions.options.resume}
    />

    <Spring config={{ delay: 750 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <section
          style={{ marginBottom: '4rem', fontFamily: font.body, ...props }}
        >
          <Container>
            <PreviewHeader title="Case Studies" link="/case-studies" />
            {data.allWordpressWpCaseStudies.edges.map(({ node }, i) => (
              <CaseStudyPreview
                noAnimation={true}
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
          </Container>
        </section>
      )}
    </Spring>

    <section className="preview blog-preview">
      <Container>
        <PreviewHeader title="Blog Articles" link="/blog" />
        <BlogsPreview posts={data.allWordpressPost.edges} />
      </Container>
    </section>

    <Contact />
  </Layout>
)
export default IndexPage

export const query = graphql`
  query HeroQuery {
    wordpressAcfOptions {
      options {
        title
        tagline
        specialization
        career
        resume
      }
    }
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
