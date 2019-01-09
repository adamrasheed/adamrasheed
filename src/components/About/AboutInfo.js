import React from 'react'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
import AboutLink from './AboutLink'
import PreviewTitle from '../Global/PreviewTitle'

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
class AboutInfoCategory extends React.Component {
  render() {
    return (
      <LinkCategory>
        <PreviewTitle small flex100 style={{ marginBottom: '13px' }}>
          {this.props.title}
        </PreviewTitle>
        {this.props.content
          ? this.props.content.map((talk, i) => (
              <AboutLink
                key={i}
                title={talk.title}
                url={talk.url}
                description={talk.description}
              />
            ))
          : null}
      </LinkCategory>
    )
  }
}

export default AboutInfoCategory
