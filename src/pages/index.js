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
        allMarkdownRemark(limit: 4, sort: { fields: frontmatter___date, order: DESC }) {
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
      <StaticImage src="../images/2019choirFUN.jpg" alt="SCC fun pose"  />
{/*       
      <ul>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/performances/">Performances</Link></li>
        <li><Link to="/join/">Join</Link></li>
        <li><Link to="/calendar/">Calendar</Link></li>
      </ul> */}
      <div className="info" >

        <RecentTweet />
        <div style = {{width: `25%`}} ></div>
        <div className="news" style={{ marginTop:`0.5em`}}>
          <h2 style={{fontSize:`1.25em`, fontWeight: `400`, letterSpacing:`0.5px`}} >Latest News</h2>
          <ul style={{listStyle: `none`}}>
              {data.allMarkdownRemark.edges.map(edge => {
                return (
                  <li key={edge.node.id}>
                    <p style={{marginBottom: `0em`}}>
                      <Link style={{textDecoration: `none`, color: `black`}} to={`/posts/${edge.node.fields.slug}/`}>
                        {edge.node.frontmatter.title}
                      </Link>
                    </p>
                    <div style={{marginBottom: `1.5em`}}>
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
        
        
     
      </div>
    </Layout>
)
}

export default IndexPage
