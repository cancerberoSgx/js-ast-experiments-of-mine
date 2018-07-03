import { examples } from './examples';
import { JsAstExampleResult, JsAstExampleExecute } from './types';
import { getState, programCodeWorkspace, outputWorkspace, inputCodeWorkspace } from './workspace';
import { getMonacoModelFor } from 'monaco-typescript-project-util';
import { getOutputProjectFor, getInputProjectFor, getInputCodeProjectFor, createEmptyProject } from './projectUtil';
import { executeProgram } from './executeUtil';

export function dispatchSelectExample(name: string) {
  const example = examples.find(e => e.name == name)
  getState().selectedExample = example
  programCodeWorkspace.projectUpdated(getInputProjectFor(example))
  inputCodeWorkspace.projectUpdated(getInputCodeProjectFor(example))
  window.location.hash = encodeURIComponent(name)
  dispatchExecuteExample()
  // outputWorkspace.projectUpdated(createEmptyProject()) 
} 

// This execute dispatcher is a hack. at the bottom we override global AMD require and we must require the
// libraries in this context so later, in the eval, when we switch requires it work!
export function dispatchExecuteExample(): JsAstExampleResult {
  const inputCodeFile = getState().inputCodeProject.files[0]
  const inputCodeModel = getMonacoModelFor(inputCodeFile)
  const file = getState().inputProject.files[0]
  const model = getMonacoModelFor(file)
  let evalResult: JsAstExampleResult
  if (model && model.getValue && inputCodeModel && inputCodeModel.getValue) {
    const programText = model.getValue()
    const inputCodeText = inputCodeModel.getValue()  
    evalResult = executeProgram(programText, inputCodeText)
  } 
  else {
    evalResult = { error: new Error('Cannot obtain value from input editor') }
  }
  outputWorkspace.projectUpdated(getOutputProjectFor(evalResult, getState().selectedExample))
  // console.log('evalResult', evalResult)
  if (evalResult.error) {
    console.trace(evalResult.error)
  }
  return evalResult
}

