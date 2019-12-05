import React from 'react'
import { H4, P, A } from 'src/utils/Typography'
import digitalOceanLogo from 'src/images/Digital-Ocean-Logo.png'
import { DIGITAL_OCEAN_AFFILIATE_LINK } from 'src/constants/affiliateLinks'
import ButtonALink from '../ButtonALink'
import AdContainer from './AdContainer'


const DigitalOceanAd = props => (
  <AdContainer>
    <a href={DIGITAL_OCEAN_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
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
      <A href={DIGITAL_OCEAN_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
        Get a DigitalOcean starting at $5/Month!
      </A>
    </H4>
    <P small style={{ marginBottom: `1rem` }}>
      Host your WordPress backend on a lightning-fast SSD-based VPS hosting
      solution.
      {' '}
      <strong>I only pay $5/mo. for mine!</strong>
    </P>
    <ButtonALink
      href={DIGITAL_OCEAN_AFFILIATE_LINK}
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
