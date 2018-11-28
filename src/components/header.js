import React from 'react'
import { Link } from 'gatsby'

import Navigation from './Navigation'
import MobileNav from './MobileNav';

const Header = ({ siteTitle, jobTitle }) => {

  const handleClick = ({currentTarget : self}) => {
    self.classList.toggle('burger--open');
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo logo" id="logo">
          <h1 className="logo__title">{ siteTitle }</h1>
          <div className="logo__desc">{ jobTitle }</div>
        </Link>
        <div id="burger" className="burger" onClick={handleClick}>
          <span className="burger__span burger__span-1" />
          <span className="burger__span burger__span-2" />
          <span className="burger__span burger__span-3" />
        </div>
  
        <Navigation/>
        <MobileNav/>
  
      </div>
    </header>
  )
}

export default Header
