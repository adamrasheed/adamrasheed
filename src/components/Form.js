import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ConvertKit from 'src/constants/API'
import { P } from 'src/components/Global/Typography'

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  line-height: 1;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  display: block;
  margin-bottom: 0.35rem;
`

const Input = styled.input`
  display: block;
  box-shadow: inset 0 0 0 1px
    ${props => (
    props.status === `error`
      ? `red`
      : props.theme.color.textLight
  )};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1;
  padding: 6px 10px;
  margin-bottom: 1rem;
  width: 100%;

  &:focus {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.text};
    outline: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen['screen-med-lg']}) {
    max-width: 16rem;
  }
`

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  font-variant-caps: all-small-caps;
  background: ${props => (
    props.cta
      ? props.theme.color.btn.primary.regular
      : props.theme.color.btn.secondary.regular
  )};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  padding: 0.5rem 2.5rem 0.6rem;
  text-align: center;
  display: block;
  border: none;
  transition: ${({ theme }) => theme.transition.medium};
  margin: 1.5rem 0 1rem;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    background: ${props => (
    props.cta
      ? props.theme.color.btn.primary.hover
      : props.theme.color.btn.secondary.hover
  )};
  }
`

const Msg = styled(P)`
  margin-top: 1.25rem;
  margin-bottom: 0 !important;
  line-height: 1.25 !important;
  font-variant-caps: all-small-caps;
  ${({ messageState }) => {
    if (messageState === 'error') {
      return `color: red`
    }
    return `color: ${({ theme }) => theme.color.text}`
  }};
`

class Form extends Component {
  state = {
    first_name: ``,
    email: ``,
    endPoint: ``,
    formStatus: null,
    formMessage: null,
  }

  componentDidMount() {
    const { formId } = this.props
    this.setState({
      endPoint: ConvertKit(formId),
      formStatus: null,
      formMessage: null,
    })
  }

  handleSubmit = event => {
    // eslint-disable-next-line no-console
    console.log('form submitted')
    this.submitToCk(this.state)
    event.preventDefault()
  }

  // eslint-disable-next-line camelcase
  submitToCk = ({ first_name, email, endPoint }) => {
    fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first_name, email }),
    })
      .then(response => response.json())
      .then(data => {
        const { message, subscription, error } = data
        const name = subscription.subscriber.first_name
        return error
          ? this.setState({
            formStatus: 'error',
            formMessage: message,
          })
          : this.setState({
            formStatus: 'success',
            formMessage: `Thanks ${
              name
              }! Please check your email for confirmation.`,
          })
      })
      .then(() => {
        this.setState({
          first_name: ``,
          email: ``,
        })
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err.message))
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value, formStatus: null })
  }

  render() {
    const {
      first_name: firstName,
      email,
      formStatus,
      formMessage,
    } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor="nameInput">First Name</Label>
        <Input
          value={firstName}
          type="text"
          id="nameInput"
          name="first_name"
          onChange={this.handleChange}
        />
        <Label htmlFor="nameInput">Email*</Label>
        <Input
          value={email}
          status={
            formStatus && formStatus === `error`
            && `error`
          }
          type="email"
          id="emailInput"
          name="email"
          placeholder="johnDoe@gmail.com"
          onChange={this.handleChange}
        />
        <Button cta>Sign Up</Button>
        {formMessage && (
          <Msg small messageState={formStatus}>
            {formMessage}
          </Msg>
        )}
      </form>
    )
  }
}

export default Form

Form.propTypes = {
  formId: PropTypes.string.isRequired,
}
