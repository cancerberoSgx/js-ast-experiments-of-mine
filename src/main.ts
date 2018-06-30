import { loadMonacoAmdFromExternalCdn, Workspace } from 'monaco-typescript-project-util';
import ReactDOM from 'react-dom';
import { examples } from './examples';
import { State } from './types';
import layout from './ui/layout';
import { exampleToProject } from './util';

loadMonacoAmdFromExternalCdn('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/')

export class OurAwesomeProjectEditor extends Workspace {
  private container: HTMLElement
  state: State
  start() {
    this.state = {
      selectedExample: examples[0],
      project: exampleToProject(examples[0]),
      examples: examples
    }
    this.projectChanged(this.state.project)
    this.render()
  }
  render() {
    if (!this.container) {
      this.container = document.createElement('div')
      this.container.setAttribute('id', 'jsAstExampleAppContainer')
      document.body.appendChild(this.container)
    }
    ReactDOM.render(layout(this.state), this.container)
  }

  public selectedFileChanged(fileName: string): void {
    // we will ignore this for now - not important to support navigation between files right now
    // this.selectedFile = this.project.files.find(file => file.fileName === fileName) || this.getSelectedFile()
    // this.render()
  }
}


export const sourceWorkspace = new OurAwesomeProjectEditor()
sourceWorkspace.setup().then(() => sourceWorkspace.start())