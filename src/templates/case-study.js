import React from 'react'
import { graphql } from 'gatsby'
import { Spring } from 'react-spring'

import Img from 'gatsby-image'
import Post from '../components/Blog/Post'
import Layout from '../components/layout'
import CaseStudyCta from '../components/CaseStudy/CaseStudyCta'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

import { animationValues } from '../utils/styles'
import '../scss/02-pages/_case-study.scss'

class CaseStudy extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <main className="case-study">
          <Post caseStudy>
            <PageTitle>{data.wordpressWpCaseStudies.title}</PageTitle>
            {data.wordpressWpCaseStudies.featured_media != null ? (
              <Img
                className="featured-img case-study__img"
                fluid={
                  data.wordpressWpCaseStudies.featured_media.localFile
                    .childImageSharp.fluid
                }
              />
            ) : null}

            {data.wordpressWpCaseStudies.acf.overview != null ? (
              <Spring
                config={{ delay: 250 }}
                from={animationValues.fadeIn.start}
                to={animationValues.fadeIn.end}
              >
                {styles => (
                  <Container small style={styles}>
                    <h2>Project Overview</h2>
                    <ul>
                      {data.wordpressWpCaseStudies.acf.overview.map(point => (
                        <li>{point.overview_point}</li>
                      ))}
                    </ul>
                  </Container>
                )}
              </Spring>
            ) : null}

            <Spring
              config={{ delay: 375 }}
              from={animationValues.fadeIn.start}
              to={animationValues.fadeIn.end}
            >
              {styles => (
                <Container
                  small
                  style={styles}
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressWpCaseStudies.content,
                  }}
                />
              )}
            </Spring>

            <CaseStudyCta />
          </Post>
        </main>
      </Layout>
    )
  }
}

export default CaseStudy

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    wordpressWpCaseStudies(slug: { eq: $slug }) {
      id
      title
      slug
      acf {
        subtitle
        teaser
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      content
    }
  }
`
