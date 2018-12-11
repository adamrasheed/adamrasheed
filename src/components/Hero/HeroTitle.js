import styled from 'styled-components'
import { H1 } from '../../utils/Typography'
import { MediaScreen } from '../../utils/Styles'

const HeroTitle = styled(H1)`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  max-width: 620px;
  @media screen and (min-width: ${MediaScreen['screen-sm']}) {
    font-size: 2rem;
    line-height: 2.25rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    font-size: 3.5rem;
    line-height: 4rem;
    margin-bottom: 1rem;
    max-width: 640px;
  }

  @media screen and (min-width: ${MediaScreen['screen-xl']}) {
    font-size: 4rem;
    line-height: 1.125;
    margin-bottom: 1.5rem;
  }
`

export default HeroTitle
