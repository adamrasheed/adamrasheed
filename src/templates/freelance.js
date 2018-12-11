import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'
import Post from '../components/Blog/Post'

class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle>{data.wordpressPage.title}</PageTitle>
        <Container>
          <Post
            freelance
            className="post post--freelance"
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.content,
            }}
          />
        </Container>
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
