import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { theme as themeStyle, themeDark } from 'src/utils/Styles'
import { SiteContext } from 'src/context/SiteProvider'
import MenuItem from './MenuItem'
import MenuLink from './MenuLink'

const SiteMenu = styled.nav`
  display: none;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-left: 1px solid ${({ theme }) => theme.color.textLight};
  border-right: 1px solid ${({ theme }) => theme.color.textLight};
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen['screen-med']}) {
    display: block;
    flex: 1 0 auto;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
  }
`

const Navigation = () => {
  const { dark } = useContext(SiteContext)
  const { wordpressWpApiMenusMenusItems: wpMenus } = useStaticQuery(graphql`
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
`)

  return (
    <SiteMenu>
      <ul className="site-menu__list">
        {wpMenus.items.map(item => (
          <MenuItem key={item.wordpress_id}>
            <MenuLink
              to={`/${item.object_slug}`}
              activeStyle={{ color: dark ? themeDark.color.text : themeStyle.color.text }}
            >
              {item.title}
            </MenuLink>
          </MenuItem>
        ))}
      </ul>
    </SiteMenu>
  )
}

export default Navigation
