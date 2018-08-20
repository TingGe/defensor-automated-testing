// Important modules this config uses
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base.config')({
  mode: 'production',
  // In production, we skip all hot-reloading stuff
  entry: './src/index.tsx',

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        chunksSortMode: 'none', //如果使用webpack4将该配置项设置为'none'
      },
      inject: true,
    }),
  ],

  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(index\.|favicon\.))/.test(assetFilename),
  },
});
