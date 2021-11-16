import styled from 'styled-components'

const ButtonALink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1;
  font-variant-caps: all-small-caps;
  background: ${({ theme }) => theme.color.btn.secondary.regular};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  padding: 0.5rem 1rem 0.6rem;
  text-align: center;
  display: block;
  max-width: 10rem;
  transition: ${({ theme }) => theme.transition.short};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.color.btn.secondary.hover};
    text-decoration: none;
  }
`

export default ButtonALink
