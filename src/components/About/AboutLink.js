import React from 'react'
import styled from 'styled-components'
import { MediaScreen, Color } from '../../utils/Styles'
import { H5, P } from '../../utils/Typography'

const StyledAboutLink = styled.div`
  flex: 50% 1;
  max-width: 50%;
  margin-bottom: 1.3125rem;
  padding-right: 0.25rem;

  &:first-of-type {
    padding-right: 1rem;
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
class AboutLink extends React.Component {
  render() {
    const { url, title, description } = this.props

    return (
      <StyledAboutLink>
        <AboutLinkTitle>
          <a
            href={url}
            style={{
              color: Color.text,
              textDecoration: 'none',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </AboutLinkTitle>
        <P>{description}</P>
      </StyledAboutLink>
    )
  }
}

export default AboutLink
