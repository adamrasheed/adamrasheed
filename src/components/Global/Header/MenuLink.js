import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color, transition } from 'src/utils/styles'

const MenuLink = styled(Link)`
  font-weight: 400;
  letter-spacing: 0.06em;
  font-variant: small-caps;
  text-transform: lowercase;
  text-align: center;
  text-decoration: none;
  color: ${Color.textLight};
  text-decoration: none;
  transition: ${transition.short};
  &:hover {
    color: ${Color.text};
  }
  &:focus {
    color: ${Color.text};
  }
`

export const MenuLinkNative = styled.a`
  font-weight: 400;
  letter-spacing: 0.06em;
  font-variant: small-caps;
  text-transform: lowercase;
  text-align: center;
  text-decoration: none;
  color: ${Color.textLight};
  text-decoration: none;
  transition: ${transition.short};
  &:hover {
    color: ${Color.text};
  }
  &:focus {
    color: ${Color.text};
  }
`

export default MenuLink
