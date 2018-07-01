module.exports = function (config ) {
  // parse typescript using recast. prints back the code and prints Ts AST in the console
  var recast = require("recast");

  // Parse the code using an interface similar to require("esprima").parse.
  var ast = recast.parse(config.code, {
    parser: require('recast/parsers/typescript')
  });

  var output = recast.print(ast).code;

  return { output }
}