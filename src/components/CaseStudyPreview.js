import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image'

const CaseStudyPreview = (props) => (
    <div className="case-study-preview">
        <Link to="/" className="case-study-preview__link">
        {/*<Img fluid={props.featured_media.localFile.childImageSharp.fluid.src} className="lazyload blur-up case-study-preview__img"/>*/}
        </Link>

        <div className="case-study-preview__content">
            <h3 className="case-study-preview__title">
                <a href="{{study.url}}" className="case-study-preview__link title-link">{props.title}</a>
            </h3>
            <ul className="case-study-preview__tags">
                {props.tags.map((tag, i)=>(
                    <li className="case-study-preview__tag" key={i}>{tag.name}</li>
                ))}
            </ul>

            <div className="case-study-preview__body">
                <h4 className="case-study-preview__tagline">Tagline</h4>
                <p className="case-study-preview__excerpt">Case Study Excerpt Goes Here</p>
            </div>

            <Link to="/" className="btn btn--secondary case-study-preview__cta">View Case Study</Link>
        </div>
    </div>
)

export default CaseStudyPreview
