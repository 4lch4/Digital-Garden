---
title: Pure ESM Package
keywords:
  - typescript
  - node.js
  - javascript
  - console
  - esm
date: 2022-06-17T11:23:58-05:00
lastmod: 2022-06-17T11:23:58-05:00
slug: pure-esm-package
# image: https://assets.4lch4.cloud/projects/digital-garden/tils/nodejs-console-features/Console-Output-0.jpeg
source: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
---

The package linked to from here is now pure [ESM][0]. It cannot be `require()`'d from CommonJS.

This means you have the following choices:

1. Use ESM yourself. **(preferred)**\
   Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package. You also need to put `"type": "module"` in your package.json and more. Follow the below guide.
2. If the package is used in an async context, you could use [`await import(…)`][1] from CommonJS instead of `require(…)`.
3. Stay on the existing version of the package until you can move to ESM.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

I would strongly recommend moving to ESM. ESM can still import CommonJS packages, but CommonJS packages cannot import ESM packages synchronously.

ESM is natively supported by Node.js 12 and later.

You can read more about my [ESM plans][2].

**My repos are not the place to ask ESM/TypeScript/Webpack/Jest/ts-node/CRA support questions.**

## FAQ

### How can I move my CommonJS project to ESM?

- Add `"type": "module"` to your package.json.
- Replace `"main": "index.js"` with `"exports": "./index.js"` in your package.json.
- Update the `"engines"` field in package.json to Node.js 14: `"node": ">=14.16"`. (Excluding Node.js 12 as it's no longer supported)
- Remove `'use strict';` from all JavaScript files.
- Replace all `require()`/`module.export` with `import`/`export`.
- Use only full relative file paths for imports: `import x from '.';` → `import x from './index.js';`.
- If you have a TypeScript type definition (for example, `index.d.ts`), update it to use ESM imports/exports.
- Optional but recommended, use the [`node:` protocol][3] for imports.

Sidenote: If you're looking for guidance on how to add types to your JavaScript package, [check out my guide][4].

### Can I import ESM packages in my TypeScript project?

Yes, but you need to convert your project to output ESM. See below.

### How can I make my TypeScript project output ESM?

- Make sure you are using TypeScript 4.7 or later.
- Add `"type": "module"` to your package.json.
- Replace `"main": "index.js"` with `"exports": "./index.js"` in your package.json.
- Update the `"engines"` field in package.json to Node.js 14: `"node": ">=14.16"`. (Excluding Node.js 12 as it's no longer supported)
- Add [`"module": "node16", "moduleResolution": "node16"`][5] to your tsconfig.json. _([Example][6])_
- Use only full relative file paths for imports: `import x from '.';` → `import x from './index.js';`.
- Remove `namespace` usage and use `export` instead.
- Optional but recommended, use the [`node:` protocol][3] for imports.
- **You must use a `.js` extension in relative imports even though you're importing `.ts` files.**

Also make sure to read the [official TypeScript guide][7].

If you use `ts-node`, follow [this guide][8].

### How can I import ESM in Electron?

[Electron doesn't yet support ESM natively.][9]

You have the following options:

1. Stay on the previous version of the package in question.
2. Bundle your dependencies with Webpack into a CommonJS bundle.
3. Use the [`esm`][10] package.

### I'm having problems with ESM and Webpack

The problem is either Webpack or your Webpack configuration. First, ensure you are on the latest version of Webpack. Please don't open an issue on my repo. Try asking on Stack Overflow or [open an issue the Webpack repo][11].

### I'm having problems with ESM and Next.js

You must enable the [experimental support for ESM][12].

### I'm having problems with ESM and Jest

[Read this first.][13] The problem is either Jest ([#9771][14]) or your Jest configuration. First, ensure you are on the latest version of Jest. Please don't open an issue on my repo. Try asking on Stack Overflow or [open an issue the Jest repo][15].

### I'm having problems with ESM and TypeScript

If you have decided to make your project ESM (`"type": "module"` in your package.json), make sure you have [`"module": "nodenext"`][5] in your tsconfig.json and that all your import statements to local files use the `.js` extension, **not** `.ts` or no extension.

### I'm having problems with ESM and `ts-node`

Follow [this guide][8] and ensure you are on the latest version of `ts-node`.

### I'm having problems with ESM and Create React App

Create React App doesn't yet fully support ESM. I would recommend opening an issue on their repo with the problem you have encountered. One known issue is [#10933][16].

### How can I use TypeScript with AVA for an ESM project?

Follow [this guide][17].

### How can I make sure I don't accidentally use CommonJS-specific conventions?

We got you covered with this [ESLint rule][18]. You should also use [this rule][19].

### What do I use instead of `__dirname` and `__filename`?

```js
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
```

However, in most cases, this is better:

```js
import { fileURLToPath } from 'node:url'

const foo = fileURLToPath(new URL('foo.js', import.meta.url))
```

And many Node.js APIs accept URL directly, so you can just do this:

```js
const foo = new URL('foo.js', import.meta.url)
```

### How can I import a module and bypass the cache for testing?

There's no good way to do this yet. Not until we get [ESM loader hooks][20]. For now, this snippet can be useful:

```js
const importFresh = async modulePath => import(`${modulePath}?x=${new Date()}`)

const chalk = (await importFresh('chalk')).default
```

_Note: This will cause memory leaks, so only use it for testing, not in production. Also, it will only reload the imported module, not its dependencies._

### How can I import JSON?

JavaScript Modules will eventually get [native support for JSON][21], but for now, you can do this:

```js
import fs from 'node:fs/promises'

const packageJson = JSON.parse(await fs.readFile('package.json'))
```

### When should I use a default export or named exports?

My general rule is that if something exports a single main thing, it should be a default export.

Keep in mind that you can combine a default export with named exports when it makes sense:

```js
import readJson, { JSONError } from 'read-json'
```

Here, we had exported the main thing `readJson`, but we also exported an error as a named export.

#### Asynchronous and synchronous API

If your package has both an asynchronous and synchronous main API, I would recommend using named exports:

```js
import { readJson, readJsonSync } from 'read-json'
```

This makes it clear to the reader that the package exports multiple main APIs. We also follow the Node.js convention of suffixing the synchronous API with `Sync`.

#### Readable named exports

I have noticed a bad pattern of packages using overly generic names for named exports:

```js
import { parse } from 'parse-json'
```

This forces the consumer to either accept the ambiguous name (which might cause naming conflicts) or rename it:

```js
import { parse as parseJson } from 'parse-json'
```

Instead, make it easy for the user:

```js
import { parseJson } from 'parse-json'
```

#### Examples

With ESM, I now prefer descriptive named exports more often than a namespace default export:

CommonJS (before):

```js
const isStream = require('is-stream');

isStream.writable(…);
```

ESM (now):

```js
import {isWritableStream} from 'is-stream';

isWritableStream(…);
```

[0]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
[2]: https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77
[3]: https://nodejs.org/api/esm.html#esm_node_imports
[4]: https://github.com/sindresorhus/typescript-definition-style-guide
[5]: https://www.typescriptlang.org/tsconfig#module
[6]: https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json
[7]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#ecmascript-module-support-in-node-js
[8]: https://github.com/TypeStrong/ts-node/issues/1007
[9]: https://github.com/electron/electron/issues/21457
[10]: https://github.com/standard-things/esm
[11]: https://github.com/webpack/webpack
[12]: https://nextjs.org/blog/next-11-1#es-modules-support
[13]: https://github.com/facebook/jest/blob/64de4d7361367fd711a231d25c37f3be89564264/docs/ECMAScriptModules.md
[14]: https://github.com/facebook/jest/issues/9771
[15]: https://github.com/facebook/jest
[16]: https://github.com/facebook/create-react-app/issues/10933
[17]: https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#for-packages-with-type-module
[18]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
[19]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
[20]: https://github.com/nodejs/modules/issues/307
[21]: https://github.com/tc39/proposal-json-modules
