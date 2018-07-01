import { AbstractProject, Editor, loadMonacoAmdFromExternalCdn, renderEditor, Workspace } from 'monaco-typescript-project-util';
import ReactDOM from 'react-dom';
import { examples } from './examples';
import { State } from './types';
import layout, { verticalPaneChanged } from './ui/layout';
import projectEditorContainer from './ui/projectEditorContainer';
import { getInputProjectFor, getInputCodeProjectFor } from './util';

loadMonacoAmdFromExternalCdn('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/')

abstract class JsAstAbstractWorkspace extends Workspace {
  project: AbstractProject;
  constructor(protected container: HTMLElement) {
    super()
  }
  selectedFileChanged(fileName: string): void {
    // we will ignore this for now - not important to support navigation between files right now
    // this.selectedFile = this.project.files.find(file => file.fileName === fileName) || this.getSelectedFile()
    // this.render()
  }
  setEditorWidth(w: number): any {
    const editor = this.container.querySelector<HTMLDivElement>('.editor')
    if (editor) {
      editor.style.width = `${w}px`
    }
  }
  setEditorHeight(h: number): any {
    const editor = this.container.querySelector<HTMLDivElement>('.editor')
    if (editor) {
      editor.style.height = `${h}px`
    }
  }
  start(project: AbstractProject): Promise<any> {
    this.projectUpdated(project)
    return Promise.resolve()
  }
  abstract render():void
  abstract projectUpdated(project: AbstractProject): void
}

export class InputProjectWorkspace extends JsAstAbstractWorkspace {
  render() {
    ReactDOM.render(projectEditorContainer(getState(), this.project, this.project.files[0]), this.container)
  }
  projectUpdated(project: AbstractProject) {
    this.project = project
    state = Object.assign({}, state, {
      inputProject: this.project
    })
    this.render()
  }
}

export class OutputProjectWorkspace extends JsAstAbstractWorkspace {
  protected editor: Editor;
  render() {
    if (!this.editor) {
      this.editor = renderEditor({ container: this.container, file: this.project.files[0], width: "800px", height: "400px" })
    }
    else {
      this.editor.monacoEditor.setValue(this.project.files[0].content)
    }
  }
  projectUpdated(project: AbstractProject) {
    this.project = project
    state = Object.assign({}, state, {
      outputProject: this.project
    })
    this.render()
  }
}

export class InputCodeProjectWorkspace extends OutputProjectWorkspace {
  projectUpdated(project: AbstractProject) {
    this.project = project
    state = Object.assign({}, state, {
      inputCodeProject: this.project
    })
    this.render()
  }
}


let state: State

export function getState(): State {
  if (!state) {
    state = {
      examples,
      selectedExample: examples[0]
    }
  }
  return state
}

// we render the main application skeleton now since it doesn't depend on monaco, or anything, is just 
// a skeleton layout that will define the containers for our two workspaces. 
ReactDOM.render(layout(state), document.getElementById('mainApplicationContainer'))

export const inputWorkspace = new InputProjectWorkspace(document.getElementById('inputWorkspaceContainer'))

export const outputWorkspace = new OutputProjectWorkspace(document.getElementById('outputWorkspaceContainer'))

export const inputCodeWorkspace = new InputCodeProjectWorkspace(document.getElementById('inputCodeWorkspaceContainer'))

// we start the input workspace only, when is ready we render it with the input file
inputWorkspace.setup()
  .then(() => inputWorkspace.start(getInputProjectFor(getState().selectedExample)))
  .then(()=>verticalPaneChanged(Math.trunc((document.body.clientHeight+57)/2)))

inputCodeWorkspace.setup()
  .then(() => inputCodeWorkspace.start(getInputCodeProjectFor(getState().selectedExample)))