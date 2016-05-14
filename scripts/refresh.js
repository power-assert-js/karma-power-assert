var path = require('path')
var rimraf = require('rimraf')
var target = getTargetPath()

function getTargetPath () {
  var index = ''
  var target = ''

  try {
    index = require.resolve('karma-power-assert')
    target = path.resolve(index, '../../')
  } catch (e) {
    target = ''
  }

  return target
}

try {
  if (target) rimraf.sync(target)
} catch (e) {
  console.error(e)
}
