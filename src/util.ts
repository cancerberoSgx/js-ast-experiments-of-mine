import { Example } from './types';
import { AbstractProject } from 'monaco-typescript-project-util';

export function exampleToProject(e: Example): AbstractProject {
  return {
    name: e.name,
    files: [
      {
        fileName: 'src/' + require('filenamify')(e.name) + '.js',
        content: e.execute.toString(),
        isDirectory: false
      }
    ]
  }
}
