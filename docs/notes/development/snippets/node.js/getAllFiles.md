---
created: '2021-10-08T22:03:25.000-05:00'
tags:
  - Node.js
  - TypeScript
  - fs-extra
  - fs
---

# `getAllFiles`

> Gets all files, directories, sub-files, and sub-directories.

I personally prefer to use `fs-extra` for my disk operations, but regular ol' `fs` works as well; you just need to change the import and refactor the async/await calls into callbacks.

## With `fs-extra`

```typescript
import { readdir, stat } from 'fs-extra'
import { join } from 'path'

/**
 * Gets all of the files from the given directory by recursively calling itself
 * should one of the files be a directory.
 *
 * @param dirPath The root directory to retrieve files from.
 * @param files An array of files that have been found so far.
 * @returns A string array of all files & folders in the directory.
 */
async function getAllFiles(dirPath: string, files: string[] = []): Promise<string[]> {
  // Iterate through all files in the directory.
  for (const file of await readdir(dirPath)) {
    // Check if the file is a directory.
    const { isDirectory } = await stat(join(dirPath, file))

    // If it _is_ a directory, recursively call this function to resolve the
    // nested files.
    if (isDirectory()) files = await getAllFiles(join(dirPath, file), files)
    // Else, push the file to the returned array.
    else files.push(join(dirPath, file))
  }

  return files
}
```
