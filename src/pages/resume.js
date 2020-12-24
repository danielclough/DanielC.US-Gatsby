import React from 'react';
import { Link } from "gatsby"
import {
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO
} from '../components';

import projects from '../assets/data/projects';
import experience from '../assets/data/experience';
import resume from '../assets/data/profile';

import '../assets/css/main.css';


import Layout from "../components/layout"


const ResumePage = () => (
<>
<Layout>
  <SEO title="Home" />
  <div style={{marginBottom: `1.45rem` }}>
	  <main className="side-margin antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
	    <div className=" mx-auto shadow bg-white py-5 px-10">
	      <Summary data={resume.summary} />
	      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
	        <div className="lg:w-2/3 lg:pr-8">
	          {projects.projects && <Projects data={projects.projects} />}
	          {experience.experience && <Experience data={experience.experience} />}
	        </div>
	        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
	          {resume.skills && <Skills data={resume.skills} />}
	          {resume.education && <Education data={resume.education} />}
	          {resume.sidebar &&
	            resume.sidebar.map(item => (
	              <List key={`${item.title}-side`} data={item} />
	            ))}
	        </div>
	      </div>
	      <Footer />
	    </div>
	  </main>
  </div>
 </Layout>
</>
)

export default ResumePage


