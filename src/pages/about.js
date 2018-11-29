import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import AboutInfoCategory from '../components/About/AboutInfo'

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    return(
      <Layout>
        <h1 className="page-title">{data.wordpressPage.title}</h1>
        { data.wordpressPage.featured_media ?  <Img className="page-image about__img" fluid={data.wordpressPage.featured_media.localFile.childImageSharp.fluid}/> : null}
        <div className="container about__container">
          <div className="about__body">
            <h2 className="about__title" dangerouslySetInnerHTML={{
              __html: data.wordpressAcfOptions.options.tagline
            }}/>
            <div className="about__bio" dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}/>
          </div>
    
          <div className="about__links">
           <AboutInfoCategory title="Talks" content={data.wordpressPage.acf.talks}/>
           <AboutInfoCategory title="Education" content={data.wordpressPage.acf.education}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const query = graphql`
  query AboutQuery{
    wordpressAcfOptions {
      options {
        tagline
      }
    }
    wordpressPage(slug: { eq: "about"}) {
      id
      title
      template
      slug
      content
      acf {
        talks {
          title
          url
          description
        }
        education {
          title
          url
          description
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

