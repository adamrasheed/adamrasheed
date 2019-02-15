import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Color, animationValues } from '../../utils/Styles'
import { P, font } from '../../utils//Typography'
import { Spring } from 'react-spring'

import Container from '../Container'
import HeroTitle from './HeroTitle.js'
import HeroContainer from './HeroContainer'
import Weather from '../About/Weather'

const HeroBody = styled.div`
  margin-bottom: 1rem;
  max-width: 680px;
  & > p {
    margin-bottom: 0.75rem;
  }

  a {
    color: ${Color.text};
    text-decoration: none;
    font-weight: 600;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

const Hero = ({ tagline, specialize, career, resume, hideCareer }) => (
  <Spring
    config={{ delay: 250 }}
    from={animationValues.fadeIn.start}
    to={animationValues.fadeIn.end}
  >
    {props => (
      <HeroContainer style={props} className="hero">
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
            {/*<Weather />*/}
            {!hideCareer && career ? (
              <P
                dangerouslySetInnerHTML={{
                  __html: career,
                }}
              />
            ) : null}
            <P>
              I'm also taking on select freelance projects. Wanna see if we’d be
              a good fit? <br />
              Learn more
              <span
                className="ib"
                style={{ marginLeft: '0.35rem', fontFamily: font.body }}
              >
                <Link to="/about">about me</Link>.
              </span>
            </P>
          </HeroBody>
        </Container>
      </HeroContainer>
    )}
  </Spring>
)

export default Hero
