import React from 'react'
import Container from '../Container'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
import PreviewPost from './PreviewPost'

// import '../../scss/01-modules/preview-posts.scss'

const BlogPreviewSection = styled.section`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 5rem;
  }
`

const PreviewPosts = styled.div`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

class BlogsPreview extends React.Component {
  render() {
    return (
      <BlogPreviewSection>
        <Container noPadding>
          <PreviewPosts>
            {this.props.posts.map(({ node }, i) => (
              <PreviewPost
                key={i}
                title={node.title}
                link={`blog/${node.slug}`}
                date={node.date}
              />
            ))}
          </PreviewPosts>
        </Container>
      </BlogPreviewSection>
    )
  }
}

export default BlogsPreview
