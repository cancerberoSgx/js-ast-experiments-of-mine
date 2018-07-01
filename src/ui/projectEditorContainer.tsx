import { Editor, AbstractProject, AbstractFile } from 'monaco-typescript-project-util';
import { State } from '../types';
import React from "react";

export default (state: State, editorProject: AbstractProject, editorProjectSelectedFile: AbstractFile = editorProject.files[0]) => 

  <Editor file={editorProjectSelectedFile} monacoEditorOptions={{ automaticLayout: true }} />

