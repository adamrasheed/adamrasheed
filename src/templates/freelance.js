import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/Blog/Post'

import Layout from '../components/layout'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

import { animationValues } from '../utils/Styles'
import { Spring } from 'react-spring'

class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle title={data.wordpressPage.title} />
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
                  __html: data.wordpressPage.content,
                }}
              />
            </Container>
          )}
        </Spring>
      </Layout>
    )
  }
}

export default FreelancePage

export const query = graphql`
  query FreelancePage {
    wordpressPage(slug: { eq: "freelance" }) {
      title
      content
    }
  }
`
