//TODO: right now this will work

function buildExports(w) {
  return {
    Linter: w.___Linter__,
    require: function (moduleName) {
      return w.___Linter__.___util__[moduleName]
    }
  }
}
if (typeof window !== 'undefined') {
  if (window.___Linter__ && window.___Linter__.___util__) {
    module.exports = buildExports(window)
  }
  // const eslint = require('eslint')
  // if (eslint && eslint.Linter && eslint.Linter.___Linter__ && eslint.___Linter__.___util__) {
  //   module.exports = buildExports(eslint.Linter)
  // }
}