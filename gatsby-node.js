const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "src": path.resolve(__dirname, './src')
      },
    },
  })
}

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
      `,
    ).then(result => {
      if (result.errors) {
        console.log('there are some errors')
        debugger;
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
            component: path.resolve(`src/templates/${templateSlug}.js`),
            context: {
              slug: node.slug,
            },
          })
        } else {
          createPage({
            path: node.slug,
            component: path.resolve('./src/templates/page.js'),
            context: {
              slug: node.slug,
            },
          })
        }
      })

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: 'src/templates/post.js',
          context: {
            slug: node.slug,
          },
        })
      })

      result.data.allWordpressWpCaseStudies.edges.forEach(({ node }) => {
        debugger;
        createPage({
          path: `case-studies/${node.slug}`,
          component: path.resolve('./src/templates/case-study.js'),
          context: {
            slug: node.slug,
          },
        })
      })

      resolve()
    })
  })
}
