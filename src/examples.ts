import { getFiles } from './examplesFileLoader';
import { Example } from './types';

export function getExamples(){
  return examples
}
export const examples: Example[] = [
  {
    name: 'recast JavaScript simple 1',
    programFileName: 'recast1.js',
    inputCodeFileName: 'recast1_inputCode.js',
    execute: require('./examples/recast1') as any,
    description: "simple example using recast that switch first two parameters of function declarations with name `add` "
  },

  {
    name: 'recast TypeScript parsing 1',
    programFileName: 'recast_parsingTs.js',
    inputCodeFileName: 'recast_parsingTs_inputCode.ts',
    outputCodeFileName: 'src/recast_parsingTs_outputCode.ts',
    execute: require('./examples/recast_parsingTs'),
    description: "Parse TypeScript using recast. prints back the code and prints Ts AST in the console"
  },
  {
    name: '(JS) jscodeshift sample 1',
    programFileName: 'jscodeshift1.js',
    inputCodeFileName: 'jscodeshift1_inputCode.js',
    execute: require('./examples/jscodeshift1'),
    description: "use jscodeshift to rename the id `foo` to `var`"
  },
  {
    name: '(JS) ast-types sample 1',
    programFileName: 'ast-types1.js',
    inputCodeFileName: 'ast-types1_inputCode.js',
    execute: require('./examples/ast-types1'),
    description: `Uses ast-types to transverse AST and modify it: adds an statement  \`var superArgs = Array.prototype.slice.call(arguments, 2);\` as first child of each function declaration body`
  },

  {
    name: '(TS) codeshift transform TypeScript',
    programFileName: 'jscodeshift_transformTs.js',
    inputCodeFileName: 'jscodeshift_transformTs_inputCode.ts',
    execute: require('./examples/jscodeshift_transformTs'),
    description: `Uses jscodeshift to transform TypeScript code renaming variable declarations named 'foo' to bar`
  },
]


console.log(getFiles());
