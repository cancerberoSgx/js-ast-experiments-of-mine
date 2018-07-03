# Motivation

We want to crate an application that:

 * allows users to write eslint rules implementation
 * we want users to be able to modify rules provided by eslint itself - not just third party's 
 * install these implementations
 * runs eslint against any given input code
 * we are particularly interested in --fix code with eslint rules fixer 
 * and again, all this dynamically in the browser, like we already did with other JS AST related tools in https://github.com/cancerberoSgx/js-ast-experiments-of-mine

# Why ?

 * again, the best eslint rules are part of eslint project, we want to run / those 
 * these eslint rules depends on some built-in utilities that are not part of the publci eslint API and not exposed, like ast-util
 * esint provides a bundle for the browser
 * but unfortunately it doesnt expose internal tools needed by most rules implementations, like './ast-utils'
 * current bundle only allows to use the public stuff, doesn't seem to be an easy hack to get needed dependencies
 * (I know the risks of accessing non public APIs, but this is just for fun)

# What's this

 * provides instructions to generate eslint.js form eslint clone that expose these internal apis.
 * contains such a hacked version of eslint
 * contains a small facade to access the utilities rules needs
 * publish in npm a module that expose similar api to eslint, plus accessor to needed utilities, that will work in the browser bot from global variable or browserify / UMD projects. 


# hack eslint instructions

```
git clone eslint
cd eslint
npm i 
cat $THISFOLDER/src/hack.js >> lib/linter.js
npm run browserify
```

Ready. at this point build/eslint.js is hacked

# install and run

install the hacked version on this package's sample project, compile and run:

```
cp build/eslint.js  $THISFOLDER/bundle
cd $THISFOLDER 
browserify src/test_installRuleAndExec.js -o bundle/test_installRuleAndExec.bundle.js
http-server bundle/
```

transformations wll print fixed code in the console

# How to write and run custom transformations (in the browser)

## modifications in rules code:

 * there are some eslint transformation examples in src that are copy&paste of eslint's with modifications on how they require the utilities. The only change is how they require dependencies - use use ./eslintFacade

before: 

```
const FixTracker = require("../util/fix-tracker");
const astUtils = require("../ast-utils");
```

after: 

```
const FixTracker = require("./eslintFacade").require('./util/fix-tracker')
const astUtils = require("./eslintFacade").require('./ast-utils')
```

Example custom rule: ./src/semi-custom-445.js

## how to write main.js

we need to install and execute the rule, again we use eslintFacade to access dependencies: 

```
const Linter = require("./eslintFacade").Linter;
const linter = new Linter();
const spaceBeforeBlocksRule = require('./semi-custom-445')
linter.defineRule("semi-custom-445", spaceBeforeBlocksRule);
const messages = linter.verifyAndFix("var foo", {
  rules: {
    "semi-custom-445": 2
  }
});
console.log(messages);
```

See src: test_installRuleAndSpec.js


# extras

## support typescript-eslint-parser

 * before building , in eslint project execute: 
 
   - npm i --save  typescript-eslint-parser
   - npm i --save typescript 

Heads up - typescript is very big, if you already are loading it you could use the facade included in this projecy: 
 
   - npm i --save  typescript-eslint-parser
   - npm i --save $THISFOLDER/typescript 




## support pages that are a mess with define / require / etc

 * in the case of ts-ast-types monac-editor and my hacks made a mess regarding require functions - if you dont perform the following hack eslint.js will fail (unrecognized require call) - basically is in scripts/hack_eslint and what it does is replacing all occurences of "require" for "require_2__hdhd_"