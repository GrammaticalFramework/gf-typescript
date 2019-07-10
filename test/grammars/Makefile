Zero.js: Zero.gf ZeroEng.gf ZeroSwe.gf
	gf --make --output-format=js ZeroEng.gf ZeroSwe.gf

Zero.json: Zero.gf ZeroEng.gf ZeroSwe.gf
	gf --make --output-format=json ZeroEng.gf ZeroSwe.gf

ZeroModule.ts: Zero.js
	echo "import { \
	  GFGrammar, \
	  GFAbstract, \
	  GFConcrete, \
	  Fun, \
	  Type, \
	  Apply, \
	  Coerce, \
	  PArg, \
	  Const, \
	  CncFun, \
	  SymCat, \
	  SymKS, \
	  SymKP, \
	  SymLit, \
	  Alt, \
	} from '../../src/index'" > $@
	sed -E 's/^var .+ = new/export default new/' $< >> $@
