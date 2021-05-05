const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: "localhost",
    compress: true,
    hot: true,
    disableHostCheck: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)x?$/,
        exclude: /node_modules/,
        resolve: {
          modules: [path.resolve(__dirname), "node_modules"],
          extensions: [".ts", ".tsx", ".scss"],
        },
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: require.resolve("ts-loader"),
            options: {
              configFile: path.join(__dirname, "./tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './public/index.html',
    }),
  ]
};
