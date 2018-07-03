
var recast = require("recast");
var types = require('ast-types')

module.exports = function (config) {
  var ast = recast.parse(config.code, {
    parser: require('recast/parsers/typescript')
  });
  const buffer = []
  printAst(ast, buffer)
  return { output: buffer.join('\n') }
}
function printAst(node, buffer) {
  types.visit(node, {
    visitPrintable: function (path) {
      buffer.push(new Array(getLevel(path)).fill(' ').join('') + path.node.type + ' - ' + path.name)
      this.traverse(path);
    },
  })
}
function getLevel(path) {
  let p = path, i = 0
  while (p.name !== 'root') {
    p = p.parentPath
    i++
  }
  return i
};
