var fs = require('fs')
var path = require('path')
var files = {
  src: path.resolve(__dirname, '../src/adapter.js'),
  content: path.resolve(__dirname, '../src/adapter.wrapper'),
  out: path.resolve(__dirname, '../lib/adapter.js')
}
var src = fs.readFileSync(files.src, 'utf8')
var content = fs.readFileSync(files.content, 'utf8')
var wrappers = content.split(/%CONTENT%\r?\n/)
var wrapper = wrappers[0] + src + wrappers[1]

try {
  fs.writeFileSync(files.out, wrapper)
} catch (e) {
  console.error(e)
}
