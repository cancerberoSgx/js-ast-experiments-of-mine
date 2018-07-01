import { examples } from './examples';
import { JsAstExampleResult, JsAstExampleExecute } from './types';
import { getState, inputWorkspace, outputWorkspace } from './main';
import { getMonacoModelFor } from 'monaco-typescript-project-util';
import { getOutputProjectFor, getInputProjectFor } from './util';

export function dispatchSelectExample(name: string) {
  const example = examples.find(e => e.name == name)
  const project = getInputProjectFor(example)
  inputWorkspace.projectUpdated(project)
}

// This execute dispatcher is a hack. at the bottom we override global AMD require and we must require the
// libraries in this context so later, in the eval, when we switch requires it work!
export function dispatchExecuteExample() : JsAstExampleResult{
  let evalResult: JsAstExampleResult


  const inputCodeFile = getState().inputCodeProject.files[0]
  const inputCodeModel = getMonacoModelFor(inputCodeFile)


  const file = getState().inputProject.files[0]
  const model = getMonacoModelFor(file)
  if (model && model.getValue && inputCodeModel && inputCodeModel.getValue) {
    const executeFunctionDeclarationText = model.getValue()
    const inputCodeText = inputCodeModel.getValue()
    try {
      // we set global require() with requireCommons_ (see below) - wrap with try catch and when it ends or
      // catch, restor the original AMD require()
      const evalText = '(function(){try{window.require=window.requireCommons_; '+executeFunctionDeclarationText+' ;var result__= execute('+JSON.stringify({code: inputCodeText})+');window.require = window.requireAmd_;return result__}catch(ex){window.require = window.requireAmd_; throw ex}})()'
      console.log(evalText);
      
      evalResult = eval(evalText)
    } catch (error) {
      evalResult = { error }
    }
  } else {
    evalResult = { error: new Error('Cannot obtain value from input editor') }
  }
  outputWorkspace.projectUpdated(getOutputProjectFor(evalResult))
  if(evalResult.error){
    console.trace(evalResult.error)
  }
  return 
}


export function getModuleExports (code: string): JsAstExampleExecute|{error: Error} {
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



// hack - we store the commons js require() in a global here because is replaced with AMD require by monaco-editor
;(window as any).requireCommons_ = require

// hack - because of the last hack we need to include all the libraries in this context so they are available in this require()'s closure (browserify)
const recast = require('recast');
var types = require("ast-types");
var jscodeshift = require('jscodeshift')
var esprima = require('esprima')
const parser = require('recast/parsers/typescript')