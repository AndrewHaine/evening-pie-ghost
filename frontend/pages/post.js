import React, { Component } from "react";

class Post extends Component {
  static async getInitialProps() {
    return { activeSegment: "/about" };
  }
  render() {
    return (
      <div>
        <p>This is a post page</p>
      </div>
    );
  }
}

export default Post;
