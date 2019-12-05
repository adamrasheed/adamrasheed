import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MediaScreen } from 'src/utils/styles'
import { H2, fontSize } from 'src/utils/Typography'
import StyledLink from '../Global/StyledLink'

const Preview = styled.div`
  margin-bottom: 25px;

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    flex: 50%;
    max-width: 50%;

    min-height: 6.25rem;

    display: flex;
    flex-direction: column;

    &:nth-of-type(odd) {
      padding-right: 1rem;
    }
    &:nth-of-type(even) {
      padding-left: 1rem;
    }
  }
`
const PreviewTitle = styled(H2)`
  line-height: 32px;
  font-size: 20px;
  margin-bottom: 0.325rem;
`

const PostMeta = styled.div`
  font-size: ${fontSize.small};
  font-weight: 300;
  letter-spacing: 0.05em;
  font-variant: small-caps;
  text-transform: lowercase;
`

const PreviewPost = ({ title, link }) => (
  <Preview>
    <PreviewTitle>
      <StyledLink to={link} dangerouslySetInnerHTML={{ __html: title }} />
    </PreviewTitle>
    <PostMeta />
  </Preview>
)

export default PreviewPost

PreviewPost.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
