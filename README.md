This repo is designed as a starter for GatsbyJS web projects in monorepos that combine Lerna, Yarn Workspaces, and Gatsby-themes.

It is derived from a fusion of:
* [Gatsby blog post on how to publish multiple sites]
(https://www.gatsbyjs.org/blog/2019-01-01-publish-multiple-gatsby-sites/)
* [Lerna documenation](https://lerna.js.org/)
* Jason Lengstorf's lessons on building a theme via [Gatsby Docs](https://www.gatsbyjs.org/tutorial/building-a-theme/) and [Egghead Tutorial](https://egghead.io/courses/gatsby-theme-authoring)


It differs from the [Gatsby starter theme workspace](https://www.gatsbyjs.org/docs/themes/building-themes/) with the monorepo structure of projects in the packages directory and the addition of Lerna.

I will be using it to build monorepo websites. For example a newly structured site might have:

Packages:
| site (with MD/MDX docs, images, content)
| shared-ui (styling)
| blog
| CMS
| notes
| docs viewer

The packages could either be added to "site" or listen on different ports via dotenv files:

```
yarn workspace site add blog@"*"
```

Each package are separate capability of the website (e.g. the blog), including combinations of Gatsby themes, starters, and plugins. The site contains the content, mostly as Markdown.
