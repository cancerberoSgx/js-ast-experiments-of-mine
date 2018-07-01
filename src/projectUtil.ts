import { Example, JsAstExampleResult } from './types';
import { AbstractProject, AbstractFile } from 'monaco-typescript-project-util';
import { getFiles } from './examplesFileLoader';

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
export function getInputCodeProjectFor(e: Example): AbstractProject {
  return {
    name: e.name+'-input-code',
    files: getFiles().filter(f=>f.fileName === e.inputCodeFileName)
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


