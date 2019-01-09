import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogsPreview from '../components/Blog/BlogsPreview'
import PageTitle from '../components/Global/PageTitle'

import AboutBody from '../components/About/AboutBody'
import AboutInfoCategory from '../components/About/AboutInfo'
import AboutImg from '../components/About/AboutImg'
import AboutContainer from '../components/About/AboutContainer'

import styled from 'styled-components'
import { H2, fontSize } from '../utils/Typography'
import { MediaScreen, animationValues } from '../utils/Styles'
import PreviewHeader from '../components/PreviewHeader'
import Container from '../components/Container'
import { Spring } from 'react-spring'

const AboutTitle = styled(H2)`
  margin-bottom: 9px !important;
  font-weight: 700;
  display: inline-block;
  br {
    display: contents;
  }
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    /* font-size: ${fontSize.large}; */
    line-height: 1.25 !important;
    font-weight: 700;
          br {
            display: block;
          }
  }
`

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle title={data.wordpressPage.title} />

        {data.wordpressPage.featured_media ? (
          <Spring
            config={{ delay: 250 }}
            from={animationValues.fadeIn.start}
            to={animationValues.fadeIn.end}
          >
            {props => (
              <AboutImg
                style={props}
                fluid={
                  data.wordpressPage.featured_media.localFile.childImageSharp
                    .fluid
                }
              />
            )}
          </Spring>
        ) : null}

        <Spring
          config={{ delay: 500 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <AboutContainer style={props}>
              <AboutBody>
                <AboutTitle
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfOptions.options.tagline,
                  }}
                />

                <div
                  className="about__bio"
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressPage.content,
                  }}
                />
              </AboutBody>

              <div style={{ flex: 1 }}>
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
          )}
        </Spring>

        <section className="preview blog-preview">
          <Container>
            <PreviewHeader title="Blog Articles" link="/blog" />
            <BlogsPreview posts={data.allWordpressPost.edges} />
          </Container>
        </section>
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
