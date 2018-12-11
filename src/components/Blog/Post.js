import styled from 'styled-components'
import { MediaScreen, Color } from '../../utils/Styles'
import { fontSize, font, lineHeight } from '../../utils/Typography'

const Post = styled.article`
  margin-bottom: 1rem;
  padding: 0;
  padding: ${props =>
    props.freelance || props.caseStudy ? `0` : `0 1rem 1rem`};
  max-width: ${props =>
    props.freelance || props.caseStudy ? `unset` : `32rem`};
  font-family: ${font.body};
  line-height: ${lineHeight.body};

  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-bottom: 0.125rem;
  }

  a {
    color: ${Color.text};
    text-decoration: none;
    font-weight: 600;
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
    font-size: ${fontSize.body};
    line-height: ${lineHeight.paragraph};
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
    font-size: ${fontSize.small};
    position: relative;
    line-height: ${props => (props.freelance ? '1.25rem' : 'inherit')};
    margin: ${props => (props.freelance ? '1rem 0' : '1.5rem 0')};

    &:last-of-type {
      margin: ${props => (props.freelance ? '1rem 0 2rem' : '1.5rem 0')};
    }

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
    background: ${Color.text};
    margin: 2rem auto;
  }

  p + hr {
    margin: 2rem auto 2rem;
  }

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    /* padding: 1rem; */
  }
  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    padding: ${props => (props.blog ? '2rem 0' : '0')};
  }
`

export default Post
