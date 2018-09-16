const Metalsmith = require('metalsmith');
const inquirer = require('inquirer');
const mkdirp = require('mkdirp');
const { exists } = require('mz/fs');
const { execSync } = require('child_process');
const { dirs } = require('../config/constant');
const question = require('./initProjectQuestion');
const render = require('./render');

module.exports = async function apply(template) {
  const base = `${dirs.tmp}/${template}`;
  const metalsmith = Metalsmith(base);
  const tmpBuildDir = `${base}/${dirs.metalsmith}`;

  if (!(await exists(tmpBuildDir))) {
    mkdirp.sync(tmpBuildDir);
  }

  let user = execSync('git config --global user.name', {
    encoding: 'utf-8',
  });
  let email = execSync('git config --global user.email', {
    encoding: 'utf-8',
  });

  user = user.trim();
  email = email.trim();

  const answers = await inquirer.prompt(
    question({
      template,
      user,
      email,
    })
  );

  return new Promise((resolve, reject) => {
    metalsmith
      .metadata(answers)
      .source('./')
      .destination(tmpBuildDir)
      .clean(false)
      .use(render())
      .build(err => {
        if (err) {
          reject(err);
          return;
        }
        resolve(true);
      });
  });
};
