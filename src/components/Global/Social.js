import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

const StyledSocial = styled.ul`
  display: grid;
  grid-gap: 2rem;
  width: fit-content;
  margin: 0 auto;
  align-self: center;
`

const SocialItem = styled.li`
  display: block;
`

const SocialLink = styled.a`
  text-decoration: none;
`

const SocialIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.large};
  transition: ${({ theme }) => theme.transition.short};

  &:hover {
    color: ${props => (
    props.color
      ? props.theme.brandColors[`${props.color}`]
      : props.theme.color.textLight
  )
};
  }
`

const Social = ({ social }) => (
  <StyledSocial
    style={{
      gridTemplateColumns: `repeat(${social ?.length}, auto)`,
    }}
  >
    {social ?.map(account => {
      const socialHandle = account.account.toLowerCase()
      return (
        <SocialItem key={account.url.url}>
          <SocialLink
            href={account.url.url}
            target="_blank"
            rel="noopener noreferrer"
            title={account.account}
          >
            <SocialIcon
              color={account.account}
              icon={['fab', socialHandle]}
            />
          </SocialLink>
        </SocialItem>
      )
    })}
  </StyledSocial>
)

export default Social

export const SocialTypes = PropTypes.shape({
  account: PropTypes.string,
  url: PropTypes.shape({
    url: PropTypes.string,
  }),
})

Social.propTypes = {
  social: PropTypes.arrayOf(
    SocialTypes,
  ).isRequired,
}
