import styled from 'styled-components'
import { H1 } from '../../utils/Typography'
import { Color, MediaScreen } from '../../utils/Styles'

const HeroContainer = styled.div`
  padding: 1rem 0 2rem;
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    padding: 2rem 0;
    margin-top: 4vh;
    margin-bottom: 6vh;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    margin-top: 6vh;
    margin-bottom: 14vh;
  }
  @media screen and (min-width: ${MediaScreen['screen-xl']}) {
    margin-top: 5rem;
    margin-bottom: 9rem;
  }
`

export default HeroContainer
