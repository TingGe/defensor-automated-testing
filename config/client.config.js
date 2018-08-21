const path = require('path');

const helpers = require('./helpers');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  cache: isDev,

  target: 'web',

  devtool: isDev ? 'eval-source-map' : 'source-map',

  stats: {
    colors: isDev,
    reasons: isDev,
    errorDetails: isDev,
  },

  context: path.resolve(__dirname, '..'),

  entry: {
    client: [
      isDev && 'webpack-hot-middleware/client',
      './src/client.tsx',
    ].filter(Boolean),
  },

  output: {
    path: path.resolve(__dirname, '../dist', 'public'),
    filename: isDev ? '[name].js' : '[name].[hash].js',
    publicPath: '/',
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

  plugins: helpers.getPlugins(),
};
