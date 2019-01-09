import styled from 'styled-components'
import { ContainerSize, Color, MediaScreen } from '../utils/Styles'

const Container = styled.div`
  max-width: ${props =>
    props.small
      ? ContainerSize['container-size-small']
      : ContainerSize['container-size']};
  margin: 0 auto;
  padding: ${props => (props.noPadding ? '0' : '0 1rem')};
  box-shadow: ${props =>
    props.footer ? `inset 0 1px 0 0 ${Color.text}` : `none`};

  ${props =>
    props.split
      ? `
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 0 1rem;

    @media screen and (min-width: ${MediaScreen['screen-med']}){
        justify-content: space-between;
        flex-flow: row nowrap;
        align-items: center;
    }
    `
      : null};

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: ${Color.text};
    text-decoration: none;
  }
`

export default Container
