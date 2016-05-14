# karma-power-assert

[![npm version](https://img.shields.io/npm/v/karma-power-assert.svg?style=flat-square)](https://www.npmjs.com/package/karma-power-assert) [![npm downloads](https://img.shields.io/npm/dm/karma-power-assert.svg?style=flat-square)](https://www.npmjs.com/package/karma-power-assert)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/watilde/karma-power-assert) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square)](https://github.com/watilde/karma-power-assert)

[![Build Status](https://img.shields.io/travis/watilde/karma-power-assert/master.svg?style=flat-square)](https://travis-ci.org/watilde/karma-power-assert) [![Dependency Status](https://img.shields.io/david/watilde/karma-power-assert.svg?style=flat-square)](https://david-dm.org/watilde/karma-power-assert) [![devDependency Status](https://img.shields.io/david/dev/watilde/karma-power-assert.svg?style=flat-square)](https://david-dm.org/watilde/karma-power-assert#info=devDependencies)

> Adapter for [power-assert](https://github.com/power-assert-js/power-assert) assertion library.

## Installation
via npm
```bash
$ npm install karma-power-assert --save-dev
```

Instructions on how to install `karma` can be found [here.](http://karma-runner.github.io/0.12/intro/installation.html)


## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'power-assert'],

    files: [
      '*.js'
    ],

    preprocessors: {
      'test/**/*.spec.js': ['espower']
    }
  });
};
```

If you want to pass configuration options directly to `assert.customize` you can
do this in the following way

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'power-assert'],

    files: [
      '*.js'
    ],

    preprocessors: {
      'test/**/*.spec.js': ['espower']
    },

    client: {
      assert: {
        output: {
          maxDepth: 2
        }
      }
    }
  });
};
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
