import React from 'react'
import styled from 'styled-components'
import { H2, H3, H4 } from '../../utils/Typography'
import { Color, MediaScreen } from '../../utils/Styles'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PreviewTitle = styled(H3)`
  margin-bottom: 1rem;

  @media (min-width: ${MediaScreen['screen-med']}) {
    grid-area: main;
    align-self: start;
    font-size: 1.5rem;
    margin: 1rem 0 1.5rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Color.text};
`

const CaseStudyPreview = props => (
  <div className="case-study-preview">
    {props.image != null ? (
      <Link to={props.slug}>
        <Img fluid={props.image} className="case-study-preview__img" />
      </Link>
    ) : null}
    <div className="case-study-preview__content">
      <PreviewTitle>
        <StyledLink to={props.slug}>{props.title}</StyledLink>
      </PreviewTitle>
      <ul className="case-study-preview__tags">
        {props.tags != null
          ? props.tags.map((tag, i) => (
              <li className="case-study-preview__tag" key={i}>
                {tag.name}
              </li>
            ))
          : null}
      </ul>

      <div className="case-study-preview__body">
        <h4 className="case-study-preview__tagline">{props.subtitle}</h4>
        <p className="case-study-preview__excerpt">{props.teaser}</p>
      </div>

      <Link
        to={props.slug}
        className="btn btn--secondary case-study-preview__cta"
      >
        View Case Study
      </Link>
    </div>
  </div>
)

export default CaseStudyPreview
