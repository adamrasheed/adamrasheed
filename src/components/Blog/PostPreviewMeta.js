import React from 'react'
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

const PostMeta = props => <StyledPostMeta>{props.date}</StyledPostMeta>

export default PostMeta
