import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image';
import Hero from '../components/Hero';
import CaseStudyPreview from '../components/CaseStudyPreview'
import { graphql } from 'gatsby';


const IndexPage = ({ data }) => (
  <Layout>
    <Hero
      tagline={data.allWordpressAcfOptions.edges[0].node.options.tagline}
      specialize={data.allWordpressAcfOptions.edges[0].node.options.specialization}
      career={data.allWordpressAcfOptions.edges[0].node.options.career} />

      {data.allWordpressWpCaseStudies.edges.map(({node})=>(
        <CaseStudyPreview
          key={node.wordpress_id}
          title={node.title}
          tags={node.tags}
          img={ node.featured_media ? ( node.featured_media.localFile.childImageSharp.fluid.src ) : ''}
        />
      ))}

    </Layout>
)
export default IndexPage

export const query = graphql`
 query {
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
    allWordpressWpCaseStudies {
      edges {
        node {
          title
          slug
          wordpress_id
          modified
          content
          featured_media {
            alt_text
            localFile {
              childImageSharp {
                id
                fluid(maxWidth: 1600) {
                  src
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
  }
`