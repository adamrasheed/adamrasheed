import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { MediaScreen } from '../../utils/styles'

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

const AdContainer = ({ children }) => (
  <StyledAdContainer>
    {children}
    <Disclaimer>Dope AF Affiliate Link</Disclaimer>
  </StyledAdContainer>
)

export default AdContainer

AdContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
