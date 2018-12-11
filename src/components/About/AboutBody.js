import styled from 'styled-components'
import { MediaScreen, Color } from '../../utils/Styles'
import { fontSize } from '../../utils/Typography'

const AboutBody = styled.div`
  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${Color.text};
    font-weight: 600;
    text-decoration: none;
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
    margin: 1.5rem 0 1.5rem;

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
  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    flex: 50% 1;
    max-width: 50%;
    h2 {
      line-height: 1.75rem;
      margin-bottom: 0.25rem;
    }
  }
`

export default AboutBody
