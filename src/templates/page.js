import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { ContainerSize } from '../utils/Styles'

const PageTitle = styled.h1`
  max-width: ${ContainerSize['container-size']};
  margin: 0 auto;
  padding: 0 1rem;
`

const PageContent = styled.div`
  max-width: ${ContainerSize['container-size']};
  margin: 1rem auto 1.45rem;
  padding: 0 1rem;

  h1 {
    font-weight: 700;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-bottom: 0.125rem;
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
    font-weight: 600;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  p + h2,
  p + h3,
  p + h4,
  ul + h2,
  ul + h3,
  ul + h4,
  code + h2,
  code + h3,
  code + h4 {
    margin-top: 1.625rem;
  }

  p + h4 {
    margin-top: 1.325rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.body};
    line-height: ${({ theme }) => theme.lineHeight.paragraph};
  }
  h1 + code,
  h2 + code,
  h3 + code,
  h4 + code {
    margin-top: 1rem;
  }

  h4 + ul {
    margin-top: 0.5rem;
  }

  ul {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  p + ul {
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
  }

  ul > li {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.small};
    position: relative;

    &:before {
      position: absolute;
      content: '—';
      display: block;
      padding: 0;
      top: -2px;
      left: -1.5rem;
    }
  }

  hr {
    display: block;
    max-width: 4rem;
    height: 1px;
    background: ${({ theme }) => theme.color.text};
    margin: 2rem auto;
  }

  p + hr {
    margin: 2rem auto 2rem;
  }

  strong {
    font-weight: 700;
  }
`

const Page = ({ data }) => {
  const templateSlug = data.wordpressPage.template
    .replace('.php', '')
    .replace('page-', '')

  const { wordpressPage } = data
  return (
    <Layout template={templateSlug}>
      <PageTitle className="page-title">
        {wordpressPage.title}
      </PageTitle>
      {wordpressPage.featured_media && (
        <Img
          className="page-image page__image"
          fluid={
            wordpressPage.featured_media.localFile.childImageSharp.fluid
          }
        />
      )}

      <PageContent
        dangerouslySetInnerHTML={{
          __html: wordpressPage.content,
        }}
      />
    </Layout>
  )
}

export default Page

Page.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object,
  }).isRequired,
}

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      id
      title
      template
      slug
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
