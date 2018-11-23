import React from 'react';
import { Link } from 'gatsby';

const MobileNav = () => (
    <nav className="mobile-menu">
    <h4 className="preview-title mobile-menu__title">Menu</h4>
        <ul className="mobile-menu__list">
        <li className="mobile-menu__item">
            <Link to="" className="" activeClassName=""></Link>
        </li>
        <li className="mobile-menu__item">
            <Link to="site-menu__link" className="site-menu__link" activeClassName="site-menu__link--active">Case-Studies</Link>
        </li>
        <li className="mobile-menu__item">
            <Link to="site-menu__link" className="site-menu__link" activeClassName="site-menu__link--active">Blog</Link>
        </li>
        <li className="mobile-menu__item">
            <Link to="site-menu__link" className="site-menu__link" activeClassName="site-menu__link--active">Freelance</Link>
        </li>
        <li className="mobile-menu__item">
            <Link to="site-menu__link" className="site-menu__link" activeClassName="site-menu__link--active">Email Me</Link>
            <a
            href="mailto:{{site.email}}"
            className="site-menu__link mobile-menu__link"
            target="_blank"
            rel=""
            noopener
            >
            Email Me{' '}
            </a>
        </li>
        </ul>
    </nav>
)

export default MobileNav