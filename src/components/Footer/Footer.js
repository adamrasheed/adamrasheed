import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Container from '../Container';
import FooterCredit from './FooterCredit';
import FooterSource from './FooterSource';
import Social from '../Global/Social';

library.add(fab);

const FooterWrapper = styled.footer`
  margin-bottom: 2rem;
`;

const Footer = ({ title, social }) => {
  const credit = `${title} &copy; ${new Date().getFullYear()}`;
  return (
    <FooterWrapper className="footer">
      <Container footer split style={{ padding: '1.7rem 1rem' }}>
        <FooterCredit>
          {credit}
        </FooterCredit>
        <FooterSource />
        <Social social={social} />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};
