---
tags:
  - Software
  - Software/CLI
---

# curl

!!! info Source
This note was originally found in the [rstacrus/cheatsheets](https://github.com/rstacruz/cheatsheets) GitHub repository.

## Table of Contents

- [curl](#curl)
  - [Table of Contents](#table-of-contents)
  - [Options](#options)
    - [Request](#request)
    - [Data](#data)
    - [Headers](#headers)
    - [SSL](#ssl)
  - [Examples](#examples)

## Options

```bash
-o <file>    # --output: write to file
-u user:pass # --user: Authentication
```

```bash
-v           # --verbose
-vv          # Even more verbose
-s           # --silent
```

```bash
-I           # --head: headers only
```

### Request

```bash
-X POST      # --request
-L           # follow link if page redirects
```

### Data

```bash
-d 'data'    # --data: HTTP post data, URL encoded (eg, status="Hello")
-d @file     # --data via file
-G           # --get: send -d data via get
```

### Headers

```bash
-A <str>         # --user-agent
-b name=val      # --cookie
-b FILE          # --cookie
-H "X-Foo: y"    # --header
--compressed     # use deflate/gzip
```

### SSL

```bash
    --cacert <file>
    --capath <dir>
```

```bash
-E, --cert <cert>     # --cert: Client cert file
    --cert-type       # der/pem/eng
-k, --insecure        # for self-signed certs
```

## Examples

```bash
# Post data:
curl -d password=x http://x.com/y
```

```bash
# Auth/data:
curl -u user:pass -d status="Hello" http://twitter.com/statuses/update.xml
```

```bash
# multipart file upload
curl -v -include --form key1=value1 --form upload=@localfilename URL
```
