import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/typography";
import { Content } from "../components/content";
import mer from "../images/mercari.png";
import subs from "../images/subscrips.png";

const WorksPage = () => (
  <Layout>
    <SEO title="Works" />
    <section className="hero has-text-white has-background-warning is-fullheight">
      <div className="hero-body" style={{ backgroundColor: "＃ffca28" }}>
        <div className="container">
          <Heading>Works</Heading>
          <Content>
            <div className="columns">
              <div class="column is-4">
                <figure class="image is-16by9">
                  <img src={mer} alt="Freemarket Sample" />
                </figure>
              </div>
              <div className="column is-size-4">
                <h1 className="title has-text-white">Freemarket Sample</h1>
                <p>
                  某フリマアプリのクローンサイト
                </p>
                <p>チーム開発で主にサーバサイド、スクラムマスター、デプロイ作業を担当しました。</p>
                <div class="tags are-medium">
                  <span class="tag is-dark">jQuery</span>
                  <span class="tag is-dark">Rails</span>
                  <span class="tag is-dark">AWS</span>
                </div>
                <a className="button is-rounded is-dark is-outlined" href="https://github.com/iWonder118/freemarket_sample_62g">
                  <span>GitHubリポジトリ</span>
                </a>
                <a className="button is-rounded is-white is-outlined" hred="http://3.115.198.66/" style={{ marginLeft: "20px" }}>
                  <span>サイトへのリンク</span>
                </a>
              </div>
            </div>
          </Content>
          <Content>
            <div className="columns">
              <div class="column is-4">
                <figure class="image is-16by9">
                  <img src={subs} alt="SubscripS" />
                </figure>
              </div>
              <div className="column is-size-4">
                <h1 className="title has-text-white">SubscripS</h1>
                <p>
                  サブスクリプションサービスに特化した家計簿アプリ。リンク共有もできます。
                </p>
                <p>DockerやAWS、CircleCIなどのインフラの勉強の成果として作成しました。</p>
                <div class="tags are-medium">
                  <span class="tag is-dark">jQuery</span>
                  <span class="tag is-dark">Rails</span>
                  <span class="tag is-dark">AWS</span>
                  <span class="tag is-dark">Circle CI</span>
                  <span class="tag is-dark">Docker</span>
                  <span class="tag is-dark">Terraform</span>
                </div>
                <a className="button is-rounded is-dark is-outlined" href="https://github.com/iWonder118/SubscripsApp">
                  <span>GitHubリポジトリ</span>
                </a>
                <a className="button is-rounded is-white is-outlined" href="https://subscrips.com/" style={{ marginLeft: "20px" }}>
                  <span>サイトへのリンク</span>
                </a>
              </div>
            </div>
          </Content>
        </div>
      </div>
    </section>
  </Layout>
)

export default WorksPage