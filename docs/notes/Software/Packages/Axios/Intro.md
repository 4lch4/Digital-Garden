---
tags:
  - Software/Packages
  - Tools/API
  - Tools/HTTP
---

# Intro

## Importing the Library

When I'm importing Axios to a project I do what you'll see in the following snippet. The `Axios` object is what lets me create a new client of type `AxiosInstance`, and the `AxiosInstance` type is imported as a type reference.

```typescript
import Axios, { AxiosInstance } from 'axios'

const axios: AxiosInstance = Axios.create({ baseURL: '' })
```

### POST — `axios(config)`

```js
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
```

### GET — `axios(config)`

```js
// GET request for remote image in node.js
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
}).then(response => response.data.pipe(fs.createWriteStream('ada_lovelace.jpg')))
```

## GET — `axios(url[, config])`

```js
// Send a GET request (default method)
axios('/user/12345')
```

## Request Method Aliases

For convenience, the following aliases have been provided for all supported request methods.

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.options(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`
