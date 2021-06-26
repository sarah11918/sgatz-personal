import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import RecentTweet from "../components/twitter"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
              }
              id
              fields {
                slug
              }
            }
          }
        }
        
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <StaticImage src="../images/SCC2019FUN.jpg" alt="SCC fun pose"  />
      
      <ul>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/performances/">Performances</Link></li>
        <li><Link to="/join/">Join</Link></li>
        <li><Link to="/calendar/">Calendar</Link></li>
      </ul>

      <div style={{width: `80%`}}>
        <h2 style={{fontSize:`1.35em`, letterSpacing:`0.5px`}} >Latest News</h2>
        <ul style={{listStyle: `none`}}>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <li key={edge.node.id}>
                  <p style={{marginBottom: `0em`}}>
                    <Link style={{textDecoration: `none`, color: `black`}} to={`/posts/${edge.node.fields.slug}/`}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </p>
                  <div>
                    <span style={{fontSize: `0.75em`}}>
                      {edge.node.frontmatter.date}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
          <span style={{border: `1px solid gray`, padding: `0.5em 1.2em`, letterSpacing: `0.5px`, fontWeight: `300`}} ><Link style={{textDecoration: `none`, color: `black`}} to="/blog">More News {`>>`}</Link></span>
      </div>
      <RecentTweet />

    </Layout>
)
}

export default IndexPage
