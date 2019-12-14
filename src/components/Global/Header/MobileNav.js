import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { EMAIL } from 'src/constants/contact'
import { Color } from 'src/utils/Styles'
import PreviewTitle from '../PreviewTitle'
import MenuLink, { MenuLinkNative } from './MenuLink'
import MobileMenu from './MobMenu'

const MobileNav = ({ active }) => {
  const { wordpressWpApiMenusMenusItems: menuItems } = useStaticQuery(graphql`
  query MobileNavigationQuery {
    wordpressWpApiMenusMenusItems(slug: { eq: "main-menu" }) {
      items {
        wordpress_id
        title
        object_id
        object
        object_slug
      }
    }
  }
`)
  return (
    <MobileMenu active={active}>
      <PreviewTitle style={{ padding: '2rem' }}>Menu</PreviewTitle>
      <ul
        style={{
          listStyle: 'none',
        }}
      >
        {menuItems.items.map(item => (
          <li
            style={{
              borderBottom: `1px solid ${Color.borderLight}`,
            }}
            key={item.wordpress_id}
          >
            <MenuLink
              to={`/${item.object_slug}`}
              activeStyle={{
                color: Color.text,
              }}
              style={{
                display: 'block',
                padding: '1rem 2rem',
                textAlign: 'left',
              }}
            >
              {item.title}
            </MenuLink>
          </li>
        ))}
        <li className="mobile-menu__item">
          <MenuLinkNative
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1rem 2rem',
              textAlign: 'left',
            }}
          >
            Email Me
          </MenuLinkNative>
        </li>
      </ul>
    </MobileMenu>
  )
}

export default MobileNav

MobileNav.defaultProps = {
  active: false,
}

MobileNav.propTypes = {
  active: PropTypes.bool,
}
