// tslint:disable:no-var-requires
import chalk from 'chalk';
import * as express from 'express';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // Apply only in development mode
  const webpack = require('webpack');
  const webpackConfig = require('../config/client.config.js');

  const compiler = webpack({
    mode: 'development',
    ...webpackConfig,
  });

  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    noInfo: true,
    poll: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    reload: true,
    stats: { colors: true },
  });

  const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {
    reload: true,
  });

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
} else {
  // Apply only in production mode
  app.use(express.static('./dist/public'));

  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

app.listen(8080, err => {
  if (err) {
    // tslint:disable-next-line:no-console
    return console.log(chalk.red.bold(err));
  }

  // tslint:disable-next-line:no-console
  console.log(
    chalk.green.bold(
      '\n\n' +
        '##################################\n' +
        '### App listening on port 8080 ###\n' +
        '##################################',
    ),
  );
});
