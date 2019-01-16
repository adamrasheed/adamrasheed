import styled from 'styled-components'
import React from 'react'
import { MediaScreen } from '../../utils/Styles'

const StyledAdContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.03);
  position: static;
  @media screen and (min-width: ${MediaScreen['screen-med-lg']}) {
    position: sticky;
    top: 1rem;
  }
`

const Disclaimer = styled.span`
  font-size: 0.5rem;
  opacity: 0.65;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-align: center;
  position: absolute;
  bottom: -1.125rem;
  left: 0;
`

class AdContainer extends React.Component {
  render() {
    return (
      <StyledAdContainer>
        {this.props.children}
        <Disclaimer>Dope AF Affiliate Link</Disclaimer>
      </StyledAdContainer>
    )
  }
}

export default AdContainer
