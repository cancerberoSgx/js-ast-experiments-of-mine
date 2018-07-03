# [JavaScript AST Playground](https://cancerberosgx.github.io/js-ast-experiments-of-mine/)

 * Explore a collection of working examples using technologies related to JavaScript / TypeScript source code parsing, AST, transformations, etc. 
 * Modify the examples, run them again, experiment, play...
 * A playground 100% in the browser
 * From very simple examples to learn the basics of APIs
 * To production-ready transformations like: 
  - [eslint](https://github.com/eslint/eslint/tree/master/lib/rules)
  - [js-codemode](https://github.com/cpojer/js-codemod)
  - [js-transforms](https://github.com/jhgg/js-transforms)
  - [react-codemod](https://github.com/reactjs/react-codemod) 
  - (I just copy&paste the transformation from original sources and made them run in the browser so you can play with them)
 * Libraries available:
  - [recast](https://github.com/benjamn/recast)
  - [ast-types](https://github.com/benjamn/ast-types)
  - [eslint](https://github.com/eslint/)
  - [eslint/typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser)
  - [jscodeshift](https://github.com/facebook/jscodeshift)
 * an special interest in run all this examples also against TypeScript input source

## Other features

 * Diff editor to see differences between input and transformed code
 * **example tags** because there are so many I'm adding tags to examples, for example: 
  - [eslint ones](http://localhost:3000/#showTaggedExamples=technology/eslint)
  - [TypeScript related](http://localhost:3000/#showTaggedExamples=language/TypeScript), 
  - [easy ones](http://localhost:3000/#showTaggedExamples=difficulty/easy)

# Development

npm run dev


# Build production bundle

`npm run build-production` : will generate docs/ folder with working app.
