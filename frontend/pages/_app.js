import App, { Container } from "next/app";
import React from "react";
import Blog from "../components/core/Blog";
import "../sass/style.sass";

class MyBlog extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Blog>
          <Component {...pageProps} />
        </Blog>
      </Container>
    );
  }
}

export default MyBlog;
