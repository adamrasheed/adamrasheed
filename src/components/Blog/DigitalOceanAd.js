import React from 'react'
import { H4, P, A } from '../../utils/Typography'
import ButtonALink from '../ButtonALink'
import digitalOceanLogo from '../../images/Digital-Ocean-Logo.png'
import AdContainer from './AdContainer'
const affiliateLink = `https://m.do.co/c/73cb4550a3de`

const DigitalOceanAd = props => (
  <AdContainer>
    <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
      <img
        style={{
          maxWidth: `160px`,
          display: `block`,
          margin: `0.5rem auto`,
        }}
        src={digitalOceanLogo}
        alt=""
      />
    </a>
    <H4 style={{ marginBottom: `0.625rem` }}>
      <A href={affiliateLink} target="_blank" rel="noopener noreferrer">
        Get a DigitalOcean starting at $5/Month!
      </A>
    </H4>
    <P small style={{ marginBottom: `1rem` }}>
      Host your WordPress backend on a lightning-fast SSD-based VPS hosting
      solution. <strong>I only pay $5/mo. for mine!</strong>
    </P>
    <ButtonALink
      href={affiliateLink}
      style={{
        background: '#0080FF',
        display: `block`,
        margin: `1.5rem 0 1rem`,
        width: `100%`,
        color: `white`,
      }}
    >
      Learn More
    </ButtonALink>
  </AdContainer>
)

export default DigitalOceanAd
