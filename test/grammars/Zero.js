var Zero = new GFGrammar(new GFAbstract('Utt', {
  apple: new Type([], 'N'),
  banana: new Type([], 'N'),
  eat: new Type(['N'], 'Utt')
}), {
  ZeroEng: new GFConcrete({}, {
    0: [new Apply(4, []), new Apply(5, [])],
    1: [new Apply(6, [new PArg(0)])]
  }, [new CncFun('\'lindef N\'', [1]), new CncFun('\'lindef N\'', [0]), new CncFun('\'lindef Utt\'', [1]), new CncFun('\'lindef Utt\'', [0]), new CncFun('apple', [2]), new CncFun('banana', [3]), new CncFun('eat', [4])], [
    [new SymCat(0, 0)],
    [new SymLit(0, 0)],
    [new SymKS('apple')],
    [new SymKS('banana')],
    [new SymKS('eat'), new SymKS('a'), new SymCat(0, 0)]
  ], {
    Float: {
      s: -3,
      e: -3
    },
    Int: {
      s: -2,
      e: -2
    },
    N: {
      s: 0,
      e: 0
    },
    String: {
      s: -1,
      e: -1
    },
    Utt: {
      s: 1,
      e: 1
    }
  }, 2),
  ZeroSwe: new GFConcrete({}, {
    0: [new Apply(5, [])],
    1: [new Apply(4, [])],
    2: [new Apply(6, [new PArg(0)]), new Apply(7, [new PArg(1)])]
  }, [new CncFun('\'lindef N\'', [1]), new CncFun('\'lindef N\'', [0]), new CncFun('\'lindef Utt\'', [1]), new CncFun('\'lindef Utt\'', [0]), new CncFun('apple', [3]), new CncFun('banana', [2]), new CncFun('eat', [4]), new CncFun('eat', [5])], [
    [new SymCat(0, 0)],
    [new SymLit(0, 0)],
    [new SymKS('banan')],
    [new SymKS('äpple')],
    [new SymKS('äta'), new SymKS('en'), new SymCat(0, 0)],
    [new SymKS('äta'), new SymKS('ett'), new SymCat(0, 0)]
  ], {
    Float: {
      s: -3,
      e: -3
    },
    Int: {
      s: -2,
      e: -2
    },
    N: {
      s: 0,
      e: 1
    },
    String: {
      s: -1,
      e: -1
    },
    Utt: {
      s: 2,
      e: 2
    }
  }, 3)
})
