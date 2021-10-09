---
title: process
category: Node.js
---

### Streams

```node
process.stdout.write('...')
process.stderr.write('...')

function stdin(fn) {
  var data = ''

  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', function () {
    var chunk = process.stdin.read()
    if (chunk !== null) data += chunk
  })

  process.stdin.on('end', function () {
    fn(null, data)
  })
}
```

### stuff

```node
process.argv //=> ['node', 'file.js', 'one', 'two']
process.env //=> {TERM: 'screen-256color', SHELL: '/bin/bash', ...}

process.exit()
process.exit(1)
```

### Directories

```node
process.cwd() //=> "/tmp"
process.chdir('dir')
```

### References

- http://nodejs.org/api/process.html
