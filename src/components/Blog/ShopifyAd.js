import React from 'react'
import { H4, P, A } from '../../utils/Typography'
import ButtonALink from '../ButtonALink'
import AdContainer from './AdContainer'
import shopifyImg from '../../images/shopify_logo_whitebg.svg'

const affiliateLink = `https://www.shopify.com/?ref=creatix-online-marketing&utm_campaign=Personal%20Site%20Ad&utm_medium=Blog&utm_source=adamrasheed.com`

const ShopifyAd = props => (
  <AdContainer>
    <img
      style={{
        maxWidth: `160px`,
        display: `block`,
        margin: `0.5rem 0 1.25rem`,
      }}
      src={shopifyImg}
      alt=""
    />
    <H4 style={{ marginBottom: `0.625rem` }}>
      <A href={affiliateLink} target="_blank" rel="noopener noreferrer">
        Get Started With Shopify Today!
      </A>
    </H4>
    <P small style={{ marginBottom: `1rem` }}>
      Get started with Shopify and level up your eCommerce business! Start your
      free trial today.
    </P>
    <ButtonALink
      href={affiliateLink}
      style={{
        background: '#96bf48',
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

export default ShopifyAd
