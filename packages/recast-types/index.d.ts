// Type definitions for recast 0.15.0
// Project: https://github.com/benjamn/recast
// Definitions by: Sebastian Gurin https://github.com/cancerberoSgx
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {options } from './options'
import { printResult } from './recast';
import { ast, node } from './ast';
declare interface recast {
  parse(code: string, options: options): ast
  print(node: node, options: options): printResult
}
export = recast
export as namespace recast