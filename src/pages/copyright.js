import React from 'react';

import '../assets/css/main.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

const CopyrightPage = () => (
    <Layout>
      <SEO title="Copyright" />
      <main className="side-margin">
        <article className="post-content page-template no-image">
          <div className="post-content-body">
            <h2 id="social-copyright">Social Sharing Copyright</h2>
            <h3 id="sharing">Sharing</h3>
            <p>
              Images published on Social Media are shared under conditions of the{" "}
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
            <h3 id="non-commercial">Non-Commercial</h3>
            <p>
              You may not use my work for commercial purpose without my explicit
              written permission.
            </p>
            <h3 id="no-derivs">No Derivs</h3>
            <p>
              You may not edit my work without my explicit written permission.  <br />
              Do not crop off the watermark.
            </p>
            <hr />
          </div>
          <div className="post-content-body">
            <h2 id="commercial-copyright">Daniel's Commercial Photography - DCP 1.0</h2>
            <h3 id="sharing">For Images Sold</h3>
            <p>
              Default Copyright
              <br />
            </p>
            <h3 id="work-completed">For Work Completed</h3>
            <p>
              All obligation is complete upon payment unless otherwise noted in the invoice.
            </p>
            <h3 id="transformations">Transformations</h3>
            <p>
              Trasformations may be made only for promotion of those mentioned in the invoice. 
            </p>
            <h3 id="no-transfer">No Transfer of Copyright</h3>
            <p>
              No resale of images or trasfer of copyright.
            </p>
            <hr />
          </div>
        </article> 
      </main>
    </Layout>
)

export default CopyrightPage
