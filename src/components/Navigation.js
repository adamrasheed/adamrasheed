import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav className="site-menu">
    <ul className="site-menu__list">
      <li className="site-menu__item">
        <Link
          to="/about"
          className="site-menu__link"
          activeClassName="site-menu__link--active"
        >
          About
        </Link>
      </li>
      <li className="site-menu__item">
        <Link
          to="/case-studies"
          className="site-menu__link"
          activeClassName="site-menu__link--active"
        >
          Case Studies
        </Link>
      </li>
      <li className="site-menu__item">
        <Link
          to="/blog"
          className="site-menu__link"
          activeClassName="site-menu__link--active"
        >
          Blog
        </Link>
      </li>
      <li className="site-menu__item">
        <Link
          to="/freelance/"
          className="site-menu__link"
          activeClassName="site-menu__link--active"
        >
          Freelance
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation