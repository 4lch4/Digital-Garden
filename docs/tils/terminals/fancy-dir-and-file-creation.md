---
title: Fancy Directory and File Creation
keywords: ['Tricks', 'Terminal']
description: "TL;DR: `mkdir -p src/{interfaces,lib,operations} && touch src/index.ts src/{interfaces,lib,operations}/index.ts`"
slug: fancy-directory-and-file-creation
image: https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif
---

I recently came upon a really handy and useful way of creating multiple directories, nested directories, or files in a rather "fancy" way. I wish I could remember where I found it so I could give them credit but I'd been doing this for a good week or so and realized I should probably write it down in case others haven't seen this before and it might be useful to them.

Now, I believe it's easiest to explain what I'm talking about with an example, so let's say you're working on a project and you're in a bash/zsh terminal. You want to create the following files/directories from the root of your project:

```
└── src/
    ├── index.ts
    ├── interfaces/
    │   └── index.ts
    ├── lib/
    │   ├── index.ts
    └── operations/
        └── index.ts
```

Basically a few directories all with an index.ts file in each. This following snippet incorporates the trick I learned which will create all those directories in one and then the index.ts files:

```bash
# Create the directories with the -p flag to ensure any missing sub-directories
# are also created.
mkdir -p src/{interfaces,lib,operations}

# Create the index.ts files within their directories.
touch src/index.ts src/{interfaces,lib,operations}/index.ts
```
