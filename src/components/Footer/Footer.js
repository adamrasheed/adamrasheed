import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { MediaScreen } from 'src/utils/Styles'
import Social, { SocialTypes } from 'src/components/Global/Social';
import Container from 'src/components/Container';
import ButtonALink from 'src/components/ButtonALink'
import FooterCredit from './FooterCredit';
import FooterSource from './FooterSource';

library.add(fab);

const FooterWrapper = styled.footer`
  margin-bottom: 2rem;
`;

const ResumeLink = styled(ButtonALink)`
  margin: 1rem auto;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin: 0;
  }
`

const FooterContainer = styled(Container)`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    grid-gap: 1rem;

  }
`

const FooterSocial = styled(Social)`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    justify-self: end;
    background: red;
  }
`

const Footer = ({ title, social }) => {
  const credit = `${title} ©${new Date().getFullYear()}`;
  return (
    <FooterWrapper className="footer">
      <FooterContainer footer style={{ padding: '1.7rem 1rem' }}>
        <FooterCredit>
          {credit}
        </FooterCredit>
        <FooterSource />
        <ResumeLink
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </ResumeLink>
        <FooterSocial social={social} />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(SocialTypes).isRequired,
};
