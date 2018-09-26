import React, { Component } from "react";
import NavItem from "./NavItem";
import navData from "../../config/nav";

class Nav extends Component {
  render() {
    return (
      <nav>
        {navData.map((navItem, i) => {
          return <NavItem key={i} navData={navItem} />;
        })}
      </nav>
    );
  }
}

export default Nav;
