import { loadMonacoAmdFromExternalCdn, Workspace } from 'monaco-typescript-project-util';
import ReactDOM from 'react-dom';
import { examples } from './examples';
import { State } from './types';
import layout from './ui/layout';
import { exampleToProject } from './util';
import projectEditorContainer from './ui/projectEditorContainer';

loadMonacoAmdFromExternalCdn('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/')

export class OurAwesomeProjectEditor extends Workspace {
  // state: State
  constructor(private container: HTMLElement){
    super()
  }
  start() {
    this.projectChanged(getState().project)
    this.render()
  }
  render() {
    ReactDOM.render(projectEditorContainer(getState(), this.container.getAttribute('id')), this.container)
  }

  public selectedFileChanged(fileName: string): void {
    // we will ignore this for now - not important to support navigation between files right now
    // this.selectedFile = this.project.files.find(file => file.fileName === fileName) || this.getSelectedFile()
    // this.render()
  }
}
let state: State = {
  selectedExample: examples[0],
  project: exampleToProject(examples[0]),
  examples
}
export function getState():State{
  return state
}

// we render the main container that can be rendered because it doesn't depend on monaco, or anything, is just 
// a skeleton layout that will define the containers for our two workspaces. 
ReactDOM.render(layout(state), document.getElementById('mainApplicationContainer'))

export const inputWorkspace = new OurAwesomeProjectEditor(document.getElementById('inputWorkspaceContainer'))
inputWorkspace.setup().then(() => inputWorkspace.start())

export const outputWorkspace = new OurAwesomeProjectEditor(document.getElementById('outputWorkspaceContainer'))
outputWorkspace.setup().then(() => outputWorkspace.start())