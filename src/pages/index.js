import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="is-size-1">河村 直樹</h1>
          <h2 className="is-size-3">Webエンジニア志望</h2>
          <div className="columns">
            <div className="column is-1 is-offset-4">
              <a className="button is-rounded is-info is-outlined" href="https://twitter.com/I_wonder16">
                <span>Twitter</span>
              </a>
            </div>
            <div className="column is-1">
              <a className="button is-rounded is-dark is-outlined" href="https://github.com/iWonder118">
                <span>GitHub</span>
              </a>
            </div>
            <div className="column is-1">
              <a className="button is-rounded is-primary is-outlined" href="https://www.wantedly.com/user/profile">
                <span>Wantedly</span>
              </a>
            </div>
            <div className="column is-1">
              <a className="button is-rounded is-success is-outlined" href="https://www.wantedly.com/user/profile">
                <span>Green</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
