import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'

const PostPreviewExcerpt = styled.div`
  min-height: 9rem;
  height: auto;
  overflow: hidden;
  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    min-height: 7.5rem;
  }
`
export default PostPreviewExcerpt
