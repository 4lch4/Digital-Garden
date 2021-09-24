---
created: '2021-09-23T18:54:37 (UTC -05:00)'
tags:
  - Node.js
  - TypeScript
source: 'https://www.30secondsofcode.org/js/s/create-dir-if-not-exists'
author: null
modifiedDate: '2021-09-23 @ 19:00:25'
---

# `createDirIfNotExists`

> Creates a directory, if it does not exist.

Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

```javascript
const fs = require('fs');

const createDirIfNotExists = dir => !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined

createDirIfNotExists('test')
// creates the directory 'test', if it doesn't exist
```

```typescript
import { existsSync, mkdirSync } from 'fs'

const createDirIfNotExists = (dir: string) => !existsSync(dir) ? mkdirSync(dir) : undefined

createDirIfNotExists('test')
// creates the directory 'test', if it doesn't exist
```
