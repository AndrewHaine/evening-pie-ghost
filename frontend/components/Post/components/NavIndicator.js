import React, { Component } from "react";

class NavIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postHeight: 0,
      progress: 0
    };
    this.calculateProgress = this.calculateProgress.bind(this);
    this.recalculatePostHeight = this.recalculatePostHeight.bind(this);
    this.fullRefresh = this.fullRefresh.bind(this);
  }

  componentDidMount() {
    this.recalculatePostHeight();
    this.calculateProgress();
    window.addEventListener("scroll", this.calculateProgress);
    window.addEventListener("resize", this.fullRefresh);
    window.addEventListener("orientationchange", this.fullRefresh);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.calculateProgress);
    window.removeEventListener("resize", this.fullRefresh);
    window.removeEventListener("orientationchange", this.fullRefresh);
  }

  recalculatePostHeight() {
    const height = document.body.scrollHeight - window.innerHeight;
    this.setState({ postHeight: height });
  }

  calculateProgress() {
    const progress = window.pageYOffset;
    this.setState({ progress: progress });
  }

  fullRefresh() {
    this.recalculatePostHeight();
    this.calculateProgress();
  }

  render() {
    return (
      <progress
        value={this.state.progress}
        max={this.state.postHeight}
        className="post-nav__progress"
      />
    );
  }
}

export default NavIndicator;
