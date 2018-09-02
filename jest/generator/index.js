#!/usr/bin/env node

const path = require('path'),
  fs = require('fs');
const { generateFile } = require('./generateFile');

let counter = 0;
function fromDir(startPath, fileExt) {
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath);
    return Promise.reject();
  }

  const files = fs.readdirSync(startPath);
  return Promise.all(
    files.map(file => {
      const filename = file;
      const filePath = path.join(startPath, file);
      const stat = fs.lstatSync(filePath);
      if (stat.isDirectory()) {
        return fromDir(filePath, fileExt); //recurse
      } else if (filename.indexOf(fileExt) >= 0) {
        return generateFile(`./${filePath}`, filename, startPath).then(
          numberOfCreatedFiles => (counter = counter + numberOfCreatedFiles)
        );
      } else {
        return Promise.resolve();
      }
    })
  );
}

const projectPath = process.argv[2];

if (!projectPath) {
  throw Error('Not path given');
}
const ext = process.argv[3] || '.tsx';

fromDir(projectPath, ext)
  .then(() => {
    console.log(`Finished, created ${counter} jest snapshot files`);
  })
  .catch(err => console.log('jest-generator', err));
