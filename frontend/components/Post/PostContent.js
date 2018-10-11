import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class PostContent extends Component {
  render() {
    return (
      <section
        className="post__content wysiwyg"
        dangerouslySetInnerHTML={{ __html: this.props.post.html }}
      />
    );
  }
}

export default PostContent;
