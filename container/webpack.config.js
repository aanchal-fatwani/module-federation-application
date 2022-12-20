const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "/",
    },
  },
  output: {
    publicPath: "http://localhost:3000/",
    filename: "[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js/,
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
      name: "container",
      remotes: {
        header: "header@http://localhost:3001/remoteEntry.js",
        landing: "landing@http://localhost:3002/remoteEntry.js",
        auth: "auth@http://localhost:3003/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
