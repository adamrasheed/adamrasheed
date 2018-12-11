import styled from 'styled-components'
import { Color } from './Styles'

const font = {
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
  large: '1.25rem',
}

export const lineHeight = {
  paragraph: '24px',
  body: '1.4',
  heading: '1.2',
}

export const H1 = styled.h1`
  font-family: ${font.heading};
  color: ${Color.text};
`
export const H2 = styled.h2`
  color: ${Color.text};
  font-family: ${font.subheading};
  font-size: 1.5rem;
  line-height: 2rem;
`

export const H3 = styled.h3`
  color: red;
  font-family: ${font.subheading};
  font-size: 1.125rem;
  line-height: 1.25rem;
`

export const H4 = styled.h4`
  color: ${Color.text};
  font-family: ${font.subheading};
`

export const H5 = styled.h5`
  color: ${Color.text};
  font-family: ${font.subheading};
`

export const P = styled.p`
  color: ${Color.text};
  font-family: ${font.body};
  font-size: ${fontSize.body};
  line-height: 24px;
`
