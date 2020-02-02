import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Spring } from 'react-spring'

import { MediaScreen, animationValues } from 'src/utils/Styles'
import PostPreviewTitle from './PostPreviewTitle'
import PostMeta from './PostPreviewMeta'
import PostPreviewExcerpt from './PostPreviewExcerpt'


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

const PostPreview = ({
  title, link, date, excerpt, delay,
}) => (
    <Spring
      config={{ delay }}
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

export default PostPreview

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  delay: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number],
  ).isRequired,
}
