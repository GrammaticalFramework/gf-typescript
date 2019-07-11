import { fromJSON, GFGrammar, Fun } from '../src/index'
import grammarJS from './grammars/ZeroModule'

import 'mocha'
import * as should from 'should'
import { readFileSync } from 'fs'

var grammar: GFGrammar

before((): void => {
  let json = JSON.parse(readFileSync('./test/grammars/Zero.json').toString())
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

describe('Linearisation', (): void => {

  let treeS = 'eat apple'
  let tree: Fun

  it('parses tree', (): void => {
    let t = grammar.abstract.parseTree(treeS)
    should.exist(t)
    if (t) tree = t as Fun
  })

  it('linearises in English', (): void => {
    let s = grammar.concretes['ZeroEng'].linearize(tree)
    s.should.equal('eat an apple')
  })

  it('linearises in Swedish', (): void => {
    let s = grammar.concretes['ZeroSwe'].linearize(tree)
    s.should.equal('äta ett äpple')
  })

})
