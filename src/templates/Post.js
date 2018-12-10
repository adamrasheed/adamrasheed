import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import PostSidebar from '../components/Blog/PostSidebar'
import Post from '../components/Blog/Post'
import PostTitle from '../components/Blog/PostTitle'
import PostMeta from '../components/Blog/PostPreviewMeta'

import { MediaScreen, ContainerSize } from '../utils/Styles'

const PostContainer = styled.main`
  max-width: ${ContainerSize['container-size']};
  margin: 0 auto;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
class PostPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PostContainer>
          <Post>
            <PostTitle
              dangerouslySetInnerHTML={{
                __html: data.wordpressPost.title,
              }}
            />
            <PostMeta date={data.wordpressPost.date} p1 />
            <div
              dangerouslySetInnerHTML={{
                __html: data.wordpressPost.content,
              }}
            />
          </Post>
          <PostSidebar />
        </PostContainer>
      </Layout>
    )
  }
}

export default PostPage

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
