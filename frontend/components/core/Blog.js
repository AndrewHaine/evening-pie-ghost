// Blog will be the main page wrapper component

import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MetaHead from "./MetaHead";

const theme = {
  colors: {
    orange: "#EAB249",
    orange_light: "#E7C865",
    grey_light: "#F2F7FA"
  },
  gradients: {}
};

// Global styles
injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 17px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    font-family: Arial
  }
`;

const StyledPage = styled.div`
  background: white;
`;

class Blog extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <MetaHead />
          <Header />
          <main>{this.props.children}</main>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Blog;
