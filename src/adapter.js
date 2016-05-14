// Default configuration
var assertConfig = {}
// Pass options from client.assert to power-assert
/* eslint-disable no-unused-vars */
var createConfigObject = function (karma) {
  if (!karma.config || !karma.config.assert) {
    return assertConfig
  }

  // Copy all properties to assertConfig
  for (var key in karma.config.assert) {
    assertConfig[key] = karma.config.assert[key]
  }

  return assertConfig
}
