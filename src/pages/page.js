import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class Page extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Layout>
        <h1 className="page-title">{data.wordpressPage.title}</h1>
        <div dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content
        }}/>
      </Layout>
    )
  }
}

export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      id
      title
      slug
      content
    }
  }
`
