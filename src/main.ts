import { loadMonacoAmdFromExternalCdn } from 'monaco-typescript-project-util';
import ReactDOM from 'react-dom';
import { getInputCodeProjectFor, getInputProjectFor } from './projectUtil';
import layout from './ui/layout';
import { verticalPaneChanged } from './uiUtil';
import { createWorkspaces, getState, inputCodeWorkspace, programCodeWorkspace } from './workspace';
import {  dispatchExecuteExample } from './controller';


export function renderLayout() {

  // we render the main application skeleton now since it doesn't depend on monaco, or anything, is just 
  // a skeleton layout that will define the containers for our two workspaces. 
  ReactDOM.render(layout(getState()), document.getElementById('mainApplicationContainer'))
}

function startApplication() {

  loadMonacoAmdFromExternalCdn('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/')

  renderLayout()
  createWorkspaces()

  // we start the input workspace only, when is ready we render it with the input file
  programCodeWorkspace.setup()
    .then(() => programCodeWorkspace.projectUpdated(getInputProjectFor(getState().selectedExample)))
    .then(() => 
      inputCodeWorkspace.setup()
        .then(() => inputCodeWorkspace.projectUpdated(getInputCodeProjectFor(getState().selectedExample)))
        .then(()=>dispatchExecuteExample())
        .then(()=>{
          $('[data-submenu]').submenupicker();
        })
        .then(() => setTimeout(() => verticalPaneChanged(0), 200))
    )

}

startApplication()