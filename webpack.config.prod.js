const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, './src')],
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, './src')],
        use: [
          'style-loader',
          'css-loader?sourceMap&minimize',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ]
      }
    ]
  },
  plugins: []
};
