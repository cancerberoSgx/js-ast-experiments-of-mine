import { Editor, AbstractProject, AbstractFile } from 'monaco-typescript-project-util';
import { State } from '../types';
import React from "react";

const initialHeight = Math.trunc(document.documentElement.clientHeight/2)
console.log('ssss',initialHeight+'px')

export default (state: State, editorProject: AbstractProject, editorProjectSelectedFile: AbstractFile = editorProject.files[0]) => (

  <Editor file={editorProjectSelectedFile} width={document.body.clientWidth+'px'} height={'479px'} />

)
