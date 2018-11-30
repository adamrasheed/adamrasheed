import React from 'react'
import { Link } from 'gatsby'

class PostPreview extends React.Component {
  render() {
    const { props } = this
    console.log(this.props.date)
    return (
      <div className="post">
        <h2 className="post__title">
          <Link
            className="post__link"
            to={props.link}
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        </h2>
        <div className="post__meta">
          <span className="post__date">{props.date}</span>
          <span className="post__length" title="Estimated read time">
            {props.date}
          </span>
        </div>
        <div
          className="paragraph post__excerpt"
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        />
      </div>
    )
  }
}

export default PostPreview
