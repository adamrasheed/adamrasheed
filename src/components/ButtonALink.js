import styled from 'styled-components'

import { Color, transition } from 'src/utils/Styles'
import { fontSize } from 'src/utils/Typography'

const ButtonALink = styled.a`
  font-size: ${fontSize.small};
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1;
  font-variant-caps: all-small-caps;
  background: ${Color.Btn.secondary.regular};
  color: ${Color.text};
  text-decoration: none;
  padding: 0.5rem 1rem 0.6rem;
  text-align: center;
  display: block;
  max-width: 10rem;
  transition: ${transition.short};

  &:hover,
  &:focus {
    background: ${Color.Btn.secondary.hover};
    text-decoration: none;
  }
`

export default ButtonALink
