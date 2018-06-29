// use jscodeshift to rename the id `foo` to `var`
var jscodeshift = require('jscodeshift')

var code =`
const foo = 1
function f(){foo++; f()}
var a = foo+1
`
const result = jscodeshift(code)
  .findVariableDeclarators('foo')
  .renameTo('bar')
  .toSource();

console.log(result);
