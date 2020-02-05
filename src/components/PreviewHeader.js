import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { H4 } from 'src/components/Global/Typography'

const PreviewHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.125rem 0 0.875rem;
`

const PreviewHeaderTitle = styled(H4)`
  font-variant: small-caps;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.08em;
  font-size: ${({ theme }) => theme.fontSize.small};

  &:after {
    content: '';
    display: inline-block;
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.color.text};
    margin-bottom: 0.25rem;
    margin-left: 1rem;
    font-variant: small-caps;
    font-weight: 500;
  }
`

const PreviewHeaderLink = styled(Link)`
  color: ${({ theme }) => theme.color.textLight};
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  font-weight: 600;
  text-transform: uppercase;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.1em;
  transition: ${({ theme }) => theme.transition.short};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;

  &:after {
    content: '+';
    font-weight: bold;
    margin-left: 0.25rem;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.text};
  }
`

const PreviewHeader = ({ title, link }) => {
  const text = `More ${title}`
  return (
    <PreviewHeaderContainer>
      <PreviewHeaderTitle>{title}</PreviewHeaderTitle>
      <PreviewHeaderLink to={link}>
        {text}
      </PreviewHeaderLink>
    </PreviewHeaderContainer>
  )
}

export default PreviewHeader

PreviewHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
