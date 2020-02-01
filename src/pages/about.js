import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/typography";
import { Content } from "../components/content";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="hero has-background-grey has-text-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <Heading>About</Heading>
          <Content>
            <div className="columns">
              <div className="column is-2 has-text-centered">
                Name
              </div>
              <div className="column is-size-3">
                河村 直樹  -Kawamura Naoki-
              </div>
            </div>
          </Content>
          <Content>
            <div className="columns">
              <div className="column is-2 has-text-centered">
                Description
              </div>
              <div className="column is-size-4">
                岐阜県出身。<br />工業高校で情報技術を先行し、部活でマイコンカー製作していました。<br />
                工業高校時代で設計技術や機械加工技術、制御技術、電子回路に関する知識など、工業に関する総合的な知識を学んだのち、電子部品メーカーのセラミック基板事業の生産に従事。<br />
                その後Webの技術にひかれ、21才でTECH::EXPERTに9月末日入学〜12月初日卒業。<br />現在はWebエンジニアになるべく転職活動を行っています。
              </div>
            </div>
          </Content>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage