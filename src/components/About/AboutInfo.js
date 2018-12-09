import React from 'react'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
import AboutLink from './AboutLink'

const LinkCategory = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: flex-start;

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
        <h4 className="preview-title preview-title--small link-category__title link-category__title">
          {this.props.title}
        </h4>
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
