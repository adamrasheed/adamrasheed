import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import PostPreviewTitle from './PostPreviewTitle'
import PostMeta from './PostPreviewMeta'
import PostPreviewExcerpt from './PostPreviewExcerpt'

import { MediaScreen, animationValues } from '../../utils/Styles'

const Post = styled.div`
  padding: 0 1rem 2rem;
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    flex: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    height: 23.25rem;
    padding: 0 1rem 2rem;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    margin-bottom: 2rem;
  }
`

class PostPreview extends React.Component {
  render() {
    const { title, link, date, excerpt, delay } = this.props
    return (
      <Spring
        config={{ delay: delay }}
        from={animationValues.fadeIn.start}
        to={animationValues.fadeIn.end}
      >
        {props => (
          <Post Blog style={props}>
            <PostPreviewTitle Blog>
              <Link
                className="post__link"
                to={link}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </PostPreviewTitle>
            <div style={{ margin: '1rem 0' }}>
              <PostMeta date={date} />
            </div>
            <PostPreviewExcerpt
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </Post>
        )}
      </Spring>
    )
  }
}

export default PostPreview
