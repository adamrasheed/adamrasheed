import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/styles'

import SidebarPost from './PostSidebarPost'
import StyledLink from '../Global/StyledLink'
import PreviewTitle from '../Global/PreviewTitle'
import ShopifyAd from './ShopifyAd'
import DigitalOceanAd from './DigitalOceanAd'

const SideBar = styled.aside`
  padding: 0 1rem;
  flex: 1;
  margin: 0 0 4rem;
  @media screen and (min-width: ${MediaScreen['screen-sm-med']}) {
    max-width: 24rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    max-width: 13rem;
    margin: 1rem 0 0 1rem;
    flex: 100%;
    padding: 0;
  }
  @media screen and (min-width: ${MediaScreen['screen-med-lg']}) {
    margin: 2rem 0 0 3rem;
    max-width: 16rem;
    padding: 0 1rem;
  }

  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    margin: 2rem 0 0 9rem;
  }
`

const SidebarPosts = styled.ul`
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: ${MediaScreen['screen-lg']}) {
    margin-bottom: 4rem;
  }
`
class PostSidebar extends React.Component {
  state = {
    featuredTag: null,
  }

  componentDidMount() {
    const { tags } = this.props
    let featuredTag

    if (tags && tags.length) {
      tags.forEach(tag => {
        switch (tag.name) {
          case `shopify`:
          case `Shopify`:
            featuredTag = tag.name
            break
          case `Digital Ocean`:
          case `DigitalOcean`:
            featuredTag = tag.name
            break
          default:
        }
      })
      this.setState({ featuredTag })
    }
  }

  render() {
    const { otherPosts } = this.props
    const { featuredTag } = this.state

    return (
      <SideBar>
        <PreviewTitle extraSmall sidebar>
          Other Posts
        </PreviewTitle>
        <SidebarPosts>
          {otherPosts.map(({ node }) => (
            <SidebarPost key={node.slug}>
              <StyledLink
                to={`blog/${node.slug}`}
                dangerouslySetInnerHTML={{ __html: node.title }}
              />
            </SidebarPost>
          ))}
        </SidebarPosts>
        {featuredTag === (`shopify` || `Shopify`) && (
          <ShopifyAd />
        )}
        {featuredTag === `Digital Ocean` && <DigitalOceanAd /> }
      </SideBar>
    )
  }
}

export default PostSidebar

PostSidebar.propTypes = {
  otherPosts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  })).isRequired,
  tags: PropTypes.arrayOf({
    name: PropTypes.string,
  }).isRequired,
}
