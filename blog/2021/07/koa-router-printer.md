---
title: Koa Router Printer NPM Module
description: A brief overview/explanation of my new NPM module that displays the registered routes of an API using Koa.
authors: [4lch4]
date: 2021-07-04
tags: [npm, node.js, typescript, koa, koa-router, libs]
keywords: [npm, node.js, typescript, koa, koa-router, libs]
slug: koa-router-printer-intro
---

For the longest time, when creating an API with TypeScript/Node.js, I would spend a god awful amount of time finding just the right framework. Recently I decided to pick one and stick with it, so I had to find one to use. I landed on Hapi and used that for quite some time, including projects at my full time job. Eventually, I began to have issues with Hapi in TypeScript so I began poking around for a framework with better TypeScript support. That was when I found Koa, from the makers of Express.

I now use Koa for all of my API needs, but there was a plugin I used with my Hapi APIs that I missed more than anything. That simple plugin would spit out a table of routes/methods that my API was listening to, based on what was registered previously. I dug around on Google/DuckDuckGo for a while and couldn't find anything that fit my needs/wants. As a result, I ended up building my own module to do just that and am now publishing it for anyone else to use.

## Key Info

The full name of the module is `@4lch4/koa-router-printer`, and since that's a bit of a mouthful, I'll be referring to it as KRP.

Naming aside, the module requires that you add your routes/paths with the `@koa/router` module, as that is what I use to determine what routes are registered. Lastly, it will only work if you register your routes _before_ calling the KRP module.

## Example

Enough talk; here are some samples of how it works and the available options. First up, the defaults.

### Defaults

```typescript
import Printer from '@4lch4/koa-router-printer'
import Koa from 'koa'
import Router from '@koa/router'

const router = new Router({ prefix: '/api/v1' })
router.get('/hello', ctx => {
  ctx.status = 200
  ctx.body = 'OK'
})

const app = new Koa()
app.use(router.routes())
app.use(router.allowedMethods())

Printer(app)
```

If you use the module as shown above with no custom options, a table like so will be displayed:

```text
jisodl0 at macx-382fq05p in ~/Development/alcha/playground/krp-tester 
$ ts-node src/index.ts         

┌───────────────┬───────────┐
│ Path          │ Method(s) │
├───────────────┼───────────┤
│ /api/v1/hello │    GET    │
└───────────────┴───────────┘
```

### Custom Options

Alternatively, you can pass an options object to the Printer function and change what is displayed:

```typescript
Printer(app, {
  // Displays the HEAD method if assigned to a route.
  displayHead: true,

  // Display the prefix in the Path column.
  displayPath: true
})
```

Results in:

```text
jisodl0 at macx-382fq05p in ~/Development/alcha/playground/krp-tester 
$ ts-node src/index.ts

┌───────────────┬─────────────┐
│ Path          │  Method(s)  │
├───────────────┼─────────────┤
│ /api/v1/hello │ HEAD -- GET │
└───────────────┴─────────────┘
```

## Conclusion

So, to wrap things up. If you're interested in using KRP, download it and use it as mentioned above. If you have any comments, criticisms, or concerns, please reach out to me directly or by posting an Issue to the GitHub repository.


