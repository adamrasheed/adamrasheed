import styled from 'styled-components'
import { MediaScreen } from '../../utils/styles'
import Container from '../Container'

const AboutContainer = styled(Container)`
  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 4rem;
  }
`

export default AboutContainer
