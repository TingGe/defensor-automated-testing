#!/bin/bash

# prebuild
rimraf ./build

# pretest
rimraf reports && mkdirp reports/unit
tslint -c tslint.json -p tsconfig.json 'src/**/*.{ts,tsx}' & tsc

# unit test
ava | tap-that-html > reports/unit/index.html

#test:coverage
nyc --reporter=html --report-dir reports/coverage --reporter=text ava

#posttest
rimraf .nyc_output coverage