import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../assets/css/main.css';
import { Intro, Skills, Contact, Projects } from '../components/githubPage'

const githubPage = () => (
  <Layout>
    <SEO title="Github" />
    <main className="side-margin">
	    <Intro />
	    <Projects />
	    <Skills />
	    <Contact />
    </main>
  </Layout>
)

export default githubPage