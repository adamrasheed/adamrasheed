import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Spring } from 'react-spring'
import Post from '../components/Blog/Post'

import Layout from '../components/layout'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

import { animationValues } from '../utils/styles'

const FreelancePage = ({ data: { wordpressPage } }) => (
  <Layout>
    <PageTitle title={wordpressPage.title} />
    <Spring
      config={{ delay: 250 }}
      from={animationValues.fadeIn.start}
      to={animationValues.fadeIn.end}
    >
      {props => (
        <Container accent style={props}>
          <Post
            freelance
            dangerouslySetInnerHTML={{
              __html: wordpressPage.content,
            }}
          />
        </Container>
      )}
    </Spring>
  </Layout>
)

export default FreelancePage

FreelancePage.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object,
  }).isRequired,
}

export const query = graphql`
  query FreelancePage {
    wordpressPage(slug: { eq: "freelance" }) {
      title
      content
    }
  }
`
