import React from 'react';

import '../assets/css/main.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <article className="post-content">
	    <SEO title="All Payments Accepted" />
	    <h1>All Payment Types Accepted</h1>
	    <p>Send me Money!</p>
	</article>
  </Layout>
)

export default About
