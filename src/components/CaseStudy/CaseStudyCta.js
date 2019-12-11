import React from 'react'
import styled from 'styled-components'

import { Color, transition } from 'src/utils/Styles'
import { fontSize } from 'src/utils/Typography'

const Btn = styled.a`
  font-size: ${fontSize.small};
  font-weight: ${props => (props.primary ? '600' : '500')};
  letter-spacing: 0.05em;
  line-height: 1;
  font-variant-caps: all-small-caps;
  background: ${props => (props.primary ? 'linear-gradient(10deg, #1fa2ff, #a6fff3)' : 'none')};
  color: ${Color.text};
  text-decoration: none;
  padding: 0.5rem 1rem 0.6rem;
  text-align: center;
  display: block;
  max-width: 10rem;
  transition: ${transition.short};

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
    <div className="case-study__cta">
      <h3 className="case-study__title">
        {message}
      </h3>
      <Btn
        primary
        href="mailto:adamrasheed91@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: '1.5rem auto 0',
        }}
      >
        {cta}
      </Btn>
    </div>
  )
}

export default CaseStudyCta
