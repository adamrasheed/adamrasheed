import React from 'react'
import styled from 'styled-components'
import { MediaScreen } from '../../utils/Styles'
import { H2, fontSize } from '../../utils/Typography'
import StyledLink from '../../components/Global/StyledLink'

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

class PreviewPost extends React.Component {
  render() {
    const { title, link } = this.props
    return (
      <Preview>
        <PreviewTitle>
          <StyledLink to={link} dangerouslySetInnerHTML={{ __html: title }} />
        </PreviewTitle>
        <PostMeta />
      </Preview>
    )
  }
}

export default PreviewPost
