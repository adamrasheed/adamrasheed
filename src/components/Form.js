import React, { Component } from 'react'
import styled from 'styled-components'
import { ConvertKit } from '../API'
import { Color, transition, MediaScreen } from '../utils/Styles'
import { fontSize, P } from '../utils/Typography'

const Label = styled.label`
  font-size: ${fontSize.extraSmall};
  line-height: 1;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.05em;
  color: ${Color.text};
  display: block;
  margin-bottom: 0.35rem;
`

const Input = styled.input`
  display: block;
  box-shadow: inset 0 0 0 1px ${Color.textLight};
  border: none;
  font-size: ${fontSize.base};
  line-height: 1;
  padding: 6px 10px;
  margin-bottom: 1rem;
  width: 100%;

  &:focus {
    box-shadow: inset 0 0 0 1px ${Color.text};
    outline: 0;
  }

  @media screen and (min-width: ${MediaScreen['screen-med-lg']}) {
    max-width: 16rem;
  }
`

const Button = styled.button`
  font-size: ${fontSize.base};
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  font-variant-caps: all-small-caps;
  background: ${props =>
    props.cta ? Color.Btn.primary.regular : Color.Btn.secondary.regular};
  color: ${Color.text};
  text-decoration: none;
  padding: 0.5rem 2.5rem 0.6rem;
  text-align: center;
  display: block;
  border: none;
  transition: ${transition.medium};
  margin: 1.5rem 0 1rem;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    background: ${props =>
      props.cta ? Color.Btn.primary.hover : Color.Btn.secondary.hover};
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
    } else if (messageState === 'success') {
      return `color: ${Color.text}`
    }
  }};
`

class Form extends Component {
  state = {
    first_name: '',
    email: '',
    endPoint: ``,
    formStatus: null,
    formMessage: null,
  }

  componentDidMount() {
    this.setState({
      endPoint: ConvertKit(this.props.formId),
      formStatus: null,
      formMessage: null,
    })
  }

  handleSubmit = event => {
    console.log('form submitted')
    this.submitToCk(this.state)
    event.preventDefault()
  }

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
        data.error
          ? this.setState({
              formStatus: 'error',
              formMessage: data.message,
            })
          : this.setState({
              formStatus: 'success',
              formMessage: `Thanks ${
                data.subscription.subscriber.first_name
              }! Please check your email for confirmation.`,
            })
      })
      .then(() => {
        this.setState({
          first_name: ``,
          email: ``,
        })
      })
      .catch(err => console.log(err.message))
  }

  handleChange = event => {
    const { target } = event
    const { value, name } = target
    if (name === 'email') {
      this.setState({ email: value })
    } else if (name === 'name') {
      this.setState({ first_name: value })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor="nameInput">First Name</Label>
        <Input
          value={this.state.first_name}
          type="text"
          id="nameInput"
          name="name"
          onChange={this.handleChange}
        />
        <Label htmlFor="nameInput">Email</Label>
        <Input
          value={this.state.email}
          type="email"
          id="emailInput"
          name="email"
          placeholder="johndoe@gmail.com"
          onChange={this.handleChange}
        />
        <Button cta>Sign Up</Button>
        {this.state.formMessage && (
          <Msg small messageState={this.state.formStatus}>
            {this.state.formMessage}
          </Msg>
        )}
      </form>
    )
  }
}

export default Form
