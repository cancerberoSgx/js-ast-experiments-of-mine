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
    // we set global require() with requireCommons_ (see below) - wrap with try catch and when it ends or
    // catch, restor the original AMD require()
    const evalText = '(function(){try{window.require=window.requireCommons_; ' + programCode + ' ;var result__= execute(' + JSON.stringify({ code: inputCode }) + ');window.require = window.requireAmd_;return result__}catch(ex){window.require = window.requireAmd_; throw ex}})()'

    evalResult = eval(evalText)
  } catch (error) {
    evalResult = { error }
  }
  return evalResult
}

// hack - we store the commons js require() in a global here because is replaced with AMD require by monaco-editor
; (window as any).requireCommons_ = require

// hack - because of the last hack we need to include all the libraries in this context so they are available in this require()'s closure (browserify)
const recast = require('recast');
var types = require("ast-types");
var jscodeshift = require('jscodeshift')
var esprima = require('esprima')
const parser = require('recast/parsers/typescript')