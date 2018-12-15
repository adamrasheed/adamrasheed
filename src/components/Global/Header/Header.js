import React from 'react'
import styled from 'styled-components'

import SiteLogo from './SiteLogo'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import MobNavToggle from './MobNavToggle'
import Container from '../../Container'

import { font } from '../../../utils/Typography'
import { Spring } from 'react-spring'

const HeaderContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.625rem 1rem 1.25rem;
  position: relative;
  font-family: ${font.body};
`

class Header extends React.Component {
  state = { active: false }

  headerActive = () => {
    const headerActive = this.state.active
    this.setState({
      active: headerActive,
    })
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { siteTitle, jobTitle } = this.props
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <header className="header" style={props}>
            <HeaderContainer>
              <SiteLogo title={siteTitle} desc={jobTitle} />
              <MobNavToggle
                onClick={this.handleClick}
                active={this.state.active}
              >
                <span className="span-1" />
                <span className="span-2" />
                <span className="span-3" />
              </MobNavToggle>

              <Navigation />
              <MobileNav active={this.state.active} />
            </HeaderContainer>
          </header>
        )}
      </Spring>
    )
  }
}

export default Header
