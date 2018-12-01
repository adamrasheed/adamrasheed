import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
class FreelancePage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <h1 className="page-title">{data.wordpressPage.title}</h1>
        <div className="container container--no-pad">
          <article
            className="post post--freelance pt-0"
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.content,
            }}
          />
        </div>
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
