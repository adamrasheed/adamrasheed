import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import { MediaScreen, Spacer, Color } from '../utils/Styles'
import { H2, P, fontSize } from '../utils//Typography'

const ContactSection = styled.section`
  margin-bottom: ${Spacer.small};
  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: ${Spacer.medium};
  }
`
const ContactBody = styled.div`
  font-size: ${fontSize.small};
  line-height: 20.16px;
  p {
    margin-bottom: 7px;
    a {
      color: ${Color.text};
      text-decoration: none;
      font-weight: 600;
    }
  }
`
class Contact extends React.Component {
  render() {
    return (
      <ContactSection>
        <Container>
          <H2 style={{ marginBottom: '0.4375rem' }}>Let's Talk</H2>
          <ContactBody className="small contact__body">
            <P>
              You can best reach me through{' '}
              <a href="mailto:adamrasheed91@gmail.com">email</a>
            </P>
          </ContactBody>
        </Container>
      </ContactSection>
    )
  }
}

export default Contact
