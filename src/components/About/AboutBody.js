import React from 'react'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'

const AboutBody = styled.div`
  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    flex: 50% 1;
    max-width: 50%;
  }
`

export default AboutBody
