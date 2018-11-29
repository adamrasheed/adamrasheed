import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

const MobileNav = () => (
  <StaticQuery
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
      <nav className="mobile-menu" data-mobile-menu>
        <h4 className="preview-title mobile-menu__title">Menu</h4>
        <ul className="mobile-menu__list">
          {data.wordpressWpApiMenusMenusItems.items.map(item => (
            <li className="mobile-menu__item" key={item.wordpress_id}>
              <Link
                to={item.object_slug}
                className="site-menu__link mobile-menu__link"
                activeClassName="mobile-menu__link--active"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="mobile-menu__item">
            <a
              href="mailto:adamrasheed91@gmail.com"
              className="site-menu__link mobile-menu__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
          </li>
        </ul>
      </nav>
    )}
  />
)

export default MobileNav
