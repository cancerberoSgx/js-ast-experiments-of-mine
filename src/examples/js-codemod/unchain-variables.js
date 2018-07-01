/** Unchains chained variable declarations. */
module.exports = function(file) {
  const jscodeshift = require('jscodeshift')

  const chainedDeclarations = jscodeshift(file.code)
    .find(jscodeshift.VariableDeclaration)
    .filter(variableDeclaration => (
      variableDeclaration.value.declarations.length > 1
    ))
    .filter(variableDeclaration => (
      variableDeclaration.parent.value.type !== 'ForStatement'
    ));

  chainedDeclarations.forEach(chainedDeclaration => {
    const kind = chainedDeclaration.value.kind; // e.g. const, let, or var

    jscodeshift(chainedDeclaration)
      .replaceWith(chainedDeclaration.value.declarations.map((declaration, i) => {
        const unchainedDeclaration =
          jscodeshift.variableDeclaration(kind, [declaration]);

        if (i === 0) {
          unchainedDeclaration.comments = chainedDeclaration.value.comments;
        } else if (declaration.comments) {
          unchainedDeclaration.comments = declaration.comments;
          declaration.comments = null;
        }

        return unchainedDeclaration;
      }));
  });

  const output = chainedDeclarations.size()
    ? chainedDeclarations.toSource({quote: 'single'})
    : null;

  return {output}
};
