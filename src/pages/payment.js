import React from 'react';

import '../assets/css/main.css';
import '../assets/css/layout.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <main className="side-margin">
	    <SEO title="All Payments Accepted" />
	    <h1>All Payment Types Accepted</h1>
	    <p>Send me Money!</p>
	</main>
  </Layout>
)

export default About
