import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header>
        <p>This is the header</p>
        <Nav />
      </header>
    );
  }
}

export default Header;
