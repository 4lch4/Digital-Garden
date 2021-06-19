---
title: Custom Path Aliases w/ JavaScript & TypeScript
keywords:
  - typescript
  - node.js
  - javascript
date: 2021-06-19T01:02:19.801Z
lastmod: 2021-06-19T01:44:33.021Z
slug: custom-path-aliases-javascript-typescript
image: https://i.imgur.com/fGgVbRR.jpg
---

I was browsing YouTube the other day and came across [this Short][0] from the [Fireship channel][2] that mentioned how to use "Path Aliases" to avoid ridiculously long import paths like `../../../../lib/utils/GitUtil.ts`. I thought it was a great idea and began playing around with it. After a day or so of that, I'd like to share what I've learned.

## Before We Begin

The first thing to note is that I have only tested this with [Visual Studio Code][1]. I'm sure other editors can do the same thing; I just haven't tried it myself.

Aside from that, you'll need to have Node.js installed on your machine. There are a number of solutions for doing just that, no matter what OS you're on: <https://nodejs.org/en/download/>

## Config File (Setup)

:::caution
For VS Code to pick up the values in the properties you're about to change, you _must_ restart VS Code or reload the window (`Cmd`/`Win`+`R`).

This goes for both plain **JavaScript** and **TypeScript** projects.
:::

### JavaScript

If you're developing a project in plain ol' JavaScript, then you need to create a file called `jsconfig.json`. It is what informs VS Code of your custom paths. Within that file, you'll want something like so:

```json title=jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@db/*": ["./src/lib/db/*"],
      "@utils/*": ["./src/lib/utils/*"]
    }
  }
}
```

You'll want to change the values within the `paths` object to whatever you need, but as long as it's within the `compilerOptions` property and has the `/*` bit at the end, you're good to go.

### TypeScript

If you're developing a project in TypeScript, you need only add two properties to your `tsconfig.json` file. The properties you're after will go under the `compilerOptions` property like so:

```json title=tsconfig.json
{
  "compilerOptions": {
    ...,
    "baseUrl": "./src",
    "paths": {
      "@interfaces/*": ["interfaces/*"],
      "@tables/*": ["lib/db/tables/*"],
      "@utils/*": ["lib/utils/*"]
    },
    ...
  }
}
```

### Property Breakdown

Now, each property has a purpose, I promise. So let's break them down one by one and see what's going on.

#### `baseUrl`

:::info Description
An optional property that will define the root of all your paths.
:::

For example, take the following directory structure:

```
.
├── .docusaurus/
├── node_modules/
├── src/
│   ├── pages/
│   ├── css/
│   └── components/
├── static/
│   └── img/
├── docs/
│   ├── tils/
│   ├── cheatsheets/
│   └── finds/
├── coverage/
└── .nginx/
```

If you were only interested in creating aliases for the directories in the docs/ folder, you'd set the baseUrl to docs/. Now each path could be the name of the folder. This is because the baseUrl property is prepended onto each path in the `paths` property. Here is what this would look like in your config file:

```json title=jsconfig.json|tsconfig.json
{
  "baseUrl": "docs/",
  "paths": {
    "@tils/*": ["tils/*"],
    "@cheatsheets/*": ["cheatsheets/*"],
    "@finds/*": ["finds/*"]
  }
}
```

If you wanted to reference folders from all of the top-level directories then you'd leave the baseUrl property empty and have a paths property like so:

```json title=tsconfig.json
{
  "paths": {
    "@finds/*": ["docs/finds/*"],
    "@tils/*": ["docs/tils/*"],
    "@pages/*": ["src/pages/*"],
    "@components/*": ["src/components/*"],
    "@cheatsheets/*": ["docs/cheatsheets/*"]
  }
}
```

#### `paths`

The `paths` property is where the meat and potatoes of the equation live. In here is where you'll specify the aliases you want to use and the paths they should map to. Using the above directory tree and json samples as our example, how would you reference these?

Well, let's say you're editing a file in the `components` directory and you need to reference one of the TIL files. You could import it with the direct path like so:

```typescript
import MDFile from '../../docs/tils/FileName.md'
```

Or, with the path aliases defined above, you can reference the alias:

```typescript
import MDFile from '@tils/FileName.md'
```

## Conclusion

As you can see, it's much nicer to use custom aliases than to type out the full path; it just requires a bit of finagling upfront. If you have any questions, comments, concerns, etc., feel free to reach out to me on any one of my [socials][3].

[0]: https://youtu.be/WpgZKBtW_t8
[1]: https://code.visualstudio.com/
[2]: https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA
[3]: https://4lch4.social
