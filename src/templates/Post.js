import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import PostSidebar from '../components/Blog/PostSidebar'
import Post from '../components/Blog/Post'
import PostTitle from '../components/Blog/PostTitle'
import PostMeta from '../components/Blog/PostPreviewMeta'
import PostBody from '../components/PostBody'

import { MediaScreen, ContainerSize } from '../utils/Styles'
import PostCta from '../components/Blog/PostCta'

const PostContainer = styled.main`
  display: grid;
  grid-gap: 2rem;
  max-width: ${ContainerSize['container-size']};
  margin: 0 auto;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    grid-template-columns: 1fr auto;
    padding: 0 1rem;
  }
`
const PostPage = ({ data }) => {
  const { wordpressPost, allWordpressPost } = data
  return (
    <Layout>
      <PostContainer>
        <Post blog>
          <PostTitle
            dangerouslySetInnerHTML={{ __html: wordpressPost.title }}
          />
          <PostMeta
            date={wordpressPost.date}
            style={{ display: 'block', paddingBottom: '1rem' }}
          />
          <PostBody
            style={{ paddingTop: '1rem' }}
            dangerouslySetInnerHTML={{ __html: wordpressPost.content }}
          />
          <PostCta
            title={
                wordpressPost.acf.cta_title
                  ? wordpressPost.acf.cta_title
                  : null
              }
            subtitle={
                wordpressPost.acf.cta_description
                  ? wordpressPost.acf.cta_description
                  : null
              }
            formId={
                wordpressPost.acf.convertkit_form_id
                  ? wordpressPost.acf.convertkit_form_id
                  : null
              }
          />
        </Post>
        <PostSidebar
          otherPosts={allWordpressPost.edges}
          tags={wordpressPost.tags}
        />
      </PostContainer>
    </Layout>
  )
}

export default PostPage

PostPage.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.shape,
    allWordpressPost: PropTypes.shape(PropTypes.shape({
      edges: PropTypes.array,
    })),
  }).isRequired,
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      slug
      content
      acf {
        cta_title
        cta_description
        convertkit_form_id
      }
      tags {
        name
        id
      }
    }
    allWordpressPost(filter: { slug: { ne: $slug } }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
