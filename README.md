# Web builder (WeBuild)

This is a website builder repo that uses monorepos combining Lerna, Yarn Workspaces, and Gatsby (plugins, starter, and themes).

It is based on Gatsby-starter-monorepo, derived from a fusion of:
* [Gatsby blog post on how to publish multiple sites]
(https://www.gatsbyjs.org/blog/2019-01-01-publish-multiple-gatsby-sites/)
* [Lerna documenation](https://lerna.js.org/)
* Jason Lengstorf's lessons on building a theme via [Gatsby Docs](https://www.gatsbyjs.org/tutorial/building-a-theme/) and [Egghead Tutorial](https://egghead.io/courses/gatsby-theme-authoring)

## Structure
This monorep has:

Packages/

| site (with MD/MDX docs, images, content)

| shared-ui (styling)

| blog

| CMS (may be combined with site as theme)

| notes

| guides (doc-viewer)
