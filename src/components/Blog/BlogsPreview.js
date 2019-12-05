import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaScreen, Spacer } from 'src/utils/styles'
import Container from '../Container'
import PreviewPost from './PreviewPost'

const BlogPreviewSection = styled.section`
  margin-bottom: ${Spacer.small};
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: ${Spacer.medium};
  }
`

const PreviewPosts = styled.div`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const BlogsPreview = ({ posts }) => (
  <BlogPreviewSection>
    <Container noPadding>
      <PreviewPosts>
        {posts?.map(({ node }, i) => (
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

export default BlogsPreview

BlogsPreview.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.string,
  }))).isRequired,
}
