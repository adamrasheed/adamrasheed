import styled from 'styled-components'
import Container from 'src/components/Container'
import { MediaScreen, Spacer } from 'src/utils/Styles'

const AboutContainer = styled(Container)`
  display: grid;
  grid-gap: ${Spacer.gridGap};
  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    grid-template-columns: 3fr 2fr;
    margin-bottom: 4rem;
  }
`

export default AboutContainer
