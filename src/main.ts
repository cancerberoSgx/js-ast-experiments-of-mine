import { loadMonacoAmdFromExternalCdn, Workspace, ProjectNature, AbstractProject, AbstractFile, getMonacoModelFor, renderEditor, Editor } from 'monaco-typescript-project-util';
import ReactDOM from 'react-dom';
import { examples } from './examples';
import { State } from './types';
import layout from './ui/layout';
import { getInputProjectFor } from './util';
import projectEditorContainer from './ui/projectEditorContainer';

loadMonacoAmdFromExternalCdn('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.13.1/min/')

// import * as monaco from 'monaco-editor'
abstract class JsAstAbstractWorkspace extends Workspace {
  project: AbstractProject;
  constructor(protected container: HTMLElement) {
    super()
  }
  public selectedFileChanged(fileName: string): void {
    // we will ignore this for now - not important to support navigation between files right now
    // this.selectedFile = this.project.files.find(file => file.fileName === fileName) || this.getSelectedFile()
    // this.render()
  }
}
export class InputProjectWorkspace extends JsAstAbstractWorkspace {
  render() {
    ReactDOM.render(projectEditorContainer( getState(), this.project, this.project.files[0]), this.container)
  }
  updateProject(project: AbstractProject){
    this.project = project
    state = Object.assign({}, state, {
      inputProject: this.project
    })
    this.render()
  }
  start(): Promise<any> {
    return new Promise(resolve=>{
      this.updateProject(getInputProjectFor(getState().selectedExample))
      resolve()
      // this.projectChanged(this.project)
      // .then(()=>{
        // debugger
        // resolve()
      // })
      // .catch(()=>{
      //   debugger
      //   resolve()
      // })
    })
    // return Promise.resolve()
    //   .then(() => {
        
    //     return Promise.resolve() // This will load the project typescript - monaco auxiliary langauges / libraries, etc
    //   })
    //   .then(() => this.projectChanged(this.project))
    //   .catch(ex=>{  // TODO: framework should not throw if i configure it
    //     return Promise.resolve(this.projectNature)
    //   })  
  }

  // getExecutableFile(): AbstractFile { // this should be responsibility of the model - to know which of its files is the executable one... this is a temporary solution
  //   return this.project.files[0]
  // }
}

export class OutputProjectWorkspace extends JsAstAbstractWorkspace {
  private editor: Editor;
  render() {
    if(!this.editor){
      this.editor = renderEditor({container: this.container, file: this.project.files[0], width:"100%", height:"800px"})
    }
    else {
      this.editor.monacoEditor.setValue(this.project.files[0].content)
    }
  }
  private updateProject(project: AbstractProject): void {
    this.project = project
    state = Object.assign({}, state, {
      outputProject: this.project
    })
    this.render()
  }
  private started: boolean=false
  start(project: AbstractProject): Promise<any> {
    return new Promise(resolve=>{
      this.updateProject(project)
    })
  }
  projectUpdated(project: AbstractProject){
    if(!this.started){
      this.start(project)
    }else{
      // const model = getMonacoModelFor(project.files[0])
      // model.setValue(project.files[0].content)
      // this.editor.monacoEditor
      this.updateProject(project)
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
// we render the main application skeleton now since it doesn't depend on monaco, or anything, is just 
// a skeleton layout that will define the containers for our two workspaces. 
ReactDOM.render(layout(state), document.getElementById('mainApplicationContainer'))


export const inputWorkspace = new InputProjectWorkspace(document.getElementById('inputWorkspaceContainer'))

export const outputWorkspace = new OutputProjectWorkspace(document.getElementById('outputWorkspaceContainer'))

// we start the input workspace only, when is ready we render it with the input file
inputWorkspace.setup()
  .then(() => inputWorkspace.start())
  // .then(()=>{
  // // debugger
  // })
  .catch(ex=>{// the framework should not throw if there is no package json - or perhaps we ca configure it as so.
    debugger 
  })


// outputWorkspace.setup().then(() => outputWorkspace.start())

