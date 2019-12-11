import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize, font } from '../../utils/Typography'

const StyledPostMeta = styled.span`
  font-family: ${font.body};
  font-size: ${fontSize.small};
  font-weight: 300;
  letter-spacing: 0.05em;
  font-variant: small-caps;
  text-transform: lowercase;
`

const PostMeta = ({ date }) => <StyledPostMeta>{date}</StyledPostMeta>

export default PostMeta

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
}
