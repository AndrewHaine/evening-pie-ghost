import React, { Component } from "react";
import Link from "next/link";

class NavItem extends Component {
  render() {
    const { navData } = this.props;
    return (
      <Link href={navData.link}>
        <a>{navData.title}</a>
      </Link>
    );
  }
}

export default NavItem;
