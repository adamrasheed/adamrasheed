import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Color, MediaScreen } from 'src/utils/styles'
import { H1, fontSize, font } from 'src/utils/Typography'

import StyledLink from '../StyledLink'

const SiteTitle = styled(H1)`
  font-size: ${fontSize.large};
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.05em;
  color: ${Color.text};
  display: inline-block;

  @media screen and (min-width: ${MediaScreen['screen-sm-med']}) {
    &::after {
      content: '';
      height: 1rem;
      width: 1px;
      display: inline-block;
      background: ${Color.text};
      margin: 0 4px 0 6px;
    }
  }
`

const SiteDesc = styled.div`
  display: none;
  transform: translateY(-2px);
  color: ${Color.text};
  font-family: ${font.body};
  line-height: 1.5;
  font-size: ${fontSize.extraSmall};
  text-align: left;

  margin: 0.25rem auto 0;
  text-decoration: none;

  @media screen and (min-width: ${MediaScreen['screen-sm-med']}) {
    display: inline-block;
  }
`
const SiteLogo = ({ title, desc }) => (
  <StyledLink to="/">
    <SiteTitle>{title}</SiteTitle>
    <SiteDesc>{desc}</SiteDesc>
  </StyledLink>
)

export default SiteLogo

SiteLogo.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}
