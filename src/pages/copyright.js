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
            <h2 id="copyright">Photography Copyright</h2>
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
          </div>
        </article> 
      </main>
    </Layout>
)

export default CopyrightPage
