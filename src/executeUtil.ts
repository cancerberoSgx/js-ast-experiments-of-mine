import { JsAstExampleExecute, JsAstExampleResult } from './types';

export function getModuleExports(code: string): JsAstExampleExecute | { error: Error } {
  return eval(`
(function() {
  try {
    const module = { exports: { error: new Error('Failed to obtain function from evaluator')} };
    var result__ = (function(module, require) {
      ${code} ;
    })(module, window.requireCommons_);
    return module.exports;
  }
  catch(ex) {
    return { error: ex }
  }
})()
`)
}

export function executeProgram(programCode: string, inputCode: string): JsAstExampleResult {
  let evalResult: JsAstExampleResult
  try {
    const exec = getModuleExports(programCode)
    if ((exec as any).error) {
      throw new Error((exec as any).error)
    }
    evalResult = (exec as JsAstExampleExecute)({ code: inputCode })
  } catch (error) {
    evalResult = { error }
  }
  return evalResult
}


// hack - we store the commons js require() in a global here because is replaced with AMD require by monaco-editor
; (window as any).requireCommons_ = require

// hack - because of the last hack we need to include all the libraries in this context so they are 
// available in this require()'s closure (browserify)
const recast = require('recast')
const types = require("ast-types")
const jscodeshift = require('jscodeshift')
const esprima = require('esprima')
const parser = require('recast/parsers/typescript')
const eslint = require('eslintbro')
