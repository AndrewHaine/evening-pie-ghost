import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";

import GhostClient from "../lib/Ghost/utils/Client";
const Ghost = new GhostClient();

class Index extends Component {
  static async getInitialProps() {
    const res = await axios.get(Ghost.getPosts());

    return { posts: res.data.posts };
  }
  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <Link
                href={{
                  pathname: "/post",
                  query: { slug: post.slug }
                }}
              >
                <a>Read more...</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Index;
