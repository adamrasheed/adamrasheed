import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PreviewTitle from '../PreviewTitle'
import MenuLink, { MenuLinkNative } from './MenuLink'
import MobileMenu from './MobMenu'
import { Color } from '../../../utils/Styles'

const MobileNav = props => (
  <StaticQuery
    props={props}
    query={graphql`
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
    `}
    render={data => (
      <MobileMenu active={props.active}>
        <PreviewTitle style={{ padding: '2rem' }}>Menu</PreviewTitle>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          {data.wordpressWpApiMenusMenusItems.items.map(item => (
            <li
              style={{
                borderBottom: `1px solid ${Color.borderLight}`,
              }}
              key={item.wordpress_id}
            >
              <MenuLink
                to={item.object_slug}
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
              href="mailto:adamrasheed91@gmail.com"
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
    )}
  />
)

export default MobileNav
