import styled from 'styled-components'
import { transition, MediaScreen } from '../../../utils/styles'

const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 3;
  height: 100%;
  width: 100%;
  list-style: none;
  transition: ${transition.medium};
  transform: translateX(
    ${props => (props.active && props.active === true ? '0' : '-100%')}
  );

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: none;
  }
`

export default MobileMenu
