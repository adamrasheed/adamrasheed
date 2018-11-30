import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostSidebar from '../components/Blog/PostSidebar'
class Post extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <main className="blog-posts">
          <article className="post">
            <h1
              className="post__title"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPost.title,
              }}
            />
            <span className="meta post__meta">{data.wordpressPost.date}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: data.wordpressPost.content,
              }}
            />
          </article>
          <PostSidebar />
        </main>
      </Layout>
    )
  }
}

export default Post

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      slug
      content
    }
  }
`
