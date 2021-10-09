---
title: Git extras
category: Git
---

### Git-flow

```bash
$ git feature myfeature
    switched to branch 'feature/rofl'

$ ...
$ git checkout develop
$ git feature finish myfeature
    merging 'feature/rofl' into develop
    deleted branch 'feature/rofl'
```

Also `git-bug` and `git-refactor`.

### Branches

```bash
$ git delete-merged-branches
    # hint: do `git remote prune origin` after

$ git create-branch development
$ git delete-branch development

$ git fresh-branch gh-pages
```

### Inspecting

```bash
git summary   # repo age, commits, active days, etc
git impact    # impact graph
git effort    # commits per file
```

### Github

```bash
$ git fork strongloop/express
# sync your fork with the original repository:
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
$ git fetch upstream; git merge upstream/master
```

### Tags

```bash
git release v1.0.0           # commit, tag, push-tags
git delete-tag v1.0.0
```

### Conveniences

```bash
git ignore "*.log"
```

### Locking

Assumes that changes will not be committed.

```bash
git lock config/database.yml
git unlock config/database.yml
```

### Etc

```bash
git obliterate secret.yml   # remove all references to it
```

### References

- https://github.com/visionmedia/git-extras
