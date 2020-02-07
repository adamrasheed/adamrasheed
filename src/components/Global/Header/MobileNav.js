import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { EMAIL } from 'src/constants/contact'
import { theme as styles } from 'src/utils/Styles'
import PreviewTitle from '../PreviewTitle'
import MenuLink, { MenuLinkNative } from './MenuLink'
import MobileMenu from './MobMenu'

const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderLight};
`

const Link = styled(MenuLinkNative)`
  display: 'block';
  padding: '1rem 2rem';
  textAlign: 'left';
`

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
          <Item
            key={item.wordpress_id}
          >
            <MenuLink
              to={`/ ${item.object_slug} `}
              activeStyle={{
                color: styles.color.text,
              }}
              style={{
                display: 'block',
                padding: '1rem 2rem',
                textAlign: 'left',
              }}
            >
              {item.title}
            </MenuLink>
          </Item>
        ))}
        <li className="mobile-menu__item">
          <Link
            href={`mailto: ${EMAIL} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </Link>
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
