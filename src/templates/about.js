import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import BlogsPreview from '../components/Blog/BlogsPreview'
import { PageTitle } from '../components/PageTitle'

import AboutBody from '../components/About/AboutBody'
import AboutInfoCategory from '../components/About/AboutInfo'
import AboutImg from '../components/About/AboutImg'
import AboutContainer from '../components/About/AboutContainer'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle>{data.wordpressPage.title}</PageTitle>
        {data.wordpressPage.featured_media ? (
          <AboutImg
            fluid={
              data.wordpressPage.featured_media.localFile.childImageSharp.fluid
            }
          />
        ) : null}
        <AboutContainer>
          <AboutBody>
            <h2
              className="about__title"
              dangerouslySetInnerHTML={{
                __html: data.wordpressAcfOptions.options.tagline,
              }}
            />
            <div
              className="about__bio"
              dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
            />
          </AboutBody>

          <div
            style={{
              paddingLeft: '1rem',
              flex: 1,
            }}
          >
            <AboutInfoCategory
              title="Talks"
              content={data.wordpressPage.acf.talks}
            />
            <AboutInfoCategory
              title="Education"
              content={data.wordpressPage.acf.education}
            />
          </div>
        </AboutContainer>
        <BlogsPreview posts={data.allWordpressPost.edges} />
      </Layout>
    )
  }
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    wordpressAcfOptions {
      options {
        tagline
      }
    }
    allWordpressPost(limit: 2) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, Y")
          content
        }
      }
    }
    wordpressPage(slug: { eq: "about" }) {
      id
      title
      template
      slug
      content
      acf {
        talks {
          title
          url
          description
        }
        education {
          title
          url
          description
        }
      }
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
