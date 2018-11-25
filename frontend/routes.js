const routes = require("next-routes");

const allRoutes = routes().add("post", "/post/:slug");

module.exports = allRoutes;
