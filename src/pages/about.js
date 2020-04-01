import React from 'react';

import '../assets/css/main.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>	
	<main className="side-margin">
	    <article className="post-content">
		    <SEO title="About DanielC.us" />
		    <h1>Why are we here?</h1>
		    <p>The meaning of my work, life, and everything.</p>
		</article>
	</main>
  </Layout>
)

export default About
