import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SiteLogo from './SiteLogo';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import MobNavToggle from './MobNavToggle';
import Container from '../../Container';

import { font } from '../../../utils/Typography';

const HeaderContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.625rem 1rem 1.25rem;
  position: relative;
  font-family: ${font.body};
`;

const Header = ({ siteTitle, jobTitle }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className="header">
      <HeaderContainer>
        <SiteLogo title={siteTitle} desc={jobTitle} />
        <MobNavToggle onClick={handleClick} active={active}>
          <span className="span-1" />
          <span className="span-2" />
          <span className="span-3" />
        </MobNavToggle>

        <Navigation />
        <MobileNav active={active} />
      </HeaderContainer>
    </header>
  );
};

export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};
