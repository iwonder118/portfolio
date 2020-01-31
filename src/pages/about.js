import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/typography";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="hero has-background-grey has-text-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <Heading>About</Heading>
          <div className="is-size-3"
            style={{
              borderBottom: "1px solid white",
              marginBottom: "30px"
            }}>
            Name : 河村 直樹 -Kawamura Naoki-</div>
          <div className="is-size-3"
            style={{ borderBottom: "1px solid white" }}>
            Description : </div>
          <div className="columns">
            <div className="column is-1 is-offset-5">
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage