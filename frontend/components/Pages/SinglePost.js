import React, { Component } from "react";
import { format } from "date-fns";

import PageTop from "../core/PageTop";

class SinglePost extends Component {
  render() {
    const post = this.props.postData;
    return (
      <div className="post_container">
        <PageTop
          title={post.title}
          pagetype="post"
          datestamp={{
            pretty: format(post.published_at, "MMMM do y"),
            raw: post.published_at
          }}
        />
      </div>
    );
  }
}

export default SinglePost;
