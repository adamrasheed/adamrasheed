import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
const Post = styled.article`
  margin-bottom: 1rem;
  padding: 0 1rem 1rem;
  max-width: 32rem;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    padding: 1rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    padding: 2rem;
  }
`

export default Post
