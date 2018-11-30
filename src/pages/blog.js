import React from 'react'
import Layout from '../components/layout'
import PostPreview from '../components/Blog/PostPreview'

class BlogsPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <h1 className="page-title">{data.wordpressPage.title}</h1>
        <div className="container container--no-pad">
          <div className="posts">
            {data.allWordpressPost.edges.map(({ node }) => (
              <PostPreview
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
