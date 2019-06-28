import { fromJSON, GFGrammar } from '../src/index'
import grammar from './grammars/ZeroModule'

import 'mocha'
import * as should from 'should'
import { readFileSync } from 'fs'

describe('Importing', (): void => {

  it('should import from JS', (): void => {
    should.exist(grammar)
  })

  it('should import from JSON', (): void => {
    let json = JSON.parse(readFileSync('./test/grammars/Zero.json').toString())
    let grammar: GFGrammar | null = fromJSON(json)
    should.exist(grammar)
  })

})
