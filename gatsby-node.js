const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                template
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
          allWordpressPost {
            edges {
              node {
                title
                slug
                date(formatString: "MMMM DD, Y")
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
        console.log('page')

        if (node.template != '') {
          const templateSlug = node.slug
            .replace('.php', '')
            .replace('page-', '')

          createPage({
            path: node.slug,
            component: path.resolve(`./src/pages/${templateSlug}.js`),
            context: {
              slug: node.slug,
            },
          })
        } else {
          createPage({
            path: node.slug,
            component: path.resolve('./src/pages/page.js'),
            context: {
              slug: node.slug,
            },
          })
        }
      })

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve('./src/pages/Post.js'),
          context: {
            slug: node.slug,
          },
        })
      })

      result.data.allWordpressWpCaseStudies.edges.forEach(({ node }) => {
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
