import { Example } from './types';

export function getExamples() {
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
    description: `Uses jscodeshift to transform FunctionExpression to an ArrowFunctionExpression when safe to do so. Taken from https://github.com/jhgg/js-transforms/blob/master/function-expression-to-arrow-function-expression.js`,
    tags: [
      {
        tag: 'difficulty',
        values: ['easy'],
      },
      {
        tag: 'technology',
        values: ['jscodeshift', 'js-transforms']
      },
      {
        tag: 'language',
        values: ['TypeScript']
      }
    ],
  },
  {
    name: 'jscodeshift transform TypeScript',
    programFileName: 'jscodeshift_transformTs.js',
    inputCodeFileName: 'jscodeshift_transformTs_inputCode.ts',
    description: `Uses jscodeshift to transform TypeScript code renaming variable declarations named 'foo' to bar`,
    tags: [
      {
        tag: 'difficulty',
        values: ['easy'],
      },
      {
        tag: 'technology',
        values: ['jscodeshift']
      },
      {
        tag: 'language',
        values: ['TypeScript']
      }
    ],
  },
  {
    name: 'recast JavaScript simple 1',
    programFileName: 'recast1.js',
    inputCodeFileName: 'recast1_inputCode.js',
    description: "simple example using recast that switch first two parameters of function declarations with name `add` ",
    tags: [
      {
        tag: 'difficulty',
        values: ['easy'],
      },
      {
        tag: 'technology',
        values: ['recast']
      },
      {
        tag: 'language',
        values: ['JavaScript']
      }
    ],
  },
  {
    name: 'recast TypeScript parsing 1',
    programFileName: 'recast_parsingTs.js',
    inputCodeFileName: 'recast_parsingTs_inputCode.ts',
    outputCodeFileName: 'src/recast_parsingTs_outputCode.ts',
    description: "Parse TypeScript using recast. prints back the code and prints Ts AST in the console",
    tags: [
      {
        tag: 'difficulty',
        values: ['easy'],
      },
      {
        tag: 'technology',
        values: ['recast']
      },
      {
        tag: 'language',
        values: ['TypeScript']
      }
    ],
  },
  {
    name: 'jscodeshift sample 1',
    programFileName: 'jscodeshift1.js',
    inputCodeFileName: 'jscodeshift1_inputCode.js',
    description: "use jscodeshift to rename the id `foo` to `var`",
    tags: [
      {
        tag: 'difficulty',
        values: ['easy'],
      },
      {
        tag: 'technology',
        values: ['jscodeshift']
      },
      {
        tag: 'language',
        values: ['JavaScript']
      }
    ],
  },
  {
    name: 'ast-types sample 1',
    programFileName: 'ast-types1.js',
    inputCodeFileName: 'ast-types1_inputCode.js',
    description: `Uses ast-types to transverse AST and modify it: adds an statement  \`var superArgs = Array.prototype.slice.call(arguments, 2);\` as first child of each function declaration body`,
    tags: [
      {
        tag: 'difficulty',
        values: ['easy'],
      },
      {
        tag: 'technology',
        values: ['ast-types']
      },
      {
        tag: 'language',
        values: ['JavaScript']
      }
    ],
  },

  {
    name: 'eslint/semi.js',
    programFileName: 'eslint/semi.js',
    inputCodeFileName: 'eslint/semi_inputCode.js',
    description: `eslint rule "semi" slightly hacked so it works here`,
    tags: [
      {
        tag: 'difficulty',
        values: ['hard'],
      },
      {
        tag: 'technology',
        values: ['eslint']
      },
      {
        tag: 'language',
        values: ['JavaScript']
      }
    ],
  },

]

function buildJsCodeMode(programFileName: string): Example {
  return {
    name: programFileName, programFileName,
    inputCodeFileName: programFileName.replace('.js', '.input.js'),
    description: programFileName + ' - This example was taken from https://github.com/cpojer/js-codemod/ as it is, just making minimal changes so it works here. The input code was also taken from there being being the input code using in the transformation\' unit test',
    tags: [
      {
        tag: 'difficulty',
        values: ['hard'],
      },
      {
        tag: 'technology',
        values: ['code-mode', 'jscodeshift']
      },
      {
        tag: 'language',
        values: ['JavaScript']
      }
    ],
  }
}


export type ExampleTagName = 'difficulty'|'technology'|'language'
export const exampleTagNames : ExampleTagName[]= ['difficulty', 'language', 'technology']
export const exampleTagValues = {
  'difficulty': ['easy', 'medium', 'hard'],
  'language': ['JavaScript', 'TypeScript'], 
  'technology': ['recast', 'code-mode', 'jscodeshift', 'ast-types', 'eslint', 'js-transforms']
}
