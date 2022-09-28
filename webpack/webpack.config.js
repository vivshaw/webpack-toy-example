const path = require("path");

const pathTo = (dir) => {
  return path.join(__dirname, "..", dir);
};

module.exports = {
  context: pathTo("./"),
  output: {
    filename: "[name].[contenthash].js",
    path: pathTo("dist"),
  },
  module: {
    rules: [],
  },
  resolve: {
    alias: {
      src: pathTo("src"),
    },
  },
};
