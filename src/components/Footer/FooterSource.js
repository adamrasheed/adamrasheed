import React from 'react'
import styled from 'styled-components'
import { MediaScreen, Color } from 'src/utils/Styles'
import { fontSize, font } from 'src/utils/Typography'

const Source = styled.div`
  font-family: ${font.body};
  font-size: ${fontSize.body};
  flex: 100%;
  text-align: center;
  align-self: center;
  & > a {
    color: ${Color.text};
  }

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
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
