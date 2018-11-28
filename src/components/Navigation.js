import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

const Navigation = ({data}) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery{
        wordpressWpApiMenusMenusItems(slug: {eq: "main-menu"}) {
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
  render={data=>(
    <nav className="site-menu">
    <ul className="site-menu__list">
      {data.wordpressWpApiMenusMenusItems.items.map((item) =>(
        <li className="site-menu__item" key={ item.wordpress_id}>
          <Link to={item.object_slug} className="site-menu__link" activeClassName="site-menu__link--active">{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
  )}
  />
)

export default Navigation