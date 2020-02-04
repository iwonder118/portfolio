import React, { Component } from "react";

import Layout from "../components/layout";
import Message from "../components/message";
import SEO from "../components/seo";
import { Heading } from "../components/typography";
import { Content } from "../components/content";
import emailjs from 'emailjs-com';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = { from_name: "", from_mail: "", message_html: "" };
  }

  handleSubmit = e => {
    e.preventDefault();

    emailjs.send('gmail', template_9rhFRlQp, this.state, user_OhGx6rvfguX6VjtrHMddY)
      .then(() => {
        alert("Success!");
        window.location.href = '/';
      }, () => {
        alert("FAILED...");
        window.location.href = '/';
      });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { from_name, from_mail, message_html } = this.state;
    const inputStyle = {
      backgroundColor: "rgba(0,0,0,0.2)",
      color: "#fff",
      borderWidth: "2px",
    };
    console.log(process.env.EMAILJS_TEMPLATE_ID);
    console.log(process.env.EMAILJS_USER_ID);
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Message className="is-primary">
          <p className="subtitle">
            こちらよりかはWandetlyやGreenなどのほうが嬉しいです。
          </p>
        </Message>
        <Content>
          <section className="hero has-background-grey-darker has-text-white is-fullheight">
            <div className="hero-body">
              <div className="container">
                <Heading>お問い合わせ</Heading>
                <form name="contact" data-netlify="true" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label has-text-white">お名前</label>
                    <div className="control">
                      <input
                        style={inputStyle}
                        className="input"
                        type="text"
                        name="from_name"
                        value={from_name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-white">メールアドレス</label>
                    <div className="control">
                      <input
                        style={inputStyle}
                        className="input"
                        type="email"
                        name="from_mail"
                        value={from_mail}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label has-text-white">内容</label>
                    <div className="control">
                      <textarea
                        style={inputStyle}
                        className="textarea"
                        name="message_html"
                        value={message_html}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-dark is-inverted is-outlined"
                        type="submit"
                      >
                        送信
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Content>
      </Layout>
    );
  }
}

export default ContactPage;