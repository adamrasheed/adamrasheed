import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { H3 } from '../../../utils/Typography'
import StyledLink from '../../Global/StyledLink'
import { MediaScreen, Spacer } from '../../../utils/styles'
import { H4, P, fontSize } from '../../../utils/Typography'

import ButtonLink from '../../ButtonLink'

const PreviewTitle = styled(H3)`
  margin-bottom: 1rem;

  @media (min-width: ${MediaScreen['screen-med']}) {
    grid-area: main;
    align-self: start;
    font-size: 1.5rem;
    margin: 1rem 0 1.5rem;
  }
`

const Preview = styled.div`
  margin-bottom: 3rem;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 0rem;
    margin-bottom: ${Spacer.small};
  }
`

const PreviewImg = styled(Img)`
  margin-bottom: 1rem;
`

const PreviewContent = styled.div`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    @supports (display: grid) and (not (display: -ms-grid)) {
      & {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        grid-template-areas:
          'main side'
          'tags side'
          'cta side';
      }
    }
  }
`

const PreviewCta = styled(ButtonLink)`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    grid-area: cta;
    align-self: start;
  }
`

const PreviewBody = styled.div`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    @supports (display: grid) and (not (display: -ms-grid)) {
      & {
        grid-area: side;
        grid-column: 2/2;
        margin: 0.825rem 0 0.25rem;
      }
    }
  }
`

const PreviewTag = styled.li`
  font-size: ${fontSize.small};
  line-height: 1rem;
  font-variant-caps: all-small-caps;
  font-weight: 400;
  letter-spacing: 0.05em;
  display: block;
  margin: 0 0 1rem;

  &:last-of-type {
    margin-bottom: 1.5rem;
  }
`

const CaseStudyPreview = props => (
  <Preview className="case-study-preview">
    {props.image != null ? (
      <Link to={props.slug}>
        <PreviewImg fluid={props.image} className="case-study-preview__img" />
      </Link>
    ) : null}
    <PreviewContent className="case-study-preview__content">
      <PreviewTitle>
        <StyledLink to={props.slug}>{props.title}</StyledLink>
      </PreviewTitle>
      <ul className="case-study-preview__tags">
        {props.tags != null
          ? props.tags.map((tag, i) => (
            <PreviewTag className="case-study-preview__tag" key={i}>
                {tag.name}
              </PreviewTag>
          ))
          : null}
      </ul>

      <PreviewBody>
        <H4 style={{ marginBottom: '0.125rem', lineHeight: '1.25' }}>
          {props.subtitle}
        </H4>
        <P style={{ marginBottom: '1rem' }}>{props.teaser}</P>
      </PreviewBody>

      <PreviewCta
        to={props.slug}
        className="btn btn--secondary case-study-preview__cta"
      >
        View Case Study
      </PreviewCta>
    </PreviewContent>
  </Preview>
)

export default CaseStudyPreview
