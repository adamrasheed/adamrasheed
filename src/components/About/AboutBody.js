import styled from 'styled-components'

const AboutBody = styled.div`
  font-family: ${({ theme }) => theme.font.body};
  margin-bottom: 2rem;

  p {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize.body};
    line-height: ${({ theme }) => theme.lineHeight.body};

    a {
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 40%;
        width: 120%;
        top: 60%;
        left: -5%;
        z-index: -1;
        background: ${({ theme }) => theme.color.accent};
        opacity: 0;
        clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        transition: all 0.15s ease-in-out;
      }
      &:focus,
      &:hover {
        text-decoration: none !important;
        &:after {
          color: white !important;
          opacity: 1;
        }
      }
    }
  }

  a {
    color: ${({ theme }) => theme.color.text};
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
    font-size: ${({ theme }) => theme.fontSize.small};
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
    background: ${({ theme }) => theme.color.text};
    margin: 2rem auto;
  }

  p + hr {
    margin: 2rem auto 2rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaScreen['screen-sm-med']}) {
    margin-bottom: 0;
    h2 {
      line-height: 1.75rem;
      margin-bottom: 0.25rem;
    }
  }
`

export default AboutBody
