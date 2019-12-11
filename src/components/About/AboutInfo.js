import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaScreen } from 'src/utils/Styles'
import PreviewTitle from 'src/components/Global/PreviewTitle'
import AboutLink from './AboutLink'

const LinkCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (min-width: ${MediaScreen['screen-sm-med']}) {
    display: block;
    margin: 0 auto;
    max-width: 16rem;

    &:first-of-type {
      margin-top: 0.5rem;
    }
  }
`
const AboutInfoCategory = ({ title, content }) => (
  <LinkCategory>
    <PreviewTitle small flex100 style={{ marginBottom: '13px' }}>
      {title}
    </PreviewTitle>
    {content ?.map((talk, i) => (
      <AboutLink
        key={i}
        title={talk.title}
        url={talk.url}
        description={talk.description}
      />
    ))}
  </LinkCategory>
)

export default AboutInfoCategory

AboutInfoCategory.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
}
