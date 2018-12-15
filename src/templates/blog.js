import React from 'react'
import Layout from '../components/layout'
import PostPreview from '../components/Blog/PostPreview'
import PageTitle from '../components/Global/PageTitle'
import styled from 'styled-components'
import Container from '../components/Container'

import { MediaScreen } from '../utils/Styles'
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

class BlogsPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PageTitle title={data.wordpressPage.title} />
        <Container noPadding>
          <Posts>
            {data.allWordpressPost.edges.map(({ node }, i) => (
              <PostPreview
                key={i}
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
  }
}

export default BlogsPage

export const query = graphql`
  query PostsPage {
    wordpressPage(slug: { eq: "blog" }) {
      title
    }
    allWordpressPost {
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
