module.exports = {
  siteMetadata: {
    title: 'Adam Rasheed',
    jobTitle: `Front-end Developer`,
    siteUrl: `https://adamrasheed.com`,
    tagLine: `I’m a Front-end Developer based in <br>San Diego, CA 🏖.`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Adam Rasheed',
        short_name: 'Adam Rasheed',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/adam-rasheed-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `http://192.241.220.143/`,
        protocol: `http`,
        hostingWPCOM: false,
        userACF: true,
        concurrentRequests: 10,
      },
    },
  ],
}
