import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
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
    height: 25.5rem;
    padding: 0 1rem 2rem;
  }
`

class PostPreview extends React.Component {
  render() {
    const { title, link, date, excerpt } = this.props
    return (
      <Post Blog>
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
    )
  }
}

export default PostPreview
