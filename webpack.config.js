const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: false
  },
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false
        },
        use: {
          loader: "babel-loader",
          options:{
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.html")
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
      stream: 'stream-browserify',
      fs: 'fs',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    alias: {
      process: "process/browser",
      buffer: "buffer",
      stream: 'stream-browserify',
      os: 'os-browserify/browser'
    },
    fallback: {
      fs: false,
      util: false,
      path: false,
      crypto: false,
      buffer: false,
      https: false,
      http: false,
      os: false,
      vm: false,
      stream: false,
      constants: false,
      assert: false,
    }
  }
}
