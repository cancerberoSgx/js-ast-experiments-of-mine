import { AbstractProject } from 'monaco-typescript-project-util';
import { basename, extname } from 'path';
import { getFiles } from './examplesFileLoader';
import { Example, JsAstExampleResult } from './types';

export function getInputProjectFor(e: Example): AbstractProject {
  return {
    name: e.name,
    files: getFiles().filter(f=>f.fileName===e.programFileName)
    // files: [
    //   {
    //     fileName: 'src/' + require('filenamify')(e.name) + '.js',
    //     content: getFiles().find(f=>f.content===e.programFileName). 'const execute = ' + e.execute.toString(),
    //     isDirectory: false
    //   }
    // ]
  }
}
export function getInputCodeProjectFor(e: Example): AbstractProject {
  return {
    name: e.name + '-input-code',
    files: getFiles().filter(f => f.fileName === e.inputCodeFileName)
  }
}

export function getOutputProjectFor(result: JsAstExampleResult, e: Example): AbstractProject {
  return {
    name: 'output project',
    files: [
      {
        fileName: e.outputCodeFileName || basename(e.inputCodeFileName, extname(e.inputCodeFileName)) + '_output' + extname(e.inputCodeFileName),
        content: result.output || result.error && (result.error.toString() + ' - ' + result.error.stack) || (' undefined result ' + result),
        isDirectory: false
      }
    ]
  }
}

export function createEmptyProject() {
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


