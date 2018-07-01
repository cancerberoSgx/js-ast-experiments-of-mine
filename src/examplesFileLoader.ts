// this file only takes care of loading the embedded examples files using br-fs-to-json. Please modify it only
// if you know what you are doing

import { fs2json } from 'fs-to-json'

export interface ExampleFile {
  fileName: string
  content: string
}

let examples: ExampleFile[]
fs2json({
  input: 'dist/src/examples/**/*',
  formatted: true,
  filenamePropertyName: 'fileName',
  contentPropertyName: 'content',
  outputStyle: 'array'
}).then((files: any) => {
  examples = files
  examples.forEach(file => { // fix the names
    file.fileName = file.fileName.substring('dist/src/examples/'.length, file.fileName.length)
  })
})

export function getFiles(): ExampleFile[] {
  return examples // heads up - fs2json promise resolves sync so examples will be defined here
}