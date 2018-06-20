const path = require('path');
const config = require('./webpack.common.config');

module.exports = {
  ...config,
  mode: 'production'
};
