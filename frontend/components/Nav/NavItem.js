import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

class NavItem extends Component {
  render() {
    const { navData } = this.props;
    const isActive = navData.activeSegments.includes(
      this.props.router.pathname
    );
    return (
      <li
        className={`nav_list__item ${isActive ? "nav_list__item--active" : ""}`}
      >
        <Link href={navData.link}>
          <a className="nav_list__item_link">{navData.title}</a>
        </Link>
      </li>
    );
  }
}

export default withRouter(NavItem);
