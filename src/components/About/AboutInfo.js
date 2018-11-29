import React from 'react'

class AboutInfoCategory extends React.Component {
  render() {
    return (
      <div className="link-category">
        <h4 className="preview-title preview-title--small link-category__title link-category__title">
          {this.props.title}
        </h4>
        {this.props.content
          ? this.props.content.map((talk, i) => (
              <div className="about-link" key={i}>
                <h5 className="about-link__title">
                  <a
                    href={talk.url}
                    className="about-link__url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {talk.title}
                  </a>
                </h5>
                <p className="about-link__desc">{talk.description}</p>
              </div>
            ))
          : null}
      </div>
    )
  }
}

export default AboutInfoCategory
