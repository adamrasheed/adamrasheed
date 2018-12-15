import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Post from '../components/Blog/Post'
import Layout from '../components/layout'
import CaseStudyCta from '../components/CaseStudy/CaseStudyCta'
import Overdrive from 'react-overdrive'
import PageTitle from '../components/Global/PageTitle'

import '../scss/02-pages/_case-study.scss'
import Container from '../components/Container'

class CaseStudy extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <main className="case-study">
          <Post caseStudy>
            <PageTitle>{data.wordpressWpCaseStudies.title}</PageTitle>
            {data.wordpressWpCaseStudies.featured_media != null ? (
              <Overdrive to={data.wordpressWpCaseStudies.slug}>
                <Img
                  className="featured-img case-study__img"
                  fluid={
                    data.wordpressWpCaseStudies.featured_media.localFile
                      .childImageSharp.fluid
                  }
                />
              </Overdrive>
            ) : null}

            {data.wordpressWpCaseStudies.acf.overview != null ? (
              <Container small>
                <h2>Project Overview</h2>
                <ul>
                  {data.wordpressWpCaseStudies.acf.overview.map(point => (
                    <li>{point.overview_point}</li>
                  ))}
                </ul>
              </Container>
            ) : null}

            <Container
              small
              dangerouslySetInnerHTML={{
                __html: data.wordpressWpCaseStudies.content,
              }}
            />
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
