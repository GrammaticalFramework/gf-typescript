# GF TypeScript Runtime

This repositort contains a TypeScript implementation of the GF runtime.
It is ported from an older JavaScript implementation [`gflib.js`](https://github.com/GrammaticalFramework/gf-core/blob/master/src/runtime/javascript/gflib.js), with some improvements.

Importantly, all **future** updates will only be made to this TypeScript version.
The JavaScript version mentioned above is now deprecated.

## Applicability

This runtime allows you use GF in pure JavaScript, and thus have GF-powered apps without the need for a server backend.
However, it has not been actively maintained as the other runtimes have been.
So its features are limited and it is not efficient, making it really only useful for smaller grammars.

## Using

Your GF grammar should be compiled into JSON with: `gf --make --output-format=json`.
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