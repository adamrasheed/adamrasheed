import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { MediaScreen, Spacer, Color } from '../utils/styles'
import { H2, P, fontSize } from '../utils/Typography'

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

const Message = () => (
  <>
      You can best reach me through
    <a href="mailto:adamrasheed91@gmail.com">email</a>
  </>
)
const Contact = () => (
  <ContactSection>
    <Container>
      <H2 style={{ marginBottom: '0.4375rem' }}>Let&lsquo;s Talk</H2>
      <ContactBody className="small contact__body">
        <P>
          <Message />
        </P>
      </ContactBody>
    </Container>
  </ContactSection>
)

export default Contact
