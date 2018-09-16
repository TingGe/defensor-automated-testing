const ora = require('ora');

module.exports = function OraLoading(action = 'getting', repo = '') {
  const l = ora(`${action} ${repo}`);
  return l.start();
};
