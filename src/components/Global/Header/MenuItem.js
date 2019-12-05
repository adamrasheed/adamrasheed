import styled from 'styled-components'
import { MediaScreen } from 'src/utils/styles'

const MenuItem = styled.li`
  display: inline-block;
  padding: 0.5rem 0.825rem;
  text-align: center;
  flex: 50%;
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    padding: 0;
    margin-left: 1rem;
    flex: auto;
  }
`
export default MenuItem
