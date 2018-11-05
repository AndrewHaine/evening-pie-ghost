import React, { Component } from "react";
import Parser from "html-react-parser";
import * as Blocks from "./helpers/blocks";

const transformContent = node => {
  if (node.type === "tag" && node.name === "pre") {
    const isCode = node.children[0].name === "code";
    if (isCode) return Blocks.highlightCodeBlock(node);
  }

  if (node.type === "tag" && node.name === "figure") {
    const classes = node.attribs.class.split(" ");

    if (classes.indexOf("kg-image-card") > -1) {
      return Blocks.cloudinaryImageBlock(node);
    }
  }

  if (node.type === "tag" && node.name === "h2") {
    return Blocks.linkedH2Tag(node);
  }
};

class PostContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="post-main" className="post__main wysiwyg">
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
