import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Spring } from 'react-spring'
import { updateInternalLinks } from 'src/utils/helpers'
import Layout from '../components/layout'
import BlogsPreview from '../components/Blog/BlogsPreview'
import PageTitle from '../components/Global/PageTitle'

import AboutBody from '../components/About/AboutBody'
import AboutInfoCategory from '../components/About/AboutInfo'
import AboutImg from '../components/About/AboutImg'
import AboutContainer from '../components/About/AboutContainer'

import { H2 } from '../utils/Typography'
import { MediaScreen, animationValues } from '../utils/Styles'
import PreviewHeader from '../components/PreviewHeader'
import Container from '../components/Container'

const AboutTitle = styled(H2)`
  margin-bottom: 9px !important;
  font-weight: 700;
  display: inline-block;
  br {
    display: contents;
  }
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    line-height: 1.25 !important;
    font-weight: 700;
          br {
            display: block;
          }
  }
`

const AboutPage = ({ data }) => {
  const { wordpressPage, allWordpressPost, wordpressAcfOptions } = data

  console.log(updateInternalLinks(wordpressPage.content))


  return (
    <Layout>
      <PageTitle title={wordpressPage.title} />

      {wordpressPage.featured_media ? (
        <Spring
          config={{ delay: 250 }}
          from={animationValues.fadeIn.start}
          to={animationValues.fadeIn.end}
        >
          {props => (
            <AboutImg
              style={props}
              fluid={
                  wordpressPage.featured_media.localFile.childImageSharp
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
                  __html: wordpressAcfOptions.options.tagline,
                }}
              />

              <div
                className="about__bio"
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.content,
                }}
              />
            </AboutBody>

            <div style={{ flex: 1 }}>
              <AboutInfoCategory
                title="Talks"
                content={wordpressPage.acf.talks}
              />
              <AboutInfoCategory
                title="Education"
                content={wordpressPage.acf.education}
              />
            </div>
          </AboutContainer>
        )}
      </Spring>

      <section className="preview blog-preview">
        <Container>
          <PreviewHeader title="Blog Articles" link="/blog" />
          <BlogsPreview posts={allWordpressPost.edges} />
        </Container>
      </section>
    </Layout>
  )
}

export default AboutPage

AboutPage.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object,
    allWordpressPost: PropTypes.object,
    wordpressAcfOptions: PropTypes.object,
  }).isRequired,
}

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
