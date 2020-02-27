import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.body};
  text-decoration: none;
`
export default StyledLink
