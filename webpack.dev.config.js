const config = require('./webpack.common.config')
const webpack = require('webpack')
module.exports = {
	...config,
	mode: 'development',
	entry: {
		devServer: 'webpack-dev-server/client?http://0.0.0.0:3000',
		index: './src/index.tsx',
	},
	plugins: [new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])],
}
