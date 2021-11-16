import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Spring } from 'react-spring'
import Post from '../components/Blog/Post'

import Layout from '../components/layout'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

import { theme } from '../utils/Styles'

const FreelancePage = ({
  data: { wordpressPage },
}) => (
    <Layout>
      <PageTitle title={wordpressPage.title} />
      <Spring
        config={{ delay: 250 }}
        from={theme.animationValues.fadeIn.start}
        to={theme.animationValues.fadeIn.end}
      >
        {() => (
          <Container accent>
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
