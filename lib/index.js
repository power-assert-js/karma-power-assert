var path = require('path')

var createPattern = function (path) {
  return {pattern: path, included: true, served: true, watched: false}
}

var initPowerAssert = function (files) {
  files.unshift(createPattern(path.join(__dirname, 'adapter.js')))
  files.unshift(createPattern(path.resolve(require.resolve('power-assert'), '../build/power-assert.js')))
}

initPowerAssert.$inject = ['config.files', 'config.client.assert']

module.exports = {
  'framework:power-assert': ['factory', initPowerAssert]
}
