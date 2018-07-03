import * as monaco from 'monaco-editor';
import { AbstractFile, AbstractProject, Editor, getMonacoModelFor, loadMonacoAmdFromExternalCdn, renderEditor, Workspace } from 'monaco-typescript-project-util';
import ReactDOM from 'react-dom';
import { examples } from './examples';
import { getInputCodeProjectFor, getInputProjectFor } from './projectUtil';
import { State } from './types';
import layout from './ui/layout';
import { verticalPaneChanged } from './ui/layoutPaneResizeUtil';

type ProjectKind = 'outputProject' | 'inputProject' | 'inputCodeProject'

class JsAstWorkspace extends Workspace {
  project: AbstractProject;
  currentFile: AbstractFile;
  constructor(protected container: HTMLElement, protected projectKind: ProjectKind){
    super() 
  }
  selectedFileChanged(fileName: string): void {
    // we will ignore this for now - not important to support navigation between files right now
  }
  setEditorWidth(w: number): any {
    this.container.style.width = `${w}px`
    const editorEl = this.container.querySelector<HTMLDivElement>('.editor')
    if (editorEl) {
      editorEl.style.width = `${w}px`
    }
  }
  setEditorHeight(h: number): any {
    this.container.style.height = `${h}px`
    const editorEl = this.container.querySelector<HTMLDivElement>('.editor')
    if (editorEl) {
      editorEl.style.height = `${h}px`
    }
  }
  getCurrentFileModel(): monaco.editor.ITextModel {
    const model = getMonacoModelFor(this.currentFile)
    model.setValue(this.currentFile.content)
    return model
  }
  // abstract render(): void
  projectUpdated(project: AbstractProject): Promise<any> {
    this.project = project
    this.currentFile = this.project.files[0]
    state = Object.assign({}, state, {
      [this.projectKind]: this.project // object key assignment expression - es6 - cool! :)
    })
    this.render()
    return Promise.resolve()
  }

  protected editor: Editor;
  render() {
    if (!this.editor) {
      this.editor = renderEditor({
        container: this.container,
        file: this.currentFile,
        monacoEditorOptions: {
          automaticLayout: true
        }
      })
      setTimeout(() => verticalPaneChanged(0), 400)
    }
    else {
      const model = this.getCurrentFileModel()
      this.editor.monacoEditor.setModel(model)
      // console.log('on render: ', file.fileName, model.uri.fsPath, file.content, model.getValue())
    }
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


// start

loadMonacoAmdFromExternalCdn('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/')

// we render the main application skeleton now since it doesn't depend on monaco, or anything, is just 
// a skeleton layout that will define the containers for our two workspaces. 
ReactDOM.render(layout(state), document.getElementById('mainApplicationContainer'))

export const programCodeWorkspace = new JsAstWorkspace(
  document.getElementById('inputWorkspaceContainer'), 'inputProject')

export const outputWorkspace = new JsAstWorkspace(
  document.getElementById('outputWorkspaceContainer'), 'outputProject')

export const inputCodeWorkspace = new JsAstWorkspace(
  document.getElementById('inputCodeWorkspaceContainer'), 'inputCodeProject')

// we start the input workspace only, when is ready we render it with the input file
programCodeWorkspace.setup()
  .then(() => programCodeWorkspace.projectUpdated(getInputProjectFor(getState().selectedExample)))
  .then(() => {
    inputCodeWorkspace.setup()
      .then(() => inputCodeWorkspace.projectUpdated(getInputCodeProjectFor(getState().selectedExample)))
      .then(() => setTimeout(() => verticalPaneChanged(0), 200))
  }) 
