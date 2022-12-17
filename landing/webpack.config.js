const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3002/",
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "landing",
      filename: "remoteEntry.js",
      exposes: {
        "./LandingComponent": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
