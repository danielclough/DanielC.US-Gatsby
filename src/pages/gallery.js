import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"
import Img from "gatsby-image"

import '../assets/css/main.css';
import "../assets/css/normalize.css"
import "../assets/css/layout.css"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
    <main className="side-margin">
      <SEO
        title="Posts"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
        {/* <Bio /> */}
        {data.site.siteMetadata.description && (
          <header className="page-head">
            <Img fluid={data.file.childImageSharp.fluid} />
          </header>
        )}
        <div className="post-feed">
          {posts.map(({ node }) => {
            postCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={postCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </div>
      </main>
    </Layout>
  )
}
const indexQuery = graphql`
  query {
    file (relativePath: { eq: "DCP-logo-white.png" }) {
      childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
