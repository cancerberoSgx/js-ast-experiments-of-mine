/**
 * Adds trailing commas to every object litteral and array.
 */
module.exports = function(file) {
  const j = require('jscodeshift')

  const objectHasNoTrailingComma = ({node}) => {
    // Only transform objects that are on multiple lines.
    if (node.properties.length === 0 || (node.loc && node.loc.start.line === node.loc.end.line)) {
      return false;
    }
    const lastProp = node.properties[node.properties.length - 1];
    return file.code.charAt(lastProp.end) !== ',';
  };

  const arrayHasNoTrailingComma = ({node}) => {
    // Only transform arrays that are on multiple lines.
    if (node.elements.length === 0 || node.loc.start.line === node.loc.end.line) {
      return false;
    }
    const lastEle = node.elements[node.elements.length - 1];
    return file.code.charAt(lastEle.end) !== ',';
  };

  const forceReprint = ({node}) => {
    node.original = null;
  };

  const root = j(file.code);
  root
    .find(j.ObjectExpression)
    .filter(objectHasNoTrailingComma)
    .forEach(forceReprint);
  root
    .find(j.ArrayExpression)
    .filter(arrayHasNoTrailingComma)
    .forEach(forceReprint);

  return {
    output: root.toSource( {
      trailingComma: true,
      wrapColumn: 1, // Makes sure we write each values on a separate line.
    })
  }
}
