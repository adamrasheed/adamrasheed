import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  MediaScreen, Color, transition, brandColors,
} from 'src/utils/Styles'
import { fontSize } from 'src/utils/Typography'

library.add(fab)

const SocialItem = styled.li`
  display: inline-block;
`

const SocialLink = styled.a`
  text-decoration: none;
`

const SocialIcon = styled(FontAwesomeIcon)`
  color: ${Color.text};
  font-size: ${fontSize.large};
  margin: 0 1rem;
  transition: ${transition.short};

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin: 0 0 0 2rem;
  }

  &:hover {
    color: ${props => (props.color ? brandColors[`${props.color}`] : Color.textLight)};
  }
`

const Social = ({ social }) => (
  <ul>
    {social?.map((account, i) => {
      const socialHandle = account.account.toLowerCase()
      return (
        <SocialItem key={i}>
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
  </ul>
)

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

export default Social
