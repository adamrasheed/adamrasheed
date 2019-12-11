import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color } from 'src/utils/Styles'
import { font } from 'src/utils/Typography'

const StyledLink = styled(Link)`
  color: ${Color.text};
  font-family: ${font.body};
  text-decoration: none;
`
export default StyledLink
