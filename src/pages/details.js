import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const DetailsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Details" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            {" "}
            <strong>
              <strong>Photography</strong>
            </strong>{" "}
            is{" "}
            <strong>
              <strong>powerful</strong>
            </strong>
            .
            <br />{" "}
            <em>
              <em>Alive</em>
            </em>{" "}
            with{" "}
            <em>
              <em>images</em>
            </em>
            .
            <br />{" "}
            <em>
              <em>Stories change lives</em>
            </em>
            . <br />
            <a href="#contact">Hire me.</a>
          </p>

          <hr />
          <h2 id="prices">Price Details</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One Personal Photo</td>
                <td>
                  {" "}
                  Use existing image without watermark for NonCommercial use.
                </td>
                <td>$39</td>
              </tr>
              <tr>
                <td>One Commercial Photo</td>
                <td>
                  {" "}
                  Use existing image without watermark for Commercial use.
                </td>
                <td>$79</td>
              </tr>
              <tr>
                <td>Two Portrait Session (My Location)</td>
                <td>A quick, 10 minute, portrait or headshot session.</td>
                <td>$119</td>
              </tr>
              <tr>
                <td>Four Portrait Session (My Location)</td>
                <td> A longer, 30 minute, portrait or headshot session.</td>
                <td>$149</td>
              </tr>
              <tr>
                <td>Six Image Session (Your Location)</td>
                <td>
                  Caracter Portraits, Pet Photography, Product Photography, etc.
                </td>
                <td>$499</td>
              </tr>
              <tr>
                <td>Hourly Rate (Four Hour Min.)</td>
                <td>One Photographer - Three day delivery. </td>
                <td>$199/hr</td>
              </tr>
              <tr>
                <td>Hourly Rate (NonProfit)</td>
                <td>One Photographer - Three day delivery. </td>
                <td>$100/hr</td>
              </tr>
            </tbody>
          </table>

          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.medPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Watermarked Image</figcaption>
          </figure>

          <hr />
          <h2 id="contact">Contact</h2>
          <form method="post" action="https://formspree.io/xgeopayy">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="category" id="category">
                  <option value>- Category -</option>
                  <option value={1}>Events</option>
                  <option value={2}>Product Photography</option>
                  <option value={3}>Portrait</option>
                  <option value={4}>Pet</option>
                  <option value={5}>Buy Image</option>
                  <option value={6}>Build Website</option>
                </select>
              </div>

              {/* Break */}

              <div className="col-4 col-12-small">
                <input type="checkbox" id="commercial" name="commercial" />
                <label htmlFor="commercial">Commercial </label>
              </div>

              <div className="col-4 col-12-small">
                <input type="checkbox" id="personal" name="personal" />
                <label htmlFor="personal">NonCommercial </label>
              </div>

              <div className="col-4 col-12-small">
                <input type="checkbox" id="501c" name="501c" />
                <label htmlFor="501c">NonProfit</label>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
          <hr />
          <h2 id="copyright">Copyright Details</h2>
          <h3 id="sharing">Sharing</h3>
          <p>
            Images may be shared under conditions of the{" "}
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
              Creative Commons 4.0 License.
            </a>{" "}
            <br />
          </p>
          <h3 id="attribution">Attribution</h3>
          <p>
            If you share my photography you are required by law to link to my
            webpage, Facebook page, or Instagram account.
          </p>
          <h3 id="noncommercial">NonCommercial</h3>
          <p>
            You may not use my work for commercial purpose without my explicit
            written permission.
          </p>
          <h3 id="noderivs">NoDerivs</h3>
          <p>
            You may not edit my work without my explicit written permission. Do
            not crop off the watermark.
          </p>

          <hr />
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Watermarked Image</figcaption>
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
    smallPic: file(relativePath: { eq: "squirrel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "auction.jpg" }) {
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
      <DetailsPage location={props.location} data={data} {...props} />
    )}
  />
)
