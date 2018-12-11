import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import MenuLink from './MenuLink'
import { Color, MediaScreen } from '../../../utils/Styles'

const SiteMenu = styled.nav`
  display: none;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-left: 1px solid ${Color.textLight};
  border-right: 1px solid ${Color.textLight};
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    display: block;
    flex: 1 0 auto;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
  }
`

const Navigation = ({ data }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        wordpressWpApiMenusMenusItems(slug: { eq: "main-menu" }) {
          items {
            wordpress_id
            title
            url
            object_id
            object
            object_slug
            type_label
          }
        }
      }
    `}
    render={data => (
      <SiteMenu>
        <ul className="site-menu__list">
          {data.wordpressWpApiMenusMenusItems.items.map(item => (
            <MenuItem key={item.wordpress_id}>
              <MenuLink
                to={item.object_slug}
                activeStyle={{ color: Color.text }}
              >
                {item.title}
              </MenuLink>
            </MenuItem>
          ))}
        </ul>
      </SiteMenu>
    )}
  />
)

export default Navigation
