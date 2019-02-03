const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  optimization: {
    minimizer: [new TerserPlugin()]
  }
});
