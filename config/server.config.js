const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',

  target: 'node',

  externals: [nodeExternals()],

  context: path.resolve(__dirname, '..'),

  entry: {
    server: ['./src/server.ts'],
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
    ],
  },
};
