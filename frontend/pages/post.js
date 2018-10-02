import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";

import SinglePost from "../components/Pages/SinglePost.js";
import GhostClient from "../lib/Ghost/utils/Client";
const Ghost = new GhostClient();

class Post extends Component {
  static async getInitialProps({ query }) {
    const post = await axios.get(Ghost.getPostBySlug(query.slug));
    return {
      postData: post.data.posts[0]
    };
  }
  render() {
    const { postData } = this.props;
    return (
      <div>
        <Head>
          <title>{postData.title} | Evening Pie</title>
        </Head>
        <SinglePost postData={postData} />
      </div>
    );
  }
}

export default Post;
