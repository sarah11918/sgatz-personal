import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SCC take 2?!</h1>
    <ul>
      <li><Link to="/blog/">Blog</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/testpage/">Test Page</Link></li>
      <li><Link to="/join/">Join</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
