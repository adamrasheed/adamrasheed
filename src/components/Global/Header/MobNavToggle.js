import styled from 'styled-components'
import { MediaScreen, transition, Color } from '../../../utils/styles'

const MobileNavToggle = styled.button`
  background: none;
  display: block;
  width: 48px;
  height: 19px;
  display: block;
  cursor: pointer;
  border: none;
  transition: ${transition.short};
  position: fixed;
  top: 1.875rem;
  right: 1rem;
  z-index: 999;

  &:focus,
  &:active,
  &:hover {
    background: none;
  }

  &:focus {
    outline: 0;
  }

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: none;
  }

  & > span {
    display: block;
    height: 2px;
    background: ${Color.text};
    transition: ${transition.short};
    cursor: pointer;
  }

  & .span-1,
  & .span-3 {
    display: block;
    height: 2px;
    width: 32px;
    position: absolute;
  }

  & .span-1 {
    top: ${props => (props.active ? `8px` : `0px`)};
    transform: rotate(
      ${props => (props.active ? `45deg` : `0deg`)}
    );
  }
  & .span-2 {
    top: calc(50% - 1px);
    position: relative;
    width: 1rem;
    transform: ${props => (props.active ? 'scale(0)' : 'scale(1)')};
  }

  & .span-3 {
    bottom: ${props => (props.active ? `10px` : `0px`)};
    transform: rotate(
      ${props => (props.active ? `-45deg` : `0deg`)}
    );
  }
`
export default MobileNavToggle
