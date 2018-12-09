import React from 'react'
import Layout from '../components/layout'
import PostPreview from '../components/Blog/PostPreview'
import { PageTitle } from '../components/PageTitle'

class BlogsPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle>{data.wordpressPage.title}</PageTitle>
        <div className="container container--no-pad">
          <div className="posts">
            {data.allWordpressPost.edges.map(({ node }, i) => (
              <PostPreview
                key={i}
                title={node.title}
                link={`blog/${node.slug}`}
                excerpt={node.excerpt}
                date={node.date}
              />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogsPage

export const query = graphql`
  query PostsPage {
    wordpressPage(slug: { eq: "blog" }) {
      title
    }
    allWordpressPost {
      edges {
        node {
          title
          slug
          excerpt
          date(formatString: "MMMM DD, Y")
        }
      }
    }
  }
`
