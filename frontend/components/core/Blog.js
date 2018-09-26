// Blog will be the main page wrapper component

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MetaHead from "./MetaHead";

class Blog extends Component {
  render() {
    return (
      <div>
        <MetaHead />
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Blog;
