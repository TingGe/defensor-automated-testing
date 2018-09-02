const mkdirp = require('mkdirp'),
  createJestFile = require('./createJestTest'),
  fs = require('fs');

const generateFile = (filePath, filename, startPath) => {
  return new Promise((resolve, reject) => {
    checkIfReactFile(filePath)
      .then(({ isReactFile, filePath }) => {
        if (isReactFile) {
          const testPath = `${startPath}/__tests__`;
          const testFileName = `${filename.replace(/\.[^/.]+$/, '')}.spec.tsx`;
          const fileContent = createJestFile.createJestTest(filename);

          resolve(
            findTestFolder(testPath).then(() =>
              createTestFile(`${testPath}/${testFileName}`, fileContent)
            )
          );
        } else {
          resolve(0);
        }
      })
      .catch(reject);
  });
};

function createTestFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.open(filename, 'r', function(err, fd) {
      if (err) {
        fs.writeFile(filename, content, function(err) {
          if (err) {
            reject(err);
          } else {
            resolve(1);
          }
        });
      } else {
        console.log('The file exists!', filename);
        resolve(0);
      }
    });
  });
}

function findTestFolder(path) {
  return new Promise((resolve, reject) => {
    mkdirp(path, function(err) {
      if (err) {
        reject(err);
      } else {
        // console.log(`created test folder: ${path}`);
        resolve();
      }
    });
  });
}

function checkIfReactFile(filePath) {
  if (filePath.indexOf('.spec.tsx') > 0 || filePath.indexOf('.test.tsx') > 0) {
    // Don't generate files for test files
    return Promise.resolve(false);
  }

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, function(err1, data) {
      if (err1) {
        console.error(err1);
        reject();
      } else {
        const res = {
          filePath,
          isReactFile: isReactFile(data),
        };
        resolve(res);
      }
    });
  });
}

function isReactFile(data) {
  // naive way of trying to check if the file is a React comp
  if (
    data.indexOf(`require('react')`) >= 0 ||
    data.indexOf(`from 'react'`) >= 0
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = { generateFile };
