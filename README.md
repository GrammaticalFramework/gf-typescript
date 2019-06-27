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

`gflib.ts` can be transpiled to JavaScript by running `tsc` in this folder (of course you need TypeScript installed).
It has no module dependencies.
You can then include the generated `js/gflib.js` file in your application as usual.

_This generated JavaScript version is also included under version control,
to make it easy for someone to use without having to install TypeScript._

Your GF grammar should be compiled with: `gf --make --output-format=js`
