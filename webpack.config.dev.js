const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    devServer: 'webpack-dev-server/client?http://0.0.0.0:3000',
    index: './src/index.tsx'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
  plugins: [new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])]
};
