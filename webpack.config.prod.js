const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        loader: 'ts-loader',
        configFile: path.resolve(__dirname, './tsconfig.prod.json')
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, './src')],
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
};
