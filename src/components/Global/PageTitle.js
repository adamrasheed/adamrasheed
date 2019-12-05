import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { MediaScreen, ContainerSize } from '../../utils/styles';
import { H1 } from '../../utils/Typography';

const StyledPageTitle = styled(H1)`
  padding: 0 ${(props) => (props.noPadding ? '0' : '1rem')};
  max-width: ${ContainerSize['container-size']};
  margin: 0 auto 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  @media (min-width: ${MediaScreen['screen-med']}) {
    margin: 0 auto 2.25rem;
  }
`;

const PageTitle = ({ title }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {(props) => (
      <StyledPageTitle style={props}>{title}</StyledPageTitle>
    )}
  </Spring>
)

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}
