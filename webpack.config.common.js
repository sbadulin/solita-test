const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "root",
      title: "Whee - The most definitive shape store in the world",
      mobile: true,
      lang: "en-US",
      links: [
        "https://fonts.googleapis.com/css?family=Pacifico",
        "https://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic,700italic"
      ]
    }),
    new PreloadWebpackPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
    ]
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx"]
  }
};
