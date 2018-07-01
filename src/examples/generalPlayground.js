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


// function getModuleExports (code) {
//   return eval(`
// (function() {
//   try {
//     const module = { exports: { error: new Error('Failed to obtain function from evaluator')} };
//     var result__ = (function(module, require) {
//       ${code} ;
//     })(module, /*window.requireCommons_*/ require);
//     return module.exports;
//   }
//   catch(ex) {
//     return { error: ex }
//   }
// })()
// `)
// }

// const code = `
// module.exports = function (config = {}) {
//   var jscodeshift = require('jscodeshift')
//   const output = jscodeshift(config.code)
//     .findVariableDeclarators('foo')
//     .renameTo('bar098098_'+Math.random())
//     .toSource();

//   return { output }
// }
// `

// const input = `
// const foo = 1
// function f(){foo++; f()}
// var a = foo+1
// `
// const execute = getModuleExports(code)
// console.log(execute({code: input}).output)

// // execute()