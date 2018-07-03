

# TODO

 * separate libraries in a different bundle so development / compilation is fast
 * be able to edit programs using ts, transpile in the browser (using LS from monaco) and evaluate that
 * make bankai work
 * an example can declare more than one inputcodefile and accept a configuration with the input name so it can configure (the parser) - this wey i can try all the transformaitons both with javascript and typescript - i only need to write the ts input code 


## Done
 * 
 * run https://github.com/cpojer/js-codemod/, https://github.com/jhgg/js-transforms, etc
 * auto-execute when example is selected
 * associate a url hash to each example
 * an option to show a diff editor between codeinput and output
 * introduce example tags for library, example-set, language, complexity level: ej: 'js-tranforms', js-codemomde, recast, ast-types, jscodemode, astree, acorn, etc

## Projects to include

 * 
 * what about eslint plugins and fixes - can we run them here ?: can we isolate : https://github.com/eslint/eslint/blob/master/lib/ast-utils.js ? it uses https://github.com/eslint/espree and https://github.com/estools/esutils
 * run https://github.com/facebook/regenerator
 * https://github.com/reactjs/react-codemod
 * https://github.com/tanem/recast-deamdify/blob/master/lib/deamdify.js
 * https://github.com/stefanpenner/es3-safe-recast/blob/master/index.js
 * https://www.npmjs.com/package/transform-imports
 * https://github.com/5to6/5to6-codemod
 * https://github.com/bfncs/codemod-imports-sort
 * https://www.npmjs.com/package/cjs-to-es6
 * https://github.com/fivetanley/jasmine2chai
 * https://www.npmjs.com/package/amd-codemod
 * https://www.npmjs.com/package/pure-component-to-class
 * https://www.npmjs.com/package/co-to-async

### eslint ones
 * https://github.com/eslint/typescript-eslint-parser
 * https://github.com/estools/escope
 * https://estools.github.io/esmangle/
 * https://github.com/mazurov/eslevels
 https://github.com/eslint/eslint-visitor-keys


 # Future / ideas

 * start designing how it would be transformation at a project level instead of just a file. For example, things like https://github.com/jurassix/refactoring-codemods act on a project (set of files) - We could show several files as a project and apply refactors like these and show the output also as  a project and not just a single file. Perhaps we should introduce this in candombed / ts ?
 * can we run these refactors in candombed ?


 ## Tools to investigate - related

 * https://www.npmjs.com/package/gen-codemod