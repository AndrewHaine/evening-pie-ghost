import React, { Component } from "react";
import { format } from "date-fns";

import PageTop from "../core/PageTop";
import PostHeader from "../Post/PostHeader";
import PostContent from "../Post/PostContent";
import PostNav from "../Post/PostNav";

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
          <PostNav
            post={post}
            author={this.props.author}
            datestamp={{
              pretty: format(post.published_at, "dd-MM-yy"),
              raw: post.published_at
            }}
          />
          <PostHeader post={post} author={this.props.author} />
          <PostContent post={post} />
        </main>
      </div>
    );
  }
}

export default SinglePost;
