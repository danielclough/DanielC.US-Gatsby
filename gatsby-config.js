const urljoin = require("url-join")
const path = require(`path`)
const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

let ghostConfig

require('dotenv').config({
  path: `.env`,
});

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
    }
}

/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/
module.exports = {
    siteMetadata: {
        title: config.title,
        author: config.author,
        description: config.description,
        siteUrl: config.url,
        social: {
          twitter: config.twitter,
        },
      },
      plugins: [
      `gatsby-remark-prismjs`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      'gatsby-transformer-json',
      'gatsby-plugin-netlify-cms',
      `gatsby-plugin-postcss`,
      `gatsby-plugin-netlify`,
      `gatsby-remark-prismjs`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-force-trailing-slashes`,
      `gatsby-plugin-offline`,
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-graphql',
        options: {
          typeName: 'GitHub',
          fieldName: 'github',
          url: 'https://api.github.com/graphql',
          headers: {
            Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
          },
          fetchOptions: {},
        },
      },
      {
        resolve: 'gatsby-plugin-nprogress',
        options: {
          color: config.themeColor,
          showSpinner: false,
        },
      },
      {
        resolve: 'gatsby-plugin-favicon',
          options: {
            logo: `${__dirname}/src/assets/images/daniel-byKiko-sm.png`,
            injectHTML: true,
            icons: {
              android: true,
              appleIcon: true,
              appleStartup: true,
              coast: false,
              favicons: true,
              firefox: true,
              twitter: false,
              yandex: false,
              windows: false,
            },
          },
        },
        {
          resolve: `gatsby-transformer-remark`,
            options: {
             plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1360,
                  withWebp: true,
                  showCaptions: true,
                  quality: 75,
                  wrapperStyle: `margin: 7vw 0;`,
                  },
                },
              ],
            },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `gatsby-plugin-purgecss`,
          options: {
            printRejected: true,
            tailwind: true, // Enable tailwindcss support
                develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
            },
        },
        /**
         *  Content Plugins
         */
        {
          resolve: 'gatsby-plugin-react-svg',
          options: {
            rule: {
              include: '/src/assets/images/svg/',
            },
          },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `pages`),
                name: `pages`,
            },
        },
        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/assets/images`,
                name: `images`,
            },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/assets/blog`,
            name: `blog`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/assets/data`,
            name: `data`,
          },
        },
        {
            resolve: `gatsby-source-ghost`,
            options:
                process.env.NODE_ENV === `development`
                    ? ghostConfig.development
                    : ghostConfig.production,
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1360,
            withWebp: true,
            showCaptions: true,
            quality: 75,
            wrapperStyle: `margin: 7vw 0;`,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: `UA-136138335-2`,
        },
      },
        /**
         *  Utility Plugins
         */
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `DanielC.us Blog`,
          short_name: `DanielC.us`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          icon: `daniel-byKiko-sm.png`, // This path is relative to the root of the site.
          background_color: config.backgroundColor,
          theme_color: config.themeColor,
          display: `minimal-ui`,
          legacy: true,
                  query: `
                  {
                      allGhostSettings {
                          edges {
                              node {
                                  title
                                  description
                              }
                          }
                      }
                  }
                `,
              },
          },
          {
              resolve: `gatsby-plugin-feed`,
              options: {
                  query: `
                  {
                      allGhostSettings {
                          edges {
                              node {
                                  title
                                  description
                              }
                          }
                      }
                  }
                `,
                  feeds: [
                      generateRSSFeed(config),
                  ],
              },
          },
          {
              resolve: `gatsby-plugin-advanced-sitemap`,
              options: {
                  query: `
                  {
                      allGhostPost {
                          edges {
                              node {
                                  id
                                  slug
                                  updated_at
                                  created_at
                                  feature_image
                              }
                          }
                      }
                      allGhostPage {
                          edges {
                              node {
                                  id
                                  slug
                                  updated_at
                                  created_at
                                  feature_image
                              }
                          }
                      }
                      allGhostTag {
                          edges {
                              node {
                                  id
                                  slug
                                  feature_image
                              }
                          }
                      }
                      allGhostAuthor {
                          edges {
                              node {
                                  id
                                  slug
                                  profile_image
                              }
                          }
                      }
                  }`,
                  mapping: {
                      allGhostPost: {
                          sitemap: `posts`,
                      },
                      allGhostTag: {
                          sitemap: `tags`,
                      },
                      allGhostAuthor: {
                          sitemap: `authors`,
                      },
                      allGhostPage: {
                          sitemap: `pages`,
                      },
                  },
                  exclude: [
                      `/dev-404-page`,
                      `/404`,
                      `/404.html`,
                      `/offline-plugin-app-shell-fallback`,
                  ],
                  createLinkInHead: true,
                  addUncaughtPages: true,
              },
          },
    ],
}
