import React from 'react'
class CaseStudyCta extends React.Component {
  render() {
    return (
      <div className="case-study__cta">
        <h3 className="case-study__title">
          {' '}
          Looking for a Front-end Developer to create something rad like this?
          Let’s Talk.{' '}
        </h3>
        <a
          href="mailto:adamrasheed91@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Email Me
        </a>
      </div>
    )
  }
}

export default CaseStudyCta
