import React from 'react'
import styled from 'styled-components'
import { MediaScreen, Color } from '../../utils/Styles'
import { fontSize } from '../../utils/Typography'

const Source = styled.div`
  font-size: ${fontSize.body};
  flex: 100%;
  text-align: center;
  margin: 0 0 1.5rem;
  & > a {
    color: ${Color.text};
  }

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin: 0 auto 0 1rem;
    flex: 0 1 auto;
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
