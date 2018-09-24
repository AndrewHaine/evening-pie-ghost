import qs from "qs";

import config from "../../../config.js";

class Client {
  constructor() {
    this.endpoint = config.GHOST_ENDPOINT;
    this.clientId = config.GHOST_CLIENT;
    this.clientSecret = config.GHOST_SECRET;
  }
  _buildURL(path, options) {
    const query = qs.stringify({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      ...options
    });

    return `${this.endpoint}/ghost/api/v0.1${path}?${query}`;
  }
  getPosts(filters = {}) {
    return this._buildURL("/posts/", filters);
  }
  getPostById(id) {
    return this._buildURL(`/posts/${id}`);
  }
  getPostBySlug(slug) {
    return this._buildURL(`/posts/slug/${slug}`);
  }
  getTags(filters = {}) {
    return this._buildURL("/tags/", filters);
  }
  getTagById(id) {
    return this._buildURL(`/tags/${id}`);
  }
  getTagBySlug(slug) {
    return this._buildURL(`/tags/slug/${slug}`);
  }
  getUsers(filters = {}) {
    return this._buildURL("/users/", filters);
  }
  getUserById(id) {
    return this._buildURL(`/users/${id}`);
  }
  getUserBySlug(slug) {
    return this._buildURL(`/users/slug/${slug}`);
  }
}

export default Client;
