const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
              }
            }
          }
          allWordpressWpCaseStudies {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPage.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/pages/page.js'),
          context: {
            slug: node.slug,
          },
        })
      })

      result.data.allWordpressWpCaseStudies.edges.forEach(({ node }) => {
        console.log(node);
        createPage({
          path: `case-studies/${node.slug}`,
          component: path.resolve('./src/pages/case-study.js'),
          context: {
            slug: node.slug,
          },
        })
      })

      resolve()
    })
  })
}
