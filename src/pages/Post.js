import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
class Post extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
				<main className="blog-posts">
					<article className="post">
							<h1 className="post__title">{ data.wordpressPost.title}</h1>
							<span className="meta post__meta">{data.wordpressPost.date}</span>
							<div
								dangerouslySetInnerHTML={{
									__html: data.wordpressPost.content
								}}/>
					</article>

					<aside className="sidebar">
							<h4 className="preview-title preview-title--extra-small sidebar__title">Other Posts</h4>
							<ul className="sidebar__posts">
											<li className="sidebar__post">
													<Link to={`/blog/${data.slug}`} className="sidebar__post-link">Other Post</Link>
											</li>
							</ul>
					</aside>
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
