import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Color, MediaScreen } from '../../../utils/Styles'
import { H1, fontSize } from '../../../utils/Typography'

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
  display: block;
  transform: translateY(-2px);
  color: ${Color.text};
  font-size: ${fontSize.extraSmall};
  text-align: left;
  margin: 0.25rem auto 0;
  text-decoration: none;

  @media screen and (min-width: ${MediaScreen['screen-sm-med']}) {
    display: inline-block;
  }
`
class SiteLogo extends React.Component {
  render() {
    const { title, desc } = this.props
    return (
      <Link to="/">
        <SiteTitle>{title}</SiteTitle>
        <SiteDesc>{desc}</SiteDesc>
      </Link>
    )
  }
}

export default SiteLogo
