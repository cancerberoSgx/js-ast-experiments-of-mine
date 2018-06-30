import { Example } from './types';
import { AbstractProject } from 'monaco-typescript-project-util';

export function exampleToProject(e: Example): AbstractProject {
  return {
    name: e.name,
    files: [
      {
        fileName: 'src/' + require('filenamify')(e.name) + '.js',
        content: 'var dummy = 123123',//e.content,
        isDirectory: false
      }
    ]
  }
}
