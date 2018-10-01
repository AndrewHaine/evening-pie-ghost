import React, { Component } from "react";
import NavList from "./NavList";
import navData from "../../config/nav";
import { BlogContext } from "../core/BlogProvider";

class Nav extends Component {
  render() {
    return (
      <BlogContext.Consumer>
        {context => (
          <nav className="nav_main">
            <NavList navData={navData} isOpen={context.state.navOpen} />
            <div>
              <button
                className={`nav_toggle ${
                  context.state.navOpen ? "nav_toggle--is_open" : ""
                }`}
                onClick={context.toggleNav}
              >
                <div className="nav_toggle__pips">
                  <span className="nav_toggle__pip n1" />
                  <span className="nav_toggle__pip n2" />
                  <span className="nav_toggle__pip n3" />
                </div>
              </button>
            </div>
          </nav>
        )}
      </BlogContext.Consumer>
    );
  }
}

export default Nav;
