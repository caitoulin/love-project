const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: path.resolve(__dirname, "./views/index.html"),
});

let miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: path.resolve(__dirname, "/views/dist/style.css"),
});
module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/views/src/index.js",
  output: { path: path.join(__dirname + "/views/dist"), filename: bundle.js },
  modules: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.js[x]$/,
        exclude: /node-modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(img|jpg|gif|svg)$/,
        lodader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [htmlWebpackPlugin, miniCssExtractPlugin],
};
