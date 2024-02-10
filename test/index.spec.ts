import { fromJSON, GFGrammar, Fun } from '../src/index'
import ZeroGrammarModule from './grammars/ZeroModule'

import 'mocha'
import * as should from 'should'
import { readFileSync } from 'fs'


describe('Zero', (): void => {
  let grammar: GFGrammar

  before((): void => {
    let json = JSON.parse(readFileSync('./test/grammars/Zero.json').toString())
    let g = fromJSON(json)
    grammar = g as GFGrammar
  })

  it('imports from JS', (): void => {
    should.exist(ZeroGrammarModule)
  })

  it('imports from JSON', (): void => {
    should.exist(grammar)
    should.exist(grammar.abstract)
    should.exist(grammar.concretes.ZeroEng)
    should.exist(grammar.concretes.ZeroSwe)
  })

  let treeS = 'eat apple'
  let tree = new Fun('eat', new Fun('apple'))

  it('parses and prints tree', (): void => {
    let t = grammar.abstract.parseTree(treeS)
    should.exist(t)
    t && t.should.deepEqual(tree)
    t && t.print().should.equal(treeS)
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


describe('List', (): void => {
  let grammar: GFGrammar

  before((): void => {
    let json = JSON.parse(readFileSync('./test/grammars/List.json').toString())
    let g = fromJSON(json)
    grammar = g as GFGrammar
  })

  it('imports from JSON', (): void => {
    should.exist(grammar)
    should.exist(grammar.abstract)
    should.exist(grammar.concretes.ListEng)
  })

  // it('parses 3 items', (): void => {
  //   let str = 'Foo , Bar and Bat'
  //   let tree_expected = grammar.abstract.parseTree('mkSimpleListNP (mkSimpleConsList Foo (mkSimpleList Bar Bat))')
  //   let tree_actual = grammar.concretes.ListEng.parseString(str, 'SimpleListNP')
  //   should.equal(tree_actual, tree_expected)
  // })

})
