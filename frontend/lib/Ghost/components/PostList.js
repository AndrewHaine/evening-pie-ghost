import React, { Component } from "react";
import Client from "../utils/Client";
const GhostClient = new Client();

class PostList extends Component {
  componentWillMount() {
    console.log(GhostClient.getPosts());
  }
  render() {
    return <div />;
  }
}

export default PostList;
