import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'

import '../../scss/01-modules/preview-posts.scss'

const BlogPreviewSection = styled.section`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 5rem;
  }
`

class BlogsPreview extends React.Component {
  render() {
    return (
      <BlogPreviewSection>
        <Container noPadding>
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
        </Container>
      </BlogPreviewSection>
    )
  }
}

export default BlogsPreview
