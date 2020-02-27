import React from 'react'
import styled from 'styled-components'

const Source = styled.div`
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.body};
  flex: 100%;
  text-align: center;
  align-self: center;
  & > a {
    color: ${({ theme }) => theme.color.text};
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen['screen-med']}) {
    flex: auto 0;
  }
`

const FooterSource = () => (
  <Source>
    <a
      href="https://github.com/adamrasheed/adamrasheed"
      target="_blank"
      rel="noopener noreferrer"
      className="small"
    >
      Source Code
    </a>
  </Source>
)

export default FooterSource
