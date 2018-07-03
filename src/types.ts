import { AbstractProject } from 'monaco-typescript-project-util';
import { ExampleTagName } from './examples';

export interface JsAstExampleOptions {
  code: string
}
export interface JsAstExampleResult {
  output?: string
  error?: Error
}
export type JsAstExampleExecute = (args: JsAstExampleOptions) => JsAstExampleResult
export interface Example {
  description: string
  name: string
  programFileName: string
  inputCodeFileName: string
  outputCodeFileName?: string,
  tags?: {
    tag: ExampleTagName, 
    values: string[] 
  } [] 
}

export interface State {
  inputProject?: AbstractProject
  outputProject?: AbstractProject
  inputCodeProject?: AbstractProject
  selectedExample?: Example
  examples: Example[]
}
