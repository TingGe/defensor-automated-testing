const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    devServer: 'webpack-dev-server/client?http://0.0.0.0:3000',
    index: './src/index.tsx',
  },
  output: {
    path: __dirname + '/built',
    publicPath: '/built',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /\.js$/,
      /\.d\.ts$/
    ])
  ]
}