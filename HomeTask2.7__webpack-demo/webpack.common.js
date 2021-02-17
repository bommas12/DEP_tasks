const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["whatwg-fetch", "@babel/polyfill", "./src/index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new webpack.ProvidePlugin({
      Promise: "es6-promise-promise", // works as expected
    }),
  ],
  target: ["web", "es5"],
};
