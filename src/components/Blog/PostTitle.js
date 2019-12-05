import styled from 'styled-components'
import { H1 } from '../../utils/Typography'
import { MediaScreen } from '../../utils/styles'

const PostTitle = styled(H1)`
  font-size: 1.75rem;
  line-height: 2.25rem;
  margin-bottom: 0;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    font-size: 1.875rem;
    line-height: 2.5rem;
    margin-bottom: 0.625rem;
  }
`

export default PostTitle
