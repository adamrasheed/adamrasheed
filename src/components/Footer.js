import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__credit">
            {this.props.title} &copy; {new Date().getFullYear()}
          </div>
          <div className="footer__source">
            <a
              href="https://github.com/adamrasheed/adamrasheed"
              target="_blank"
              rel="noopener noreferrer"
              className="small"
            >
              Source Code
            </a>
          </div>
          <ul className="social footer__social">
            {this.props.social
              ? this.props.social.map((account, i) => (
                  <li className="social__item" key={i}>
                    <a
                      href={account.url}
                      className="social__link"
                      rel="noopener noreferrer"
                      title={account.account}
                    >
                      <FontAwesomeIcon
                        className="social__icon"
                        icon={['fab', account.account]}
                      />
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
