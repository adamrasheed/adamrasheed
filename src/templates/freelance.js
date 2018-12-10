import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { PageTitle } from '../components/PageTitle'
import Container from '../components/Container'
class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle>{data.wordpressPage.title}</PageTitle>
        <Container>
          <article
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
