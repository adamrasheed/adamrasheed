import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image';
import Hero from '../components/Hero'
import CaseStudyPreview from '../components/CaseStudy/CaseStudyPreview'
import BlogsPreview from '../components/Blog/BlogsPreview'
import Contact from '../components/Contact'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero
      tagline={data.allWordpressAcfOptions.edges[0].node.options.tagline}
      specialize={
        data.allWordpressAcfOptions.edges[0].node.options.specialization
      }
      career={data.allWordpressAcfOptions.edges[0].node.options.career}
    />
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
    <section className="preview blog-preview">
      <div className="container">
        <BlogsPreview posts={data.allWordpressPost.edges} />
      </div>
    </section>
    <Contact />
  </Layout>
)
export default IndexPage

export const query = graphql`
  query HeroQuery {
    allWordpressAcfOptions {
      edges {
        node {
          id
          options {
            title
            tagline
            specialization
            career
          }
        }
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
