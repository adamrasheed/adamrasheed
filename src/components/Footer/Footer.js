import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Social, { SocialTypes } from 'src/components/Global/Social';
import Container from 'src/components/Container';
import FooterCredit from './FooterCredit';
import FooterSource from './FooterSource';

library.add(fab);

const FooterWrapper = styled.footer`
  margin-bottom: 2rem;
`;

const Footer = ({ title, social }) => {
  const credit = `${title} ©${new Date().getFullYear()}`;
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
  social: PropTypes.arrayOf(SocialTypes).isRequired,
};
