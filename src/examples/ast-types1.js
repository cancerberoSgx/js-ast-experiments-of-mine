module.exports = function(config = {}){

// uses ast-types to transverse AST and modify it: adds an statement  
// var superArgs = Array.prototype.slice.call(arguments, 2); as first child of 
// each function declaration body

var types = require("ast-types");
var recast = require("recast");
var n = types.namedTypes;
var b = types.builders;

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

// Reuse the same AST structure for Array.prototype.slice.call.
var sliceExpr = b.memberExpression(
  b.memberExpression(
    b.memberExpression(
      b.identifier("Array"),
      b.identifier("prototype"),
      false
    ),
    b.identifier("slice"),
    false
  ),
  b.identifier("call"),
  false
);

types.visit(ast, {
  visitFunction: function (path) {
    var node = path.node;
    this.traverse(path);

    // This traversal is only concerned with things that have a body
    if (!node.body) {
      return;
    }
    n.BlockStatement.assert(node.body);

    var restVarDecl = b.variableDeclaration("var", [
      b.variableDeclarator(
        b.identifier("superArgs"),
        b.callExpression(sliceExpr, [
          b.identifier("arguments"),
          b.literal(node.params.length)
        ])
      )
    ]);

    // add the decl as first child of the body
    path.get("body", "body").unshift(restVarDecl);
  }
});

var output = recast.print(ast).code;

// console.log(output);
return {output}
}