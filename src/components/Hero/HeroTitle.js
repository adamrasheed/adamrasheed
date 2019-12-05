import styled from 'styled-components'
import { H1 } from '../../utils/Typography'
import { MediaScreen } from '../../utils/styles'

const HeroTitle = styled(H1)`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  max-width: 620px;
  @media screen and (min-width: ${MediaScreen['screen-sm']}) {
    font-size: 1.625rem;
    line-height: 2.25rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    max-width: 680px;
  }

  @media screen and (min-width: ${MediaScreen['screen-xl']}) {
    font-size: 2.75rem;
    line-height: 3.5rem;
    margin-bottom: 1.25rem;
  }
`

export default HeroTitle
