import React from "react"
import _ from "lodash";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../assets/css/main.css';
import "../assets/css/normalize.css"
import "../assets/css/layout.css"

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.distinct
  
  return (
    <Layout title={siteTitle}>
      <SEO
        title="Tags"
      />
    <main className="side-margin">
      <header className="tag-page-head">
          <h1 className="page-head-title">Tags({tags.length})</h1>
      </header>
    <article className="post-content">
      <div className="tag-container">
        {tags.map( tag => {
          return(
              <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
              >
              <div className="tag-item">#{tag}</div>
              </Link>
            )
          })}
        </div>
    </article>
    </main>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <TagIndex props data={data} />
    )}
  />
)
