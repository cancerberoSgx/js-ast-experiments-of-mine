
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
  return examples
}