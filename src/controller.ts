import { getMonacoModelFor } from 'monaco-typescript-project-util';
import { examples } from './examples';
import { executeProgram } from './executeUtil';
import { getInputCodeProjectFor, getInputProjectFor, getOutputProjectFor } from './projectUtil';
import { JsAstExampleResult, State } from './types';
import { getState, inputCodeWorkspace, outputWorkspace, programCodeWorkspace } from './workspace';

export function dispatchSelectExample(name: string) {
  const example = examples.find(e => e.name == name)
  getState().selectedExample = example
  programCodeWorkspace.projectUpdated(getInputProjectFor(example))
  inputCodeWorkspace.projectUpdated(getInputCodeProjectFor(example))
  window.location.hash = encodeURIComponent(name)
  dispatchExecuteExample()
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
  if (evalResult.error) {
    console.trace(evalResult.error)
  }
  return evalResult
}

export function dispatchInitialStateFromHash(): State {
  let hash = decodeURIComponent(location.hash)
  hash = hash && hash.substring(1, hash.length)

  if (hash.startsWith('showTaggedExamples=')) {
    const path = hash.split('showTaggedExamples=')[1].split('/')
    if (path.length >= 2) {
      document.querySelector(`.examples-main-menu`).classList.add('show')
      // document.querySelector(`.examples-main-menu>.dropdown-menu`).classList.add('show')
      document.querySelector(`[data-tag="${path[0]}"]`).classList.add('show')
      document.querySelector(`[data-tag-value="${path[1]}"]`).classList.add('show')
      document.querySelector(`[data-tag-label="${path[0]}"]`).classList.add('show')
      document.querySelector(`[data-tag-value-label="${path[1]}"]`).classList.add('show')
      document.body.addEventListener('click', ()=>{
        const submenus = document.querySelectorAll(`.examples-main-menu-container *`)
        for (let i = 0; i < submenus.length; i++) {
          submenus[i].classList.remove('show')
        }}, {once: true})
    }  
  }
  let selectedExample = hash && examples.find(ex => ex.name === hash) || examples[0]
  return { examples, selectedExample }
}