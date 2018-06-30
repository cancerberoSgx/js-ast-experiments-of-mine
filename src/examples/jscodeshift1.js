module.exports = function(config = {}){

// use jscodeshift to rename the id `foo` to `var`
var jscodeshift = require('jscodeshift')

var code = config.code || `
const foo = 1
function f(){foo++; f()}
var a = foo+1
`
const output = jscodeshift(code)
  .findVariableDeclarators('foo')
  .renameTo('bar')
  .toSource();

  return {output}
// console.log(output);
}