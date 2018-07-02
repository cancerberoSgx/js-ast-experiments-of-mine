import { Linter } from 'eslint'

export interface EslintFacade {
  require(s: string): any
  Linter: typeof Linter
}

export default require('./eslintFacade') as EslintFacade