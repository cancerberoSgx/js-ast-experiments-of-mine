import { TODO } from './recast';

export declare interface ast extends node {
  program: node & {body: node[]}
}
export declare interface node{
  type: string
  comments:TODO
  name: string
  loc: TODO
}