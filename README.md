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

## Add a new theme package to starter
```
mkdir packages/my_theme
cd my_theme
```

Create package.json
```
{
  "name": "my_theme",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "clean": "gatsby clean",
    "develop": "gatsby develop"
  }
}
```

Make my_theme/index.js
```
//boop
```

Navigate up to root and add packages
```
cd ..
yarn workspace my_theme add -P gatsby react react-dom
yarn workspace my_theme add -D gatsby react react-dom

yarn workspace site add my_theme@"*"
```

Add to new theme to root scripts in package.Jason
```
  "scripts": {
    "run:site": "cd packages/site && yarn develop",
    "run:theme": "cd packages/theme && yarn develop",
    "run:theme": "cd packages/my_theme && yarn develop",
    "run:all": "npm-run-all --parallel run:site run:theme run:my_theme"
    }
```

## Connections
Packages can be added to "site":
```
yarn workspace site add my_theme@"*"
```

They can also listen on different ports via dotenv files:
```
yarn run:all
```

NOTE: this is just a starter, there is no content, so 'gatsby develop' will return a 404, which shows it is working.

You can check that the 'theme' package is being picked up by 'site' with:
```
yarn workspaces info
```

## Common errors
* You need to ensure that you are referencing packages by their name in package.json.

## Terminology
**Lerna** is a useful tool for managing dependencies across multiple Packages in monorepos

**Yarn** workspaces is a tool for managing packages in monorepos

**Monorepos** are a combination of multiple packages managed in one repository.
