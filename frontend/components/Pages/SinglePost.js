import React, { Component } from "react";
import { format } from "date-fns";

import PageTop from "../core/PageTop";
import PostHeader from "../Post/PostHeader";
import PostContent from "../Post/PostContent";

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
        <main className="post__content">
          <PostHeader post={post} author={this.props.author} />
          <PostContent post={post} />
        </main>
      </div>
    );
  }
}

export default SinglePost;
