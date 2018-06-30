import { AbstractProject } from 'monaco-typescript-project-util';

export interface JsAstExampleOptions {
  code: string
}
export interface JsAstExampleResult {
  output: string
}
export type JsAstExampleExecute = (args: JsAstExampleOptions) => JsAstExampleResult
export interface Example {
  execute: JsAstExampleExecute,
  description: string
  name: string
}
export interface State {
  project: AbstractProject
  selectedExample: Example
  examples: Example[]
}
