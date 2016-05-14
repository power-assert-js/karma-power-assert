module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'power-assert'],

    files: [
      'test/*.js'
    ],

    client: {
      assert: {
        output: {
          maxDepth: 2
        }
      }
    },

    preprocessors: {
      'test/**/*.spec.js': ['espower']
    },

    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

    singleRun: true
  })
}
