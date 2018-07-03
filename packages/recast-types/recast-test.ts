import * as recast from 'recast'

recast.parse('var a', {parser: require('acorn')})