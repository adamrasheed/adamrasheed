import Img from 'gatsby-image'
import styled from 'styled-components'
import { MediaScreen, ContainerSize } from '../../utils/Styles'

const AboutImg = styled(Img)`
  margin: 0 auto 13px;
  max-width: ${ContainerSize['container-size']};
  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    margin-bottom: 2rem;
  }
`

export default AboutImg
