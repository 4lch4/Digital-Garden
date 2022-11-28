---
tags:
  - API
  - GraphQL
---

# Over HTTP

## GET

```js
fetch('http://myapi/graphql?query={ me { name } }')
```

## POST

```js
fetch('http://myapi/graphql', {
  body: JSON.stringify({
    query: '...',
    operationName: '...',
    variables: { ... }
  })
})
```

