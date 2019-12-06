import React from 'react'
import PropTypes from 'prop-types'
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

const CaseStudy = ({ data: { wordpressWpCaseStudies } }) => (
  <Layout>
    <main className="case-study">
      <Post caseStudy>
        <PageTitle>{wordpressWpCaseStudies.title}</PageTitle>
        {wordpressWpCaseStudies.featured_media && (
          <Img
            className="featured-img case-study__img"
            fluid={
                  wordpressWpCaseStudies.featured_media.localFile
                    .childImageSharp.fluid
                }
          />
        )}

        {wordpressWpCaseStudies?.acf?.overview && (
          <Spring
            config={{ delay: 250 }}
            from={animationValues.fadeIn.start}
            to={animationValues.fadeIn.end}
          >
            {styles => (
              <Container small style={styles}>
                <h2>Project Overview</h2>
                <ul>
                  {wordpressWpCaseStudies.acf.overview.map(point => (
                    <li>{point.overview_point}</li>
                  ))}
                </ul>
              </Container>
            )}
          </Spring>
        )}

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
                __html: wordpressWpCaseStudies.content,
              }}
            />
          )}
        </Spring>

        <CaseStudyCta />
      </Post>
    </main>
  </Layout>
)

export default CaseStudy

CaseStudy.propTypes = {
  data: PropTypes.shape({
    wordpressWpCaseStudies: PropTypes.object,
  }).isRequired,
}

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
