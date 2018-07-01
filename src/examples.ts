import { Example } from './types';

export function getExamples(){
  return examples
}
export const examples: Example[] = [

  buildJsCodeMode('js-codemod/arrow-function.js'), 
  buildJsCodeMode('js-codemod/template-literals.js'),

  buildJsCodeMode('js-codemod/arrow-function-arguments.js'),
  buildJsCodeMode('js-codemod/object-shorthand.js'),
  buildJsCodeMode('js-codemod/rm-object-assign.js'),
  buildJsCodeMode('js-codemod/unchain-variables.js'),
  buildJsCodeMode('js-codemod/trailing-commas.js'),
  buildJsCodeMode('js-codemod/no-reassign-params.js'),
  buildJsCodeMode('js-codemod/rm-requires.js'),

  {
    name: 'js-transforms/pure-to-composite-component',
    programFileName: 'js-transforms/pure-to-composite-component.js',
    inputCodeFileName: 'js-transforms/pure-to-composite-component_inputCode.js',
    description: `For when you've gone too pure and want to go back.`
  },

  { 
    name: 'js-transforms function to arrow function',
    programFileName: 'js-transforms/function-expression-to-arrow-function-expression.js',
    inputCodeFileName: 'js-transforms/function-expression-to-arrow-function-expression_inputCode.js',
    description: `Uses jscodeshift to transform FunctionExpression to an ArrowFunctionExpression when safe to do so. Taken from https://github.com/jhgg/js-transforms/blob/master/function-expression-to-arrow-function-expression.js`
  }, 
  {
    name: 'jscodeshift transform TypeScript',
    programFileName: 'jscodeshift_transformTs.js',
    inputCodeFileName: 'jscodeshift_transformTs_inputCode.ts',
    description: `Uses jscodeshift to transform TypeScript code renaming variable declarations named 'foo' to bar`
  },
  {
    name: 'recast JavaScript simple 1',
    programFileName: 'recast1.js',
    inputCodeFileName: 'recast1_inputCode.js',
    description: "simple example using recast that switch first two parameters of function declarations with name `add` "
  },
  {
    name: 'recast TypeScript parsing 1',
    programFileName: 'recast_parsingTs.js',
    inputCodeFileName: 'recast_parsingTs_inputCode.ts',
    outputCodeFileName: 'src/recast_parsingTs_outputCode.ts',
    description: "Parse TypeScript using recast. prints back the code and prints Ts AST in the console"
  },
  {
    name: 'jscodeshift sample 1',
    programFileName: 'jscodeshift1.js',
    inputCodeFileName: 'jscodeshift1_inputCode.js',
    description: "use jscodeshift to rename the id `foo` to `var`"
  },
  {
    name: 'ast-types sample 1',
    programFileName: 'ast-types1.js',
    inputCodeFileName: 'ast-types1_inputCode.js',
    description: `Uses ast-types to transverse AST and modify it: adds an statement  \`var superArgs = Array.prototype.slice.call(arguments, 2);\` as first child of each function declaration body`
  },
]

function buildJsCodeMode(programFileName:string): Example{
  return {
    name: programFileName, programFileName, 
    inputCodeFileName: programFileName.replace('.js', '.input.js'), 
    description: programFileName
  }
}