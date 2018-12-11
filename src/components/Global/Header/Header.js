import React from 'react'
import styled from 'styled-components'

import SiteLogo from './SiteLogo'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import MobNavToggle from './MobNavToggle'
import Container from '../../Container'

const HeaderContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.625rem 1rem 1.25rem;
  position: relative;
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
      <header className="header">
        <HeaderContainer>
          <SiteLogo title={siteTitle} desc={jobTitle} />
          <MobNavToggle onClick={this.handleClick} active={this.state.active}>
            <span className="span-1" />
            <span className="span-2" />
            <span className="span-3" />
          </MobNavToggle>

          <Navigation />
          <MobileNav active={this.state.active} />
        </HeaderContainer>
      </header>
    )
  }
}

export default Header
