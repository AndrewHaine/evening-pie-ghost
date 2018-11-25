import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";

import Home from "../components/Pages/Home";

import GhostClient from "../lib/Ghost/utils/Client";
const Ghost = new GhostClient();

class Index extends Component {
  static async getInitialProps() {
    const featured = await axios.get(
      Ghost.getPosts({
        include: "tags",
        filter: "featured:true"
      })
    );

    const standard = await axios.get(
      Ghost.getPosts({
        include: "tags",
        filter: "featured:false",
        limit: 4
      })
    );

    return {
      featured_post: featured.data.posts,
      standard_posts: standard.data.posts
    };
  }
  render() {
    const { featured_post, standard_posts } = this.props;
    return (
      <div>
        <Home
          featured_post={featured_post[0]}
          standard_posts={standard_posts}
        />
      </div>
    );
  }
}

export default Index;
