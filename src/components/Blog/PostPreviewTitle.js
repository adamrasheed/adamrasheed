import styled from 'styled-components'
import { H2 } from 'src/components/Global/Typography'
import { MediaScreen } from 'src/utils/Styles'

const PostPreviewTitle = styled(H2)`
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-bottom: 0;
  }

  & > a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
  }
`

export default PostPreviewTitle
