import React, { Component } from "react";
import Link from "next/link";
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
    return (
      <header class="header__container">
        <div className="header__inner">
          <div className="header_logo">
            <Link href="/">
              <a>
                <figure className="header_logo__fig">
                  <img
                    className="header_logo__el"
                    src="/static/logo/eveningpie-white-text.svg"
                    alt="Evening Pie"
                    title="Evening Pie"
                  />
                </figure>
              </a>
            </Link>
          </div>
          <div className="header__nav">
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
