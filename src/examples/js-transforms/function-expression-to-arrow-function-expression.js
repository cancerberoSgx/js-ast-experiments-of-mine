// Converts a FunctionExpression to an ArrowFunctionExpression when safe to do so.
module.exports = function (config) {
  const j = require('jscodeshift')

  const output = j(config.code)
    .find(j.FunctionExpression)
    // We check for this expression, as if it's in a function expression, we don't want to re-bind "this" by
    // using the arrowFunctionExpression. As that could potentially have some unintended consequences.
    .filter(p => j(p).find(j.ThisExpression).size() == 0)
    .replaceWith(p => {
      var body = p.value.body;
      // We can get a bit clever here. If we have a function that consists of a single return statement in it's body,
      // we can transform it to the more compact arrowFunctionExpression (a, b) => a + b, vs (a + b) => { return a + b }
      var useExpression = body.type == 'BlockStatement' && body.body.length == 1 && body.body[0].type == "ReturnStatement";
      body = useExpression ? body.body[0].argument : body;
      return j.arrowFunctionExpression(p.value.params, body, useExpression);
    })
    .toSource();
  return { output }
};