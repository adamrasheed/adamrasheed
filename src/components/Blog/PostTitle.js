import styled from 'styled-components'
import { H1 } from '../../utils/Typography'
import { MediaScreen } from '../../utils/Styles'

const PostTitle = styled(H1)`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    margin-bottom: 2rem;
  }
`

export default PostTitle
