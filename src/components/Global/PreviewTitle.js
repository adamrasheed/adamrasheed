import styled from 'styled-components'
import { fontSize, font } from '../../utils/Typography'
import { Color, MediaScreen } from '../../utils/styles'

const PreviewTitle = styled.div`
  font-family: ${font.body};
  font-variant: small-caps;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.08em;
  margin-bottom: ${(props) => (props.sidebar ? '1.25rem' : '0')};
  font-size: ${(props) => (props.extraSmall || props.small ? fontSize.small : fontSize.body)};
  font-weight: ${(props) => (props.small || props.extraSmall ? '600' : '500')};
  flex: ${(props) => (props.flex100 ? '100%' : 'auto')};

  &:after {
    content: '';
    display: inline-block;
    width: 32px;
    height: ${(props) => (props.small || props.extraSmall ? '1px' : '2px')};
    background: ${Color.text};
    margin-bottom: ${(props) => (props.extraSmall ? '0.2rem' : '0.25rem')};
    margin-left: ${(props) => (props.small || props.extraSmall ? '0.75rem' : '1rem')};
    font-variant: small-caps;
  }

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    &:after {
      width: ${(props) => (props.extraSmall ? '24px' : '64px')};
      margin-left: 0.875rem;
    }
  }
  @media screen and (min-width: ${MediaScreen['screen-med-lg']}) {
    &:after {
      width: ${(props) => (props.extraSmall ? '32px' : '64px')};
      margin-left: 1rem;
    }
  }
`

export default PreviewTitle
