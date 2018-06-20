const path = require('path');

module.exports = {
	entry: './src/index.tsx',
  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
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
		],
	},
	plugins: [],
}
