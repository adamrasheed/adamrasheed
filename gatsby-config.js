module.exports = {
  siteMetadata: {
    title: 'Adam Rasheed',
    jobTitle: `Front-end Developer`,
    siteUrl: `https://adamrasheed.com`,
    tagLine: `I’m a Front-end Developer based in <br>San Diego, CA 🏖.`,
    social: [
      { account: 'twitter', url: `https://twitter.com/ARasheedPhoto` },
      { account: 'instagram', url: `https://www.instagram.com/hashtagadam/` },
      { account: 'github', url: `https://github.com/adamrasheed` },
      { account: 'dribbble', url: `https://dribbble.com/adamrasheed` },
      { account: 'youtube', url: `http://bit.ly/SketchVids` },
    ],
  },
  plugins: [
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
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
