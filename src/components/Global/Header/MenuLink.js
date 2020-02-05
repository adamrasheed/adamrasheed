import { Link } from 'gatsby'
import styled from 'styled-components'
import { transition } from 'src/utils/Styles'

const MenuLink = styled(Link)`
  font-weight: 400;
  letter-spacing: 0.06em;
  font-variant: small-caps;
  text-transform: lowercase;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.textLight};
  transition: ${({ theme }) => theme.transition.short};
  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
  &:focus {
    color: ${({ theme }) => theme.color.text};
  }
`

export const MenuLinkNative = styled.a`
  font-weight: 400;
  letter-spacing: 0.06em;
  font-variant: small-caps;
  text-transform: lowercase;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.textLight};
  transition: ${({ theme }) => theme.transition.short};
  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
  &:focus {
    color: ${({ theme }) => theme.color.text};
  }
`

export default MenuLink
