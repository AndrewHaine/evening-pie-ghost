import App, { Container } from "next/app";
import React from "react";
import Blog from "../components/core/Blog";
import BlogProvider from "../components/core/BlogProvider";
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
        <BlogProvider>
          <Blog>
            <Component {...pageProps} />
          </Blog>
        </BlogProvider>
      </Container>
    );
  }
}

export default MyBlog;
