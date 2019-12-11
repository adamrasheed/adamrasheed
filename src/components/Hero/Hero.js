import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Spring } from 'react-spring'
import { Color, animationValues } from 'src/utils/Styles'
import { P, font } from 'src/utils/Typography'

import Container from '../Container'
import HeroTitle from './HeroTitle'
import HeroContainer from './HeroContainer'

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

const Hero = ({
  tagline,
  specialize,
  career,
  hideCareer,
}) => (
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
            {!hideCareer && career && (
              <P
                dangerouslySetInnerHTML={{
                  __html: career,
                }}
              />
            )}
            <P>
              I&lsquo;m also taking on select freelance projects. Wanna see if we’d be
              a good fit?
              <br />
              Learn more
              <span
                className="ib"
                style={{ marginLeft: '0.35rem', fontFamily: font.body }}
              >
                <Link to="/about">about me</Link>
.
              </span>
            </P>
          </HeroBody>
        </Container>
      </HeroContainer>
    )}
  </Spring>
)

export default Hero

Hero.propTypes = {
  tagline: PropTypes.string.isRequired,
  specialize: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  hideCareer: PropTypes.bool.isRequired,
}
