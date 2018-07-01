module.exports = (file) => {
  const j = require('jscodeshift')
  const root = j(file.code);

  const rmObjectAssignCall = path =>
    j(path).replaceWith(
      j.objectExpression(
        path.value.arguments.reduce(
          (allProperties, { comments, ...argument }) => {
            if (argument.type === 'ObjectExpression') {
              const { properties } = argument;
              // Copy comments.
              if (properties.length > 0 && comments && comments.length > 0) {
                properties[0].comments = [
                  ...(properties[0].comments || []),
                  ...(comments || [])
                ];
              }
              return [...allProperties, ...properties];
            }

            return [...allProperties, { ...j.spreadProperty(argument), comments }];
          }, [])
      )
    );

  root
    .find(j.CallExpression, {
      callee: { object: { name: 'Object' }, property: { name: 'assign' } },
      arguments: [{ type: 'ObjectExpression' }]
    })
    .filter(p => !p.value.arguments.some(a => a.type === 'SpreadElement'))
    .forEach(rmObjectAssignCall);

  return {output: root.toSource({ quote: 'single' })}
};
