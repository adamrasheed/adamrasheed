import styled from 'styled-components'
import { MediaScreen } from 'src/utils/Styles'

const HeroContainer = styled.div`
  padding: 1rem 0 2rem;
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    padding: 2rem 0;
    margin-top: 4vh;
    margin-bottom: 6vh;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    margin-top: 4vh;
    margin-bottom: 8vh;
  }
  @media screen and (min-width: ${MediaScreen['screen-xl']}) {
    margin-top: 4rem;
    margin-bottom: 8vh;
  }
`

export default HeroContainer
