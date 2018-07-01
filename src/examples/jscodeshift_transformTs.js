module.exports = function (config) {

  // use jscodeshift to rename the id `foo` to `var` in TypeScript code !

  var jscodeshift = require('jscodeshift')

  const output = jscodeshift(config.code, {
    parser: require('recast/parsers/typescript')
  })
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource();

  return { output }
}