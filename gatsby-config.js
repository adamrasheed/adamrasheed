module.exports = {
  siteMetadata: {
    title: 'Adam Rasheed',
    jobTitle: `Front-end Developer`,
    siteUrl: `https://adamrasheed.com`,
    tagLine: `I’m a Front-end Developer based in <br>San Diego, CA 🏖.`,
    specialize: `I specialize in Custom Wordpress and Shopify projects and am learning React.`,
    career: `Currently working as a Front-end Developer at <a href="https://www.bvaccel.com/" target="_blank" rel="nofollow noopener">BVAccel</a>. Previously at <a href="https://www.blenderseyewear.com/" target="_blank" rel="nofollow noopener">Blenders</a>.`,
    social: {
      twitter: `https://twitter.com/ARasheedPhoto`,
      instagram: `https://www.instagram.com/hashtagadam/`,
      github: `https://github.com/adamrasheed`,
      dribbble: `https://dribbble.com/adamrasheed`,
      youtube: `http://bit.ly/SketchVids`
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
      }
    }
  ],
}
