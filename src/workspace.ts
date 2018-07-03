import * as monaco from 'monaco-editor';
import { AbstractFile, AbstractProject, Editor, getMonacoModelFor, renderEditor, Workspace } from 'monaco-typescript-project-util';
import { examples } from './examples';
import { State } from './types';
import { verticalPaneChanged } from './uiUtil';
import { renderLayout } from './main';

type ProjectKind = 'outputProject' | 'inputProject' | 'inputCodeProject'

export class JsAstWorkspace extends Workspace {

  project: AbstractProject;
  currentFile: AbstractFile;
  
  constructor(protected container: HTMLElement, protected projectKind: ProjectKind) {
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
  projectUpdated(project: AbstractProject): Promise<any> {
    this.project = project
    this.currentFile = this.project.files[0]
    state = Object.assign({}, state, {
      [this.projectKind]: this.project // object key assignment expression - es6 - cool! :)
    })
    renderLayout()
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

export let programCodeWorkspace: JsAstWorkspace

export let outputWorkspace: JsAstWorkspace

export let inputCodeWorkspace: JsAstWorkspace

export function createWorkspaces() {

  programCodeWorkspace = new JsAstWorkspace(
    document.getElementById('inputWorkspaceContainer'), 'inputProject')

  outputWorkspace = new JsAstWorkspace(
    document.getElementById('outputWorkspaceContainer'), 'outputProject')

  inputCodeWorkspace = new JsAstWorkspace(
    document.getElementById('inputCodeWorkspaceContainer'), 'inputCodeProject')
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
