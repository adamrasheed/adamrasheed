import React, { Component } from 'react'
import styled from 'styled-components'
import { MediaScreen, ContainerSize } from '../../utils/Styles'
import { H1 } from '../../utils/Typography'
import { Spring } from 'react-spring'

const StyledPageTitle = styled(H1)`
  padding: 0 ${props => (props.noPadding ? '0' : '1rem')};
  max-width: ${ContainerSize['container-size']};
  margin: 0 auto 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  @media (min-width: ${MediaScreen['screen-med']}) {
    margin: 0 auto 2.25rem;
  }
`

class PageTitle extends Component {
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <StyledPageTitle style={props}>{this.props.title}</StyledPageTitle>
        )}
      </Spring>
    )
  }
}

export default PageTitle
