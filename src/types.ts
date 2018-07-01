import { AbstractProject } from 'monaco-typescript-project-util';

export interface JsAstExampleOptions {
  code: string
}
export interface JsAstExampleResult {
  output?: string
  error?: Error
}
export type JsAstExampleExecute = (args: JsAstExampleOptions) => JsAstExampleResult
export interface Example {
  execute: JsAstExampleExecute,
  description: string
  name: string
}
export interface State {
  inputProject?: AbstractProject
  outputProject?: AbstractProject
  inputCodeProject?: AbstractProject
  selectedExample?: Example
  examples: Example[]
}
