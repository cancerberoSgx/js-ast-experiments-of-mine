import { examples } from './examples';

export function handlerExampleSelect(exampleName){
  const example = examples.find(e=>e.name==exampleName)
  const result = example.execute({code: ''})
  debugger
} 

export function dispatchSelectExample(name: string){
  debugger

}