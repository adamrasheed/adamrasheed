import React from 'react'
import styled from 'styled-components'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Container from '../Container'
import FooterCredit from '../Footer/FooterCredit'
import FooterSource from '../Footer/FooterSource'
import Social from '../Global/Social'

library.add(fab)

const FooterWrapper = styled.footer`
  margin-bottom: 2rem;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper className="footer">
        <Container footer split style={{ padding: '1.7rem 1rem' }}>
          <FooterCredit>
            {this.props.title} &copy; {new Date().getFullYear()}
          </FooterCredit>
          <FooterSource />
          <Social social={this.props.social} />
        </Container>
      </FooterWrapper>
    )
  }
}

export default Footer
