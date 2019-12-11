import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaScreen, Spacer } from 'src/utils/Styles'
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
        {posts ?.map((post, i) => (
          post.node ? (
            <PreviewPost
              key={i}
              title={post.node.title}
              link={`/blog/${post.node.slug}`}
              date={post.node.date}
            />
          ) : <p key={i}>loading</p>)
        )}
      </PreviewPosts>
    </Container>
  </BlogPreviewSection>
)

export default BlogsPreview

export const PostType = PropTypes.shape({
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
})

BlogsPreview.propTypes = {
  posts: PropTypes.arrayOf(
    PostType,
  ).isRequired,
}
