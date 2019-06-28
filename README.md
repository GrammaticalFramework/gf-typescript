# GF TypeScript Runtime

This repositort contains a TypeScript implementation of the GF runtime.
It is ported from an older JavaScript implementation [`gflib.js`](https://github.com/GrammaticalFramework/gf-core/blob/master/src/runtime/javascript/gflib.js), with some improvements.

Importantly, all **future** updates will only be made to this TypeScript version.
The JavaScript version mentioned above is now deprecated.

## Applicability

This runtime allows you use GF in pure JavaScript, and thus have GF-powered apps without the need for a server backend.
However, it has not been actively maintained as the other runtimes have been.
So its features are limited and it is not efficient, making it really only useful for smaller grammars.

## Usage (GF JS)

Your GF grammar should be compiled into JavaScript with: `gf --make --output-format=js`

### With ES6 modules

The resulting JavaScript grammar file needs to be modified from:

```js
var Zero = new GFGrammar(...)
```

to:

```js
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
} from '../../dist/index' // assuming it's in test/grammars
export default new GFGrammar(...)
```

You can then use the grammar like so:

```js
import grammar from './test/grammars/Zero.js'
```

### Without ES6 modules

To avoid using modules, you need to comment out the `export` statements from the runtime (`dist/index.js`):

```js
/**
 * Module exports
 */
// export { GFGrammar, GFAbstract, GFConcrete, Fun, Type, Apply, Coerce, PArg, Const, CncFun, SymCat, SymKS, SymKP, SymLit, Alt, };
```

Then you can import both runtime and grammar into the global namespace just like in the good old days:

```html
<script src="dist/index.js"></script>
<script src="test/grammars/Zero.js"></script>
<script>
  Zero.abstract.parseTree(...)
</script>
```

## Usage (GF JSON)

**⚠️ This is not functional yet! See [this issue](https://github.com/GrammaticalFramework/gf-typescript/issues/1).**

Your GF grammar should be compiled into JSON with: `gf --make --output-format=canonical_json`.
This requires a version of GF *later than* the 3.10 release.

### TypeScript + Node

```ts
import { fromJSON, GFGrammar } from 'gf-typescript'
import { readFileSync } from 'fs'

let json = JSON.parse(readFileSync('./test/grammars/Zero.json').toString())
let grammar: GFGrammar | null = fromJSON(json)
```

### Browser

Using ES6 modules:

```html
<script type="module">
  import { fromJSON } from 'dist/index.js'
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'test/grammars/Zero.json')
  xhr.onload = function () {
    if (xhr.status === 200) {
      let json = JSON.parse(xhr.responseText)
      let grammar = fromJSON(json)
    }
  }
  xhr.send()
</script>
```

## Directory structure

- `dist`: compiled for use in browser
- `lib`: compiled for use as Node module (without TypeScript)
- `src`: TypeScript sources
- `test`: test grammars and scripts
