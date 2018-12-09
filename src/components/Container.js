import React from 'react'
import styled from 'styled-components'
import { ContainerSize } from '../utils/Styles'

const Container = styled.div`
  max-width: ${props =>
    props.small
      ? ContainerSize['container-size-small']
      : ContainerSize['container-size']};
  margin: 0 auto;
  padding: 0 ${props => (props.noPadding ? '0' : '1rem')};
`

export default Container
