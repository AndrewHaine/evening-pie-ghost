import React, { Component } from "react";
import NavItem from "./NavItem";

export default class NavList extends Component {
  render() {
    const { navData, isOpen } = this.props;

    return (
      <div className={`nav_list ${isOpen ? "nav_list--open" : ""}`}>
        <ul className="nav_list__list">
          {navData.map((navItem, i) => {
            return <NavItem navData={navItem} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}
