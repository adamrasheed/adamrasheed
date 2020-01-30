import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MediaScreen, Spacer, Color } from 'src/utils/Styles'
import { H2, P, fontSize } from 'src/utils/Typography'
import { EMAIL } from 'src/constants/contact'
import Container from './Container'
import ButtonALink from './ButtonALink'

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

const Contact = () => {
  const {
    wordpressAcfOptions: {
      options,
    },
  } = useStaticQuery(graphql`
  query ContactResumeQuery {
    wordpressAcfOptions {
      options {
        resume
      }
    }
  }
  `)
  return (
    <ContactSection>
      <Container>
        <H2 style={{ marginBottom: '0.4375rem' }}>Let&lsquo;s Chat</H2>
        <ContactBody className="small contact__body">
          <P>
            You can best reach me through
            &nbsp;
            <a href={`mailto:${EMAIL}`}>email</a>
          </P>
          <ButtonALink
            href={options.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: `1rem 0`,
            }}
          >
            View Resume
          </ButtonALink>
        </ContactBody>
      </Container>
    </ContactSection>
  )
}

export default Contact
