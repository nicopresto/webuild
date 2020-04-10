# Gatsby-starter-monorepo

This repo is designed as a starter for GatsbyJS web projects in monorepos combining Lerna, Yarn Workspaces, and Gatsby (plugins, starter, and themes).

It is derived from a fusion of:
* [Gatsby blog post on how to publish multiple sites]
(https://www.gatsbyjs.org/blog/2019-01-01-publish-multiple-gatsby-sites/)
* [Lerna documenation](https://lerna.js.org/)
* Jason Lengstorf's lessons on building a theme via [Gatsby Docs](https://www.gatsbyjs.org/tutorial/building-a-theme/) and [Egghead Tutorial](https://egghead.io/courses/gatsby-theme-authoring)

This repo differs from the [Gatsby starter theme workspace](https://www.gatsbyjs.org/docs/themes/building-themes/) with a monorepo structure that puts the projects in the packages directory plus the addition of Lerna.

## Structure
I will be using this starter to build monorepo websites. This starter has:

Packages/

| site

| theme

An example of a monorepo web site might have:

Packages/

| site (with MD/MDX docs, images, content)

| shared-ui (styling)

| blog

| CMS

| notes

| docs-viewer

Each package can host separate capabilities of the website (e.g. the blog), including combinations of Gatsby themes, starters, and plugins. The site contains the content, mostly as Markdown.

## Connections
Packages can be added to "site":
```
yarn workspace site add theme@"*"
```

They can also listen on different ports via dotenv files:
```
yarn run:all
```

## Terminology
**Lerna** is a useful tool for managing dependencies across multiple Packages in monorepos

**Yarn** workspaces is a tool for managing packages in monorepos

**Monorepos** are a combination of multiple packages managed in one repository.
