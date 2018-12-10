import React from 'react'
import { Link } from 'gatsby'
// import styled from 'styled-components'

// const BlogPreview = styled.div``
class BlogsPreview extends React.Component {
  render() {
    return (
      <section className="preview blog-preview">
        <div className="container">
          <div className="preview-header">
            <h4 className="preview-title">Blog Articles</h4>
            <Link to="/blog" className="preview-more">
              More Articles
            </Link>
          </div>

          <div className="preview-content preview-posts">
            {this.props.posts.map(({ node }, i) => (
              <div className="preview-post" key={i}>
                <h2 className="preview-post__title">
                  <Link
                    to={`blog/${node.slug}`}
                    className="preview-post__link"
                    dangerouslySetInnerHTML={{
                      __html: node.title,
                    }}
                  />
                </h2>

                <div className="preview-post__meta">
                  <span className="preview-post__date">{node.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default BlogsPreview
