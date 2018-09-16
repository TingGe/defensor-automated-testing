#!/usr/bin/env node

/**
 * @file defensor cli
 * @auhor TingGe<505253293@163.com>
 */

const pkg = require('../package.json');
const semver = require('semver');

if (!semver.satisfies(process.version, pkg.engines.node)) {
  const console = require('console3');
  return console.error(
    [
      `The Node version requirement is ${pkg.engines.node}`,
      `but the current version is ${process.version}`,
    ].join(', ')
  );
}

require('../lib');
