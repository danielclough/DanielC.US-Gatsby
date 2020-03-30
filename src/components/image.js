import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const TopImages = () => {
  const data = useStaticQuery(graphql`
    query {
      photographyImage: file(relativePath: { eq: "resume/LATimes-sq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      webDesignImage: file(relativePath: { eq: "resume/me-headshotblackshirt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      BAImage: file(relativePath: { eq: "resume/headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      teaImage: file(relativePath: { eq: "resume/me-teaoasis-sq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div>
    <Img className="index-images" fluid={data.photographyImage.childImageSharp.fluid} />
    <Img className="index-images" fluid={data.webDesignImage.childImageSharp.fluid} />
    <Img className="index-images" fluid={data.BAImage.childImageSharp.fluid} />
    <Img className="index-images" fluid={data.teaImage.childImageSharp.fluid} />
    </div>
    )
}

export default TopImages
