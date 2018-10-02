import React, { Component } from "react";

import PageTop from "../core/PageTop";

class SinglePost extends Component {
  render() {
    const post = this.props.postData;
    return (
      <div class="post_container">
        <PageTop
          title={post.title}
          pagetype="post"
          datestamp={post.published_at}
        />
      </div>
    );
  }
}

export default SinglePost;
