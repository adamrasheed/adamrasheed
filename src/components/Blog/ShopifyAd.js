import React from 'react'
import { SHOPIFY_AFFILIATE_LINK } from 'src/constants/affiliateLinks'
import { H4, P, A } from 'src/utils/Typography'
import shopifyImg from 'src/images/shopify_logo_whitebg.svg'
import ButtonALink from '../ButtonALink'
import AdContainer from './AdContainer'

const ShopifyAd = () => (
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
      <A href={SHOPIFY_AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
        Get Started With Shopify Today!
      </A>
    </H4>
    <P small style={{ marginBottom: `1rem` }}>
      Get started with Shopify and level up your eCommerce business! Start your
      free trial today.
    </P>
    <ButtonALink
      href={SHOPIFY_AFFILIATE_LINK}
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
