import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from 'src/components/Form'
import { MediaScreen, ContainerSize } from 'src/utils/Styles'
import { H3, P } from 'src/components/Global/Typography'

const Cta = styled.div`
  background: hsla(219, 100%, 15%, 0.025);
  padding: 1rem 4rem 1rem 1rem;
  margin: 2rem auto 1rem;
  flex: 100;
  max-width: ${ContainerSize['container-size']};

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    padding: 3rem;
    margin: 0 auto 3rem;
  }
`
const PostCta = ({ title, subtitle, formId }) => (
  <Cta>
    <H3>{title}</H3>
    <P>{subtitle}</P>
    <Form formId={formId || null} />
  </Cta>
)

export default PostCta

PostCta.defaultProps = {
  title: `Like this Post? Get helpful Articles like this in Your Inbox!`,
  subtitle: `Sign Up today to get Twice Monthly Articles`,
}

PostCta.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  formId: PropTypes.string.isRequired,
}
