import { AbstractProject, AbstractFile } from 'monaco-typescript-project-util';
import { Example } from './types';

export const examples: Example[] = [
  {
    name: 'recast JavaScript simple 1',
    execute: require('./examples/recast1') as any,
    description: "simple example using recast that switch first two parameters of function declarations with name `add` "
  },

  {
    name: 'recast TypeScript parsing 1',
    execute: require('./examples/recast_parsingTs'),
    description: "Parse TypeScript using recast. prints back the code and prints Ts AST in the console"
  },
  {
    name: '(JS) jscodeshift sample 1',
    execute: require('./examples/jscodeshift1'),
    description: "use jscodeshift to rename the id `foo` to `var`"
  },
  {
    name: '(JS) ast-types sample 1',
    execute: require('./examples/ast-types1'),
    description: `Uses ast-types to transverse AST and modify it: adds an statement  \`var superArgs = Array.prototype.slice.call(arguments, 2);\` as first child of each function declaration body`
  },

]

