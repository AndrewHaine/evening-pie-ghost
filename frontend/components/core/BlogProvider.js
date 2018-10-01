// This is the "wrapper" component for our blog app

import React, { Component } from "react";
import Router from "next/router";

const BlogContext = React.createContext();

class BlogProvider extends Component {
  state = {
    navOpen: false
  };
  componentDidMount() {
    // Force the mobile nav to close when switching between pages
    Router.onRouteChangeStart = () => {
      this.toggleNav(null, true);
    };

    // Close the nav when the window is resized
    window.addEventListener("resize", e => this.toggleNav(e, true));
  }
  toggleNav(e, forceClose) {
    if (forceClose) {
      this.setState({ navOpen: false });
    } else {
      this.setState({ navOpen: !this.state.navOpen });
    }
  }
  render() {
    return (
      <BlogContext.Provider
        value={{
          state: this.state,
          toggleNav: (e, forceClose = false) => this.toggleNav(e, forceClose)
        }}
      >
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}

export { BlogContext };
export default BlogProvider;
