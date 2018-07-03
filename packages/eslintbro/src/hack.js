module.exports.___util__ =  {
  './ast-utils': require('./ast-utils'),
  './util/fix-tracker': require('./util/fix-tracker'),
  "lodash": require("lodash"),
  "espree": require("espree"),  
  "./util/keywords": require("./util/keywords"),
  "natural-compare":  require("natural-compare"),
  "./util/patterns/letters": require("./util/patterns/letters"),
  "esutils": require("esutils"),
  "functional-red-black-tree": require("functional-red-black-tree"),
  "regexpp": require("regexpp"),
  "ignore": require("ignore"),
  "./util/traverser": require("./util/traverser"), 
  "./linter": require('./linter'), 
  'require': require, 
  'typescript-eslint-parser': (function(){try {return require('typescript-eslint-parser')}catch(ex){return undefined}})() // /so it gests combined in the bundle
};
if (typeof window!=='undefined'){
  window.___Linter__ = module.exports;
}