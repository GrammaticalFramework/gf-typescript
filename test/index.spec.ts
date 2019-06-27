import {
  GFGrammar,
  GFAbstract,
  GFConcrete,
  Fun,
  Type,
  Apply,
  Coerce,
  PArg,
  Const,
  CncFun,
  SymCat,
  SymKS,
  SymKP,
  SymLit,
  Alt,
} from '../src/index'
import 'mocha'
import 'should'

let emptyGrammar = new GFGrammar(new GFAbstract('', {}), {})

let Zero = new GFGrammar(new GFAbstract('Utt',{apple: new Type([], 'N'), eat: new Type(['N'], 'Utt'), pår: new Type([], 'N')}),{ZeroEng: new GFConcrete({},{0:[new Apply(4,[]), new Apply(6,[])], 1:[new Apply(5,[new PArg(0)])]},[new CncFun('\'lindef N\'',[1]), new CncFun('\'lindef N\'',[0]), new CncFun('\'lindef Utt\'',[1]), new CncFun('\'lindef Utt\'',[0]), new CncFun('apple',[2]), new CncFun('eat',[3]), new CncFun('pår',[4])],[[new SymCat(0, 0)],[new SymLit(0, 0)],[new SymKS('apple')],[new SymKS('eat'), new SymKS('a'), new SymCat(0, 0)],[new SymKS('pear')]],{Float:{s: -3, e: -3}, Int:{s: -2, e: -2}, N:{s: 0, e: 0}, String:{s: -1, e: -1}, Utt:{s: 1, e: 1}}, 2)})

describe('Importing grammars', (): void => {

  it('should import', (): void => {
    Zero.concretes.should.have.keys('ZeroEng')
  })

})
