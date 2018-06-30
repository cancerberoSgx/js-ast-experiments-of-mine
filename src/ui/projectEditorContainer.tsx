import { Editor } from 'monaco-typescript-project-util';
import { State } from '../types';
import React from "react";
export default (state: State, id: string)=>(

 <Editor file={state.project.files[0]} width="100%" height="800px"/>
)
  // <Editor file={state.project.files[0]} width="100%" height="800px"/>
  // file={file} width="100%" height={'800px'} s