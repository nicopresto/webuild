import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li><Link to="/">Go to homepage</Link></li>
      <li><a href={process.env.BLOG_URL}>Go to Blog</a></li>
      <li><a href={process.env.BLOG_URL}>Go to Notes</a></li>
      <li><a href={process.env.BLOG_URL}>Go to Site</a></li>
    </ul>
  </Layout>
)

export default SecondPage
