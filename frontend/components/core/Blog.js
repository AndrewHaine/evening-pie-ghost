// Blog will be the main page wrapper component

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MetaHead from "./MetaHead";
import { BlogContext } from "./BlogProvider";

class Blog extends Component {
  render() {
    return (
      <div>
        <MetaHead />
        <Header />
        <BlogContext.Consumer>
          {context => (
            <main
              id="blog_container"
              className={`blog_main ${
                context.state.navOpen ? "body--nav_open" : ""
              }`}
            >
              {this.props.children}
            </main>
          )}
        </BlogContext.Consumer>
        <Footer />
      </div>
    );
  }
}

export default Blog;
