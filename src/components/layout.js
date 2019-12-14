import React from 'react';
import PropTypes from 'prop-types';

import { useStaticQuery, graphql } from 'gatsby';

import Head from './Head';
import Header from './Global/Header/Header';
import Footer from './Footer/Footer';

import '../scss/00-global/_reset.scss';
import '../scss/00-global/_global.scss';

const Layout = ({ children, template }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    wordpressSiteMetadata {
      name
      description
    }
    wordpressAcfOptions {
      options {
        title
        tagline
        social_accounts {
          account
          url {
            url
          }
        }
      }
    }
    wordpressPage(slug: { eq: "about" }) {
      featured_media {
        localFile {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`);

  const mainClass = template ? `main main--${template}` : 'main';

  const {
    wordpressSiteMetadata: { name, description },
    wordpressAcfOptions: { options: acfOptions },
  } = data

  return (
    <div className="body">
      <Head
        title={name}
        description={description}
        tagline={acfOptions.tagline}
        photo={
          data.wordpressPage.featured_media.localFile.childImageSharp.fixed
            .src
        }
      />
      <Header
        siteTitle={name}
        jobTitle={acfOptions.title}
      />
      <div className={mainClass}>
        {children}
      </div>
      <Footer
        title={name}
        social={acfOptions.social_accounts}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  template: PropTypes.string,
};

export default Layout;
