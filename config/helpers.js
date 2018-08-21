const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  getPlugins: () => {
    const plugins = [
      new CopyWebpackPlugin([
        { from: path.resolve(__dirname, '../src/favicon.svg') },
      ]),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
      }),
    ];

    if (isDev) {
      plugins.push(
        new webpack.HotModuleReplacementPlugin({
          multiStep: false, // https://github.com/jantimon/html-webpack-plugin/issues/533
        })
      );
    } else {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              beautify: false,
            },
          },
          sourceMap: true,
        }),

        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }

    return plugins;
  },
};
