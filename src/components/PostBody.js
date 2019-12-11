import styled from 'styled-components'
import { fontSize, font, lineHeight } from 'src/utils/Typography'
import { Color } from 'src/utils/Styles'

const PostBody = styled.div`
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-bottom: 0.125rem;
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
    font-family: ${font.body};
    line-height: ${lineHeight.paragraph};
  }

  h1 + code,
  h2 + code,
  h3 + code,
  h4 + code,
  h1 + .highlighter-rouge,
  h2 + .highlighter-rouge,
  h3 + .highlighter-rouge,
  h4 + .highlighter-rouge {
    margin-top: 1rem;
  }

  h4 + ul {
    margin-top: 0.5rem;
  }

  .highlighter-rouge + h1,
  .highlighter-rouge + h2,
  .highlighter-rouge + h3,
  .highlighter-rouge + h4 {
    margin-top: 1.5rem;
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
`

export default PostBody
