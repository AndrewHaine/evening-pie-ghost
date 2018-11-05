import React, { Component } from "react";

import NavIndicator from "./components/NavIndicator";

class PostNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.checkIfIsVisible = this.checkIfIsVisible.bind(this);
  }

  componentDidMount() {
    this.checkIfIsVisible();
    window.addEventListener("scroll", this.checkIfIsVisible);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkIfIsVisible);
  }

  checkIfIsVisible() {
    if (window.pageYOffset > 500 && !this.state.isVisible) {
      this.setState({
        isVisible: true
      });
    } else if (window.pageYOffset < 500 && this.state.isVisible) {
      this.setState({
        isVisible: false
      });
    }
  }

  render() {
    return (
      <header className={`post-nav ${this.state.isVisible && "is-visible"}`}>
        <div className="post-nav__inner">
          <figure className="post-nav__logo">
            <img
              className="post-nav__logo_el"
              src="/static/logo/eveningpie-white-text.svg"
              alt="Evening Pie"
              title="Evening Pie"
            />
          </figure>
          <div className="post-nav__main">
            <span className="post-nav__title">{this.props.post.title}</span>
            <span className="post-nav__meta">
              {this.props.author.name} // {this.props.datestamp.pretty}
            </span>
          </div>
          <div className="post-nav__links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              title="Share this post on Twitter"
              className="post-nav__tweet"
            >
              <svg width="27px" height="27px" viewBox="0 0 27 27">
                <g transform="translate(-34 0)" fill="#fff" fillRule="nonzero">
                  <path d="m48.151 25.29c-0.76891 0-1.5218-0.068628-2.2528-0.20009-0.73765-0.13265-3.4354 0.92145-7.0944 1.2355-2.4393 0.20934-4.0407 0.056749-4.8041-0.45777 1.8959-1.2157 3.038-2.102 3.4263-2.659 1.1866-1.7017 0.46568-3.1183 0-3.862-1.2167-1.943-1.92-4.2402-1.92-6.7017 0-6.9837 5.6614-12.645 12.645-12.645s12.645 5.6614 12.645 12.645c0 6.9837-5.6614 12.645-12.645 12.645zm6.2393-15.045c0.56868-0.41615 1.0652-0.93177 1.4623-1.5107-0.52352 0.22613-1.0922 0.389-1.6789 0.45229 0.60477-0.36182 1.0651-0.93174 1.2818-1.6102-0.55967 0.3347-1.1915 0.57896-1.8505 0.7056-0.53258-0.56991-1.2908-0.92272-2.1303-0.92272-1.6158 0-2.9156 1.3117-2.9156 2.9219 0 0.22616 0.02709 0.45229 0.072213 0.66941-2.4191-0.12667-4.5765-1.2846-6.0117-3.0576-0.25276 0.43422-0.39716 0.93177-0.39716 1.4745 0 1.0132 0.51449 1.9088 1.2998 2.4334-0.47837-0.018072-0.92974-0.15376-1.3179-0.37087v0.036171c0 1.4203 1.002 2.5963 2.3379 2.8677-0.2437 0.063293-0.50549 0.099492-0.76725 0.099492-0.18958 0-0.3701-0.0181-0.55064-0.045221 0.3701 1.1579 1.4443 1.9992 2.726 2.0264-1.002 0.78702-2.2567 1.2484-3.6197 1.2484-0.24373 0-0.46937-0.0090498-0.70407-0.036171 1.2908 0.83222 2.8253 1.3117 4.4772 1.3117 5.3618 0 8.2954-4.4508 8.2954-8.3135 0-0.12664 0-0.25331-0.0090301-0.37995z" />
                </g>
              </svg>
            </a>
            <a
              className="post-nav__all-posts sq-btn sq-btn--white btn-arrow"
              href="/posts"
            >
              More Posts
            </a>
          </div>
        </div>
        <NavIndicator />
      </header>
    );
  }
}

export default PostNav;
