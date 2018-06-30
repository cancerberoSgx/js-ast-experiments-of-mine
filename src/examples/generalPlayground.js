module.exports = function(config = {}){

const types = require("ast-types");
const recast = require("recast");
const jscodeshift = require('jscodeshift')

const n = types.namedTypes;
const b = types.builders;

var code = config.code || `
const foo = 1
function f(){foo++; f()}
let i = [].map(function(a){return a++})

function hoho(a, b, c, d, f, g) {
  return a +// a comment in the middle
    b;
}
`
var ast = recast.parse(code);

return {output} 
}