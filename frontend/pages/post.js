import React, { Component } from "react";
import axios from "axios";
import readingTime from "reading-time";

import SinglePost from "../components/Pages/SinglePost.js";
import BlogPostingMeta from "../components/Post/BlogPostingMeta";
import GhostClient from "../lib/Ghost/utils/Client";
const Ghost = new GhostClient();

import "../sass/post_content.sass";

class Post extends Component {
  static async getInitialProps({ query }) {
    const post = await axios.get(Ghost.getPostBySlug(query.slug));

    const { author } = post.data.posts[0];
    const authorObject = await axios.get(Ghost.getUserById(author));

    return {
      postData: post.data.posts[0],
      author: authorObject.data.users[0]
    };
  }
  render() {
    const { postData, author } = this.props;

    // Prevent this having to be calculated multiple times
    const readTime = readingTime(postData.html);

    return (
      <div>
        <BlogPostingMeta
          postData={postData}
          author={author}
          readTime={readTime}
        />
        <SinglePost postData={postData} author={author} readTime={readTime} />
      </div>
    );
  }
}

export default Post;
