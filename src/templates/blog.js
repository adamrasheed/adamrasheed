import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import PostPreview from '../components/Blog/PostPreview'
import PageTitle from '../components/Global/PageTitle'
import Container from '../components/Container'

import { MediaScreen } from '../utils/styles'
import { font, lineHeight } from '../utils/Typography'

const Posts = styled.div`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-top: -1rem;
  }

  p {
    font-family: ${font.body};
    line-height: ${lineHeight.paragraph};
  }
`

const BlogsPage = ({ data: { wordpressPage, allWordpressPost } }) => (
  <Layout>
    <PageTitle title={wordpressPage.title} />
    <Container noPadding>
      <Posts>
        {allWordpressPost.edges.map(({ node }, i) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            link={`blog/${node.slug}`}
            excerpt={node.excerpt}
            date={node.date}
            delay={i * 250}
          />
        ))}
      </Posts>
    </Container>
  </Layout>
)

export default BlogsPage

BlogsPage.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object,
    allWordpressPost: PropTypes.object,
  }).isRequired,
}

export const query = graphql`
  query PostsPage {
    wordpressPage(slug: { eq: "blog" }) {
      title
    }
    allWordpressPost(sort: { fields: [date], order: DESC }) {
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
