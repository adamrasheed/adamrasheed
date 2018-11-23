import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';


const IndexPage = ({ data }) => (
  <Layout>
    <Hero tagline={data.site.siteMetadata.tagLine} specialize={data.site.siteMetadata.specialize} career={data.site.siteMetadata.career} />
  </Layout>
)
export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        tagLine
        specialize
        career
      }
    }
  }
`