import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="about-intro"> My photography is awesome. </h2>
          <p>
            This is my Photography Website. <br />
            See the
            <a href="https://photography.danielc.us/details"> details page </a>
            to learn about
            <a href="https://photography.danielc.us/details#copyright">
              {" "}
              usage rights{" "}
            </a>{" "}
            , to
            <a href="https://photography.danielc.us/details#prices"> hire </a>,
            or
            <a href="https://photography.danielc.us/details#contact">
              {" "}
              email{" "}
            </a>{" "}
            me!
          </p>

          <br />

          <p>
            Also, check out
            <a href="https://danielc.us/"> my resume. </a> <br />
            In addition to photography I also represent brands, build websites,
            provide
            <a href="https://tea.institute/"> Tea Education </a>, and host
            <a href="https://immodestea.com/"> Tea Parties </a>!
          </p>
          <p>
            This site is built with{" "}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Gatsby.js{" "}
            </a>
            , which is why it's so fast! <br />
            <a href="https://photography.danielc.us/details#contact">
              {" "}
              Hire Me{" "}
            </a>{" "}
            to build your website.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Imagery is at the heart of everything</figcaption>
          </figure>
        </div>
      </article>
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
    benchAccounting: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
