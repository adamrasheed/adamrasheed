import styled from 'styled-components'
import { Color } from './Styles'

export const font = {
  heading: `-apple-system-headline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  subheading: `-apple-system-subheadline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  smallSubheading: `-apple-system-short-subheadline, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
}

export const fontSize = {
  base: '16px',
  body: '14px',
  small: '0.875rem',
  extraSmall: `0.75rem`,
  mediumLarge: `1.125rem`,
  large: '1.25rem',
}

export const lineHeight = {
  paragraph: '24px',
  body: '1.4',
  heading: '1.2',
}

export const H1 = styled.h1`
  font-family: ${font.heading};
  font-weight: 700;
  color: ${Color.text};
`
export const H2 = styled.h2`
  color: ${Color.text};
  font-family: ${font.subheading};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`

export const H3 = styled.h3`
  color: ${Color.text};
  font-family: ${font.subheading};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25rem;
`

export const H4 = styled.h4`
  font-family: ${font.subheading};
  font-weight: 700;
  color: ${Color.text};
`

export const H5 = styled.h5`
  font-family: ${font.subheading};
  font-weight: 600;
  color: ${Color.text};
`

export const P = styled.p`
  color: ${Color.text};
  font-family: ${font.body};
  font-size: ${props => (props.small ? fontSize.small : fontSize.body)};
  line-height: ${props => (props.small ? '1.4' : '24px')};
  font-weight: ${props => (props.small ? '300' : '400')};

  span {
    font-size: ${props => (props.small ? fontSize.small : fontSize.body)};
    line-height: ${props => (props.small ? '1.4' : '24px')};
    font-weight: ${props => (props.small ? '300' : '400')};
  }

  a {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 40%;
      width: 120%;
      top: 60%;
      left: -5%;
      z-index: -1;
      background: ${Color.accent};
      opacity: 0;
      clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
      transition: all 0.15s ease-in-out;
    }
    &:focus,
    &:hover {
      text-decoration: none !important;
      &:after {
        color: white !important;
        opacity: 1;
      }
    }
  }
`

export const A = styled.a`
  color: ${Color.text};
  text-decoration: ${props => (props.underline ? `underline` : 'none')};
  display: ${props => (props.block ? `block` : `inherit`)};
`

export const AccentLink = styled.a`
  position: relative;
  color: ${Color.text};
  display: ${props => (props.full ? `block` : `inline-block`)};
  text-decoration: none !important;
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: ${props => (props.full ? `85%` : `40%`)};
    width: 120%;
    bottom: ${props => (props.full ? `-20%` : `-15%`)};
    left: -5%;
    z-index: -1;
    background: ${Color.accent};
    opacity: 0;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    transition: all 0.15s ease-in-out;
  }
  &:focus,
  &:hover {
    text-decoration: none !important;
    &:after {
      color: white !important;
      opacity: 1;
    }
  }
`
