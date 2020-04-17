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
        basePath: `/blog`,
      },
    },
  ],
}
