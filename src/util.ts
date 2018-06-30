import { Example, JsAstExampleResult } from './types';
import { AbstractProject } from 'monaco-typescript-project-util';

export function getInputProjectFor(e: Example): AbstractProject {
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


export function getOutputProjectFor(result: JsAstExampleResult): AbstractProject {
  return {
    name: 'output project',
    files: [
      {
        fileName: 'src/output.js',
        content: result.output || result.error && (result.error.toString() + ' - ' + result.error.stack) || (' undefined result '+result ),
        isDirectory: false
      }
    ]
  }
}

export function createEmptyProject(){
  return {
    name: 'empty1',
    files: [
      {
        fileName: `src/empty_${Date.now()}.js`,
        content: '',
        isDirectory: false
      }
    ]
  }
}


