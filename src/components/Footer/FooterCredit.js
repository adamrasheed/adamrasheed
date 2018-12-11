import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
import { fontSize } from '../../utils/Typography'

const FooterCredit = styled.div`
  margin-bottom: 1rem;
  font-size: ${fontSize.small};

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 0;
  }
`

export default FooterCredit
