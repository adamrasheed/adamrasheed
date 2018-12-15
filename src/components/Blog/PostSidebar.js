import React from 'react'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'

import SidebarPost from './PostSidebarPost'
import StyledLink from '../Global/StyledLink'
import PreviewTitle from '../Global/PreviewTitle'

const SideBar = styled.aside`
  padding: 0 1rem;
  flex: 1;
  margin: 0 0 4rem;
  @media screen and (min-width: ${MediaScreen['screen-sm-med']}) {
    max-width: 24rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    max-width: 11rem;
    margin: 2rem 0 0 3rem;
    flex: 100%;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    max-width: 16rem;
    margin: 2rem 0 0 9rem;
  }
`
class PostSidebar extends React.Component {
  render() {
    const { otherPosts } = this.props

    console.log(otherPosts)

    return (
      <SideBar>
        <PreviewTitle extraSmall sidebar>
          Other Posts
        </PreviewTitle>
        <ul className="sidebar__posts">
          {otherPosts.map(({ node }, i) => (
            <SidebarPost key={i}>
              <StyledLink
                to={`blog/${node.slug}`}
                dangerouslySetInnerHTML={{ __html: node.title }}
              />
            </SidebarPost>
          ))}
        </ul>
      </SideBar>
    )
  }
}

export default PostSidebar
