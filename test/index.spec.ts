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
    let grammar = ZeroGrammarModule
    should.exist(grammar.abstract)
    should.exist(grammar.concretes.ZeroEng)
    should.exist(grammar.concretes.ZeroSwe)
  })

  it('imports from JSON', (): void => {
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
    t && t.print().should.equal(tree.print())
  })

  it('linearises in English', (): void => {
    let s = grammar.concretes.ZeroEng.linearize(tree)
    s.should.equal('eat an apple')
  })

  it('linearises in Swedish', (): void => {
    let s = grammar.concretes.ZeroSwe.linearize(tree)
    s.should.equal('äta ett äpple')
  })

})



describe('Literal', (): void => {
  let grammar: GFGrammar

  before((): void => {
    let json = JSON.parse(readFileSync('./test/grammars/Literal.json').toString())
    let g = fromJSON(json)
    grammar = g as GFGrammar
  })

  it('imports from JSON', (): void => {
    should.exist(grammar.abstract)
    should.exist(grammar.concretes.LiteralCnc)
  })

  it('linearises string', (): void => {
    let tree = new Fun('mkString', new Fun('"Foo Bar"'))
    let s = grammar.concretes.LiteralCnc.linearize(tree as Fun)
    s.should.equal('my string is Foo Bar end')
  })

  it('linearises int', (): void => {
    let tree = new Fun('mkInt', new Fun('123'))
    let s = grammar.concretes.LiteralCnc.linearize(tree as Fun)
    s.should.equal('my int is 123 end')
  })

  it('linearises float', (): void => {
    let tree = new Fun('mkFloat', new Fun('3.14159'))
    let s = grammar.concretes.LiteralCnc.linearize(tree as Fun)
    s.should.equal('my float is 3.14159 end')
  })

  it('parses string', (): void => {
    let str = 'my string is Bar end'
    let tree_expected = grammar.abstract.parseTree('mkString "Bar"')
    let tree_actual = grammar.concretes.LiteralCnc.parseString(str, grammar.abstract.startcat)[0]
    should.deepEqual(tree_actual, tree_expected)
  })

  it('parses int', (): void => {
    let str = 'my int is 123 end'
    let tree_expected = grammar.abstract.parseTree('mkInt 123')
    let tree_actual = grammar.concretes.LiteralCnc.parseString(str, grammar.abstract.startcat)[0]
    should.deepEqual(tree_actual, tree_expected)
  })

  it('parses float', (): void => {
    let str = 'my float is 3.142 end'
    let tree_expected = grammar.abstract.parseTree('mkFloat 3.142')
    let tree_actual = grammar.concretes.LiteralCnc.parseString(str, grammar.abstract.startcat)[0]
    should.deepEqual(tree_actual, tree_expected)
  })

})


describe('List', (): void => {
  let grammar: GFGrammar
  // let concrete = 'ListEng'
  let concrete = 'ListCnc'

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

  it('linearises 1 item', (): void => {
    let tree = new Fun('Foo')
    let str_expected = 'Foo'
    let str_actual = grammar.concretes[concrete].linearize(tree)
    should.equal(str_actual, str_expected)
  })

  it('linearises 2 items', (): void => {
    let tree = new Fun('mkSimpleListNP', new Fun('mkSimpleList', new Fun('Foo'), new Fun('Bar')))
    let str_expected = 'Foo and Bar'
    let str_actual = grammar.concretes[concrete].linearize(tree)
    should.equal(str_actual, str_expected)
  })

  it('linearises 3 items', (): void => {
    let tree = new Fun('mkSimpleListNP', new Fun('mkSimpleConsList', new Fun('Foo'), new Fun('mkSimpleList', new Fun('Bar'), new Fun('Bat'))))
    // let str_expected = 'Foo , Bar and Bat'
    let str_expected = 'Foo and Bar and Bat'
    let str_actual = grammar.concretes[concrete].linearize(tree)
    should.equal(str_actual, str_expected)
  })

  it('parses 1 item', (): void => {
    let str = 'Foo'
    let tree_expected = grammar.abstract.parseTree('Foo')
    let tree_actual = grammar.concretes[concrete].parseString(str, 'PN')[0]
    should.deepEqual(tree_actual, tree_expected)
  })

  it('parses 2 items', (): void => {
    let str = 'Foo and Bar'
    let tree_expected = grammar.abstract.parseTree('mkSimpleListNP (mkSimpleList Foo Bar)')
    let tree_actual = grammar.concretes[concrete].parseString(str, 'SimpleListNP')[0]
    should.deepEqual(tree_actual, tree_expected)
  })

  it('parses 3 items', (): void => {
    // let str = 'Foo , Bar and Bat'
    let str = 'Foo and Bar and Bat'
    let tree_expected = grammar.abstract.parseTree('mkSimpleListNP (mkSimpleConsList Foo (mkSimpleList Bar Bat))')
    let tree_actual = grammar.concretes[concrete].parseString(str, 'SimpleListNP')[0]
    should.deepEqual(tree_actual, tree_expected)
  })

})
