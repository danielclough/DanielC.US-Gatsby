import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "./header"

import resume from '../data/profile.json';

import "../assets/css/layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCamera, faLeaf, faIdCard, faDollarSign, faCreditCard, faUser, faRss, faGlobe, faHome, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faCreativeCommons, faFacebook, faInstagram, faBitcoin, faPaypal } from '@fortawesome//free-brands-svg-icons'



const Sidebar = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "daniel-byKiko.png" }) {
        childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

return (
  <sidebar
    style={{
      background: `darkslategrey`,
      paddingBottom: `1.45rem`,
      marginBottom: `1.45rem`,
      height: `95%`,
      boxShadow: `0px 0px 1vw 1vw rgba(0,0,0,0.9)`,

    }}
  >
    <div className="homeLinkDiv" 
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
      }}
    >
        <Link className="homeLink flex-center left-md" 
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <p>
            <Img fluid={data.file.childImageSharp.fluid} />
                <Header className="small-center"
                  contacts={resume.contact}
                  name={resume.fullname}
                  role={resume.role}
                />
          </p>
        </Link>
    </div>
      <div className="linksDiv right-md" >
        <div className="flex-center dropdown-menu">
          <div className="dropdown">  
            <button className="dropbtn"><h4> Photography <FontAwesomeIcon icon={faCaretDown} /></h4></button>
            <ul className="dropdown-content" id="photo">
              <li> <a href="/gallery"><FontAwesomeIcon icon={faCamera} /> Gallery </a></li>
              <li> <a href="/contact"><FontAwesomeIcon icon={faEnvelope} /> Email </a></li>
              <li> <a href="/daniel-clough-photography"><FontAwesomeIcon icon={faIdCard} /> About </a></li>
              <li><a href="https://facebook.com/danielcloughphotography"> <FontAwesomeIcon icon={faFacebook} /> Facebook </a></li>
              <li><a href="https://instagram.com/DanielCloughPhotography"> <FontAwesomeIcon icon={faInstagram} /> Instagram </a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="dropbtn"><h4> Tea <FontAwesomeIcon icon={faCaretDown} /></h4></button>          
            <ul className="dropdown-content" id="tea">
              <li> <a href="https://Tea.Institute"><FontAwesomeIcon icon={faLeaf} /> Tea.Institute </a></li>
              <li> <a href="https://Immodestesa.com"><FontAwesomeIcon icon={faLeaf} /> Immodestesa </a></li>
              <li> <a href="https://Kombucha.Training"><FontAwesomeIcon icon={faLeaf} /> Kombucha.Training </a></li>
            </ul>
          </div>

          <div className="dropdown">
            <button className="dropbtn"><h4> WebDev <FontAwesomeIcon icon={faCaretDown} /></h4></button>          
            <ul className="dropdown-content" id="webdev">
              <li> <a href="https://github.com/danielclough/"><FontAwesomeIcon icon={faGithub} /> Github </a></li>
              <li> <a href="https://TranslateJPN.com"><FontAwesomeIcon icon={faGlobe} /> TranslateJPN </a></li>
              <li> <a href="https://Blackcoin.nl"><FontAwesomeIcon icon={faGlobe} /> BlackcoinNL </a></li>
              <li> <a href="https://Bank.Rehab/"><FontAwesomeIcon icon={faGlobe} /> Bank.Rehab </a></li>
            </ul>
          </div>
        </div>
          <div className="main-list flex-center">
            <ul>
              <li> <a href="/"><FontAwesomeIcon icon={faHome} /> Home </a></li>
              <li> <a href="/"><FontAwesomeIcon icon={faIdCard} /> Résumé </a></li>
              <li><a href="/copyright"> <FontAwesomeIcon icon={faCreativeCommons} /> Creative Commons </a></li>
              <li> <a href="/payment"><FontAwesomeIcon icon={faBitcoin} />  <FontAwesomeIcon icon={faPaypal} /> Pay Me <FontAwesomeIcon icon={faDollarSign} /> <FontAwesomeIcon icon={faCreditCard} /> </a></li>
              <li> <a href="/about"><FontAwesomeIcon icon={faUser} /> About Me </a></li>
              <li> <a href="/blog"><FontAwesomeIcon icon={faRss} /> Blog </a></li>
            </ul>
          </div>
        </div>
  </sidebar>
)}



Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
