const program = require('commander');
const cmdline = require('cmdline');
const path = require('path');
const pkg = require('../package.json');

program.parse(process.argv); //开始解析用户输入的命令

cmdline.onFail = async function(err) {
  console.error(err.message);
  process.exit(1);
}.bind(cmdline);

cmdline.onDone = async function(context) {
  console.log('done');
}.bind(cmdline);

cmdline
  .version(pkg.version)
  .help(path.normalize(`@${__dirname}/help.txt`))
  .error(cmdline.onFail);

const ALIAS = {
  i: 'init',
  d: 'dev',
  s: 'start',
  b: 'build',
  a: 'add',
  t: 'test',
  p: 'publish',
  r: 'run',
  u: 'update',
  c: 'config',
};

const cmd = ALIAS[program.args] || program.args;
try {
  cmd && require('./command/' + cmd + '.js'); // 根据不同的命令转到不同的命令处理文件
  cmdline.onDone(this);
} catch (err) {
  cmdline.onFail(err);
}
