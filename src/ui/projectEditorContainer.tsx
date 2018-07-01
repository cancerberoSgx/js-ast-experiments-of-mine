import { Editor, AbstractProject, AbstractFile } from 'monaco-typescript-project-util';
import { State } from '../types';
import React from "react";

// const initialHeight = Math.trunc(window.innerHeight/2)

export default (state: State, editorProject: AbstractProject, editorProjectSelectedFile: AbstractFile = editorProject.files[0]) => (

  <Editor file={editorProjectSelectedFile} 
    monacoEditorOptions={{automaticLayout: true}}/>

)
// width={window.innerWidth+'px'} height={initialHeight+'px'} 