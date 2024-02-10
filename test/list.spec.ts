import { fromJSON, GFGrammar, Fun } from '../src/index'
import grammarJS from './grammars/ListModule'

import 'mocha'
import * as should from 'should'
import { readFileSync } from 'fs'

var grammar: GFGrammar

before((): void => {
  let json = JSON.parse(readFileSync('./test/grammars/List.json').toString())
  let g = fromJSON(json)
  if (g) grammar = g as GFGrammar
})

describe('Importing', (): void => {

  it('imports from JS', (): void => {
    should.exist(grammarJS)
  })

  it('imports from JSON', (): void => {
    should.exist(grammar)
  })

})

describe('Parsing', (): void => {

  let treeS = 'Foo , Bar and Bat'

  it('parses tree', (): void => {
    let t = grammar.abstract.parseTree(treeS)
    should.exist(t)
  })

})
