import { Example } from './types';
import { AbstractProject } from 'monaco-typescript-project-util';

export function exampleToProject(e: Example): AbstractProject {
  return {
    name: e.name,
    files: [
      {
        fileName: 'src/' + require('filenamify')(e.name) + '.js',
        content: 'const execute = '+e.execute.toString(),
        isDirectory: false
      }
    ]
  }
}
