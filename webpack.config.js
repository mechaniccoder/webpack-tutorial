const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  console.log(env.NODE_ENV);

  return {
    mode: "development",
    devtool: "eval",
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      publicPath: "/",
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/i,
    //       use: ["style-loader", "css-loader"],
    //     },
    //     {
    //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //       type: "asset/resource",
    //     },
    //     {
    //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //       type: "asset/resource",
    //     },
    //   ],
    // },
    plugins: [
      // new WebpackBundleAnalyzer(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Caching",
      }),
    ],
    devServer: {
      contentBase: "./dist",
    },
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /\/node_modules\//,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  };
};
