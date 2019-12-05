import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/styles'
import { H5, P, A } from '../../utils/Typography'

const StyledAboutLink = styled.div`
  flex: 100% 1;
  margin-bottom: 1.5rem;
  font-weight: 600;

  &:first-of-type {
    padding-right: 1rem;
  }

  @media (min-width: ${MediaScreen['screen-sm']}) {
    flex: 50% 1;
    max-width: 50%;
    padding-right: 0.25rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    max-width: 16rem;
    padding-right: 0;
  }
`
const AboutLinkTitle = styled(H5)`
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 0.375rem;
`

const AboutLink = ({ url, title, description }) => (
  <StyledAboutLink>
    <AboutLinkTitle>
      <A href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </A>
    </AboutLinkTitle>
    <P small>{description}</P>
  </StyledAboutLink>
)

export default AboutLink

AboutLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
