const activeEnv = process.env.ACTIVE_ENV | "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/`,
        contentPath:`../../data/blog`,
        assetPath:`../../data/`
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/../content/`,
    //   },
    // },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My  Blog`,
    author: `nicopresto`,
    description: `all sorts of stuff`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nicopresto`,
      },
      {
        name: `github`,
        url: `https://github.com/nicopresto`,
      },
    ],
  },
}
