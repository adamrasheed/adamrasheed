import React from 'react'
import styled from 'styled-components'
import { H3 } from 'src/components/Global/Typography'

const Cta = styled.div`
  max-width: ${({ theme }) => theme.containerSize['container-size-small']};
    margin: 2rem auto 4rem;
    text-align: center;
    background: ${({ theme }) => theme.color.backgroundLight};
    padding: 1.5rem 1.5rem 1.75rem;

    a {
      margin: 1rem auto 0;
    }
`

const Btn = styled.a`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${props => (props.primary ? '600' : '500')};
  letter-spacing: 0.05em;
  line-height: 1;
  font-variant-caps: all-small-caps;
  background: ${props => (props.primary ? 'linear-gradient(10deg, #1fa2ff, #a6fff3)' : 'none')};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  padding: 0.5rem 1rem 0.6rem;
  text-align: center;
  display: block;
  max-width: 10rem;
  transition: ${({ theme }) => theme.transition.short};

  &:hover,
  &:focus {
    background: ${props => (props.primary ? 'linear-gradient(10deg, #3fb0fc, #b2fdf2)' : 'none')};
  }
`

const CaseStudyCta = () => {
  const message = `Looking for a Front-end Developer to create something rad like this?
  Let’s Talk.`
  const cta = `Email Me`
  return (
    <Cta>
      <H3>
        {message}
      </H3>
      <Btn
        primary
        href="mailto:adamrasheed91@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {cta}
      </Btn>
    </Cta>
  )
}

export default CaseStudyCta
