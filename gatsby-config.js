module.exports = {
  siteMetadata: {
    title: `WDever.dev`,
    author: `WDever`,
    description: `About My Development`,
    authorDescription: '더 나은 코드를 위해 노력하는 개발자입니다.',
    name: '최민규',
    siteUrl: `https://WDever.dev/`,
    repo: 'WDever/WDever.dev',
    social: {
      instagram: 'https://www.instagram.com/_m1n_9_/',
      eMail: 'wdever0279@gmail.com',
      gitHub: 'github.com/wdever',
      blog: 'WDever.dev',
      buyMeACoffee: 'WDever',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-163923948-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4470ff`,
        display: `minimal-ui`,
        icon: `content/assets/wdever-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-feed`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
