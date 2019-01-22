const path = require("path")

module.exports = {
  entry: "./library.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd"
  },
  mode: "production",
  target: "node"
}
