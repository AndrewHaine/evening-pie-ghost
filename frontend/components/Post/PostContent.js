import React, { Component } from "react";
import Parser from "html-react-parser";
import * as Blocks from "./helpers/blocks";

const transformContent = node => {
  if (node.type === "tag" && node.name === "pre") {
    const isCode = node.children[0].name === "code";
    if (isCode) return Blocks.highlightCodeBlock(node);
  }
};

class PostContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="post__main wysiwyg">
        <div className="post__main_content">
          {Parser(this.props.post.html, {
            replace: transformContent
          })}
        </div>
        <aside className="post__main_sidebar" />
      </section>
    );
  }
}

export default PostContent;
