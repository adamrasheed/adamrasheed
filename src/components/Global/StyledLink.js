import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color } from '../../utils/Styles'

const StyledLink = styled(Link)`
  color: ${Color.text};
  text-decoration: none;
`
export default StyledLink
