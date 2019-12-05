import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Form'
import { MediaScreen, ContainerSize } from '../../utils/styles'
import { H3, P } from '../../utils/Typography'

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
    <H3>
      {title || `Like this Post? Get helpful Articles like this in Your Inbox!`}
    </H3>
    <P>
      {subtitle || `Sign Up today to get Twice Monthly Articles`}
    </P>
    <Form formId={formId || null} />
  </Cta>
)

export default PostCta

PostCta.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
}
