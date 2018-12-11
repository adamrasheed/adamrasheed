import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color } from '../../utils/Styles'
import { P } from '../../utils//Typography'

import Container from '../Container'
import HeroTitle from './HeroTitle.js'
import HeroContainer from './HeroContainer'

const HeroBody = styled.div`
  margin-bottom: 1rem;
  max-width: 620px;
  & > p {
    margin-bottom: 0.75rem;
  }

  a {
    color: ${Color.text};
    text-decoration: none;
    font-weight: 600;
  }
`

const Hero = ({ tagline, specialize, career }) => (
  <HeroContainer className="hero">
    <Container className="container hero__container">
      <HeroTitle
        dangerouslySetInnerHTML={{
          __html: tagline,
        }}
      />
      <HeroBody className="hero__body">
        <P
          dangerouslySetInnerHTML={{
            __html: specialize,
          }}
        />
        <P
          dangerouslySetInnerHTML={{
            __html: career,
          }}
        />
        <P>
          I'm also taking on select freelance projects. Wanna see if we’d be a
          good fit? Learn more
          <span className="ib" style={{ marginLeft: '0.35rem' }}>
            <Link to="/about">about me</Link>.
          </span>
        </P>
      </HeroBody>
    </Container>
  </HeroContainer>
)

export default Hero
