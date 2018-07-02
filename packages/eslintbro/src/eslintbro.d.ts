import { Linter as LinterType } from 'eslint'
// import {Linter, require} from 'eslintbro'

// declare module eslintbro{

//   export default interface EslintFacade {
//     require(s: string): any
//     Linter: typeof LinterType
//   }
// } 

declare namespace eslintbro{
  function require(s: string): any
  function newLinter(...args: any[]): Linter
  // type Linter = typeof LinterType
  // const Linter : typeof
}

export = eslintbro
export as namespace eslintbro

// export const Linter: typeof Linter

// export const require: (s: string) => any 