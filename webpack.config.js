const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

const isDevelopment = process.env.NODE_ENV === "development"

module.exports = {
	mode: isDevelopment ? "development" : "production",
	entry: "./index.tsx",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			},
		],
	},
	plugins: [new CleanWebpackPlugin(), new webpack.ProgressPlugin()],
	externals: {
		react: "react",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
}
