import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const CaseStudyPreview = props => (
  <div className="case-study-preview">
    {props.image != null ? (
      <Link to={props.slug}>
        <Img fluid={props.image} className="case-study-preview__img" />
      </Link>
    ) : null}
    <div className="case-study-preview__content">
      <h3 className="case-study-preview__title">
        <Link to={props.slug} className="case-study-preview__link title-link">
          {props.title}
        </Link>
      </h3>
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
