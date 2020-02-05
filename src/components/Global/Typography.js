import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
`
export const H2 = styled.h2`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.subheading};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`

export const H3 = styled.h3`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.subheading};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25rem;
`

export const H4 = styled.h4`
  font-family: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
`

export const H5 = styled.h5`
  font-family: ${({ theme }) => theme.font.subheading};
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

export const P = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${props => (props.small ? props.theme.fontSize.small : props.theme.fontSize.body)};
  line-height: ${props => (props.small ? '1.4' : '24px')};
  font-weight: ${props => (props.small ? '300' : '400')};

span {
  font-size: ${props => (props.small ? props.theme.fontSize.small : props.theme.fontSize.body)};
  line-height: ${props => (props.small ? '1.4' : '24px')};
  font-weight: ${props => (props.small ? '300' : '400')};
}

a {
  position: relative;
    &: after {
    content: '';
    display: block;
    position: absolute;
    height: 40 %;
    width: 120 %;
    top: 60 %;
    left: -5 %;
    z-index: -1;
    background: ${({ theme }) => theme.color.accent};
    opacity: 0;
    clip-path: polygon(10 % 0 %, 100 % 0 %, 90 % 100 %, 0 % 100 %);
    transition: all 0.15s ease -in -out;
  }
    &: focus,
    &: hover {
    text-decoration: none!important;
      &: after {
      color: white!important;
      opacity: 1;
    }
  }
}
`

export const A = styled.a`
color: ${({ theme }) => theme.color.text};
text-decoration: ${(props) => (props.underline ? `underline` : 'none')};
display: ${(props) => (props.block ? `block` : `inherit`)};
`

export const AccentLink = styled.a`
position: relative;
color: ${({ theme }) => theme.color.text};
display: ${props => (props.full ? `block` : `inline-block`)};
text-decoration: none!important;
  &: after {
  content: '';
  display: block;
  position: absolute;
  height: ${(props) => (props.full ? `85%` : `40%`)};
  width: 120 %;
  bottom: ${(props) => (props.full ? `-20%` : `-15%`)};
  left: -5 %;
  z-index: -1;
  background: ${({ theme }) => theme.color.accent};
  opacity: 0;
  clip-path: polygon(10 % 0 %, 100 % 0 %, 90 % 100 %, 0 % 100 %);
  transition: all 0.15s ease -in -out;
}
  &: focus,
  &: hover {
  text-decoration: none!important;
    &: after {
    color: white!important;
    opacity: 1;
  }
}
`
