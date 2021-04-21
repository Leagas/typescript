const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

const isDevelopment = process.env.NODE_ENV === "development"

module.exports = {
	mode: isDevelopment ? "development" : "production",
	entry: "./index.js",
	devtool: "source-map",
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [new CleanWebpackPlugin(), new webpack.ProgressPlugin()],
	externals: {
		react: "react",
	},
	resolve: {
		extensions: [".jsx", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
}
