import styled from 'styled-components'
import { MediaScreen } from 'src/utils/styles'

const PostPreviewExcerpt = styled.div`
  height: auto;
  overflow: hidden;
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    min-height: 9rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    min-height: 7.5rem;
  }
`
export default PostPreviewExcerpt
