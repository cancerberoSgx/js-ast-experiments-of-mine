// parse typescript using recast. 
// then uses ast-types to rename a class and then
// prints back the code and prints Ts AST in the console
var recast = require("recast");
var types = require('ast-types')
module.exports = function (config) {
  var ast = recast.parse(config.code, {
    parser: require('recast/parsers/typescript')
  });
  types.visit(ast, {
    visitClassDeclaration: function (path) {
      var node = path.node;
      node.id.name += 'Renamed'
      this.traverse(path);
    },
  })
  return { output: recast.print(ast).code }
}