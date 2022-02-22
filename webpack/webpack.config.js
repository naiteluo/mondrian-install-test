const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/main.ts"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|png|gif|jpg|jpeg|ico)(\?.*)?$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "../dist"),
        },
      ],
    }),
    new HTMLWebpackPlugin({
      title: "Typescript x Webpack",
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.template.html"),
      chunks: ["main"],
    }),
  ],
};
