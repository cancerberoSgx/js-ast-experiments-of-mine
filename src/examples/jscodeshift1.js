module.exports = function (config) {

  // use jscodeshift to rename the id `foo` to `var`

  var jscodeshift = require('jscodeshift')

  const output = jscodeshift(config.code)
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource();

  return { output }
}