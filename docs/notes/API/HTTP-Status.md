---
tags:
  - API
---

# HTTP Status Codes

This page provides tables of the available status codes when dealing with HTTP requests with links to further details either on Wikipedia or [httpstatuses.com][0].

## Informational Responses

| Code  | Name                | Further Details             |
| ----- | ------------------- | --------------------------- |
| `100` | Continue            | [httpstatuses.com/100][100] |
| `101` | Switching Protocols | [httpstatuses.com/101][101] |

## Success Responses

| Code  | Name                        | Further Details             |
| ----- | --------------------------- | --------------------------- |
| `200` | OK                          | [httpstatuses.com/200][200] |
| `201` | Created                     | [httpstatuses.com/201][201] |
| `202` | Accepted                    | [httpstatuses.com/202][202] |
| `203` | Non-Authoritive Information | [httpstatuses.com/203][203] |
| `204` | No Content                  | [httpstatuses.com/204][204] |
| `205` | Reset Content               | [httpstatuses.com/205][205] |
| `206` | Partial Content             | [httpstatuses.com/206][206] |
| `226` | IM Used                     | [httpstatuses.com/226][226] |

## Redirection Responses

| Code  | Name               | Further Details               |
| ----- | ------------------ | ----------------------------- |
| `300` | Multiple Choices   | [httpstatuses.com/300][300]   |
| `301` | Moved Permanently  | [httpstatuses.com/301][301]   |
| `302` | Found              | [httpstatuses.com/302][302]   |
| `303` | See Other          | [httpstatuses.com/303][303]   |
| `304` | Not Modified       | [httpstatuses.com/304][304]   |
| `305` | Use Proxy          | [httpstatuses.com/305][305]   |
| `306` | _Switch Proxy_     | [httpstatusdogs.com/306][306] |
| `307` | Temporary Redirect | [httpstatuses.com/307][307]   |
| `308` | Permanent Redirect | [httpstatuses.com/308][308]   |

## Client Error Responses

| Code  | Name                            | Further Details             |
| ----- | ------------------------------- | --------------------------- |
| `400` | Bad Request                     | [httpstatuses.com/400][400] |
| `401` | Unauthorized                    | [httpstatuses.com/401][401] |
| `402` | Payment Required                | [httpstatuses.com/402][402] |
| `403` | Forbidden                       | [httpstatuses.com/403][403] |
| `404` | Not Found                       | [httpstatuses.com/404][404] |
| `405` | Method Not Allowed              | [httpstatuses.com/405][405] |
| `406` | Not Acceptable                  | [httpstatuses.com/406][406] |
| `407` | Proxy Authentication Required   | [httpstatuses.com/407][407] |
| `408` | Request Timeout                 | [httpstatuses.com/408][408] |
| `409` | Conflict                        | [httpstatuses.com/409][409] |
| `410` | Gone                            | [httpstatuses.com/410][410] |
| `411` | Length Required                 | [httpstatuses.com/411][411] |
| `412` | Precondition Failed             | [httpstatuses.com/412][412] |
| `413` | Payload Too Large               | [httpstatuses.com/413][413] |
| `414` | URI Too Long                    | [httpstatuses.com/414][414] |
| `415` | Unsupported Media Type          | [httpstatuses.com/415][415] |
| `416` | Range Not Satisfiable           | [httpstatuses.com/416][416] |
| `417` | Expectation Failed              | [httpstatuses.com/417][417] |
| `418` | I'm a teapot                    | [httpstatuses.com/418][418] |
| `421` | Misdirected Request             | [httpstatuses.com/421][421] |
| `426` | Upgrade Required                | [httpstatuses.com/426][426] |
| `428` | Precondition Required           | [httpstatuses.com/428][428] |
| `429` | Too Many Requests               | [httpstatuses.com/429][429] |
| `431` | Request Header Fields Too Large | [httpstatuses.com/431][431] |
| `451` | Unavailable For Legal Reasons   | [httpstatuses.com/451][451] |

## Server Error Responses

| Code  | Name                            | Further Details             |
| ----- | ------------------------------- | --------------------------- |
| `500` | Internal Server Error           | [httpstatuses.com/500][500] |
| `501` | Not Implemented                 | [httpstatuses.com/501][501] |
| `502` | Bad Gateway                     | [httpstatuses.com/502][502] |
| `503` | Service Unavailable             | [httpstatuses.com/503][503] |
| `504` | Gateway Timeout                 | [httpstatuses.com/504][504] |
| `505` | HTTP Version Not Supported      | [httpstatuses.com/505][505] |
| `506` | Variant Also Negotiates         | [httpstatuses.com/506][506] |
| `510` | Not Extended                    | [httpstatuses.com/510][510] |
| `511` | Network Authentication Required | [httpstatuses.com/511][511] |

## WebDAV Status Codes

WebDAV is an extension of HTTP that allows clients to perform remote Web content authoring operations. It provides a framework for users to create, change and move documents on a server. It adds the following status codes on top of HTTP.

[Read more.](https://en.wikipedia.org/wiki/WebDAV)

| Code  | Name                 | Further Details                                    |
| ----- | -------------------- | -------------------------------------------------- |
| `102` | Processing           | [wikipedia.org/List_of_HTTP_status_codes#102][102] |
| `207` | Multi-Status         | [wikipedia.org/List_of_HTTP_status_codes#207][207] |
| `208` | Already Reported     | [wikipedia.org/List_of_HTTP_status_codes#208][208] |
| `422` | Unprocessable Entity | [wikipedia.org/List_of_HTTP_status_codes#422][422] |
| `423` | Locked               | [wikipedia.org/List_of_HTTP_status_codes#423][423] |
| `424` | Failed Dependency    | [wikipedia.org/List_of_HTTP_status_codes#424][424] |
| `507` | Insufficient Storage | [wikipedia.org/List_of_HTTP_status_codes#507][507] |
| `508` | Loop Detected        | [wikipedia.org/List_of_HTTP_status_codes#508][508] |

## Also see

- <https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>
- <https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html>
- <https://httpstatuses.com/>

[0]: https://httpstatuses.com

<!-- #region Response Code URLs -->
<!-- #region Informational Responses -->
[100]: https://httpstatuses.com/100
[101]: https://httpstatuses.com/101
<!-- #endregion Informational Responses -->

<!-- #region Success Responses -->
[200]: https://httpstatuses.com/200
[201]: https://httpstatuses.com/201
[202]: https://httpstatuses.com/202
[203]: https://httpstatuses.com/203
[204]: https://httpstatuses.com/204
[205]: https://httpstatuses.com/205
[206]: https://httpstatuses.com/206
[226]: https://httpstatuses.com/226
<!-- #endregion Success Responses -->


<!-- #region Redirection Responses -->
[300]: https://httpstatuses.com/300
[301]: https://httpstatuses.com/301
[302]: https://httpstatuses.com/302
[303]: https://httpstatuses.com/303
[304]: https://httpstatuses.com/304
[305]: https://httpstatuses.com/305
[306]: https://httpstatusdogs.com/306-switch-proxy
[307]: https://httpstatuses.com/307
[308]: https://httpstatuses.com/308
<!-- #endregion Redirection Responses -->


<!-- #region Client Error Responses -->
[400]: https://httpstatuses.com/400
[401]: https://httpstatuses.com/401
[402]: https://httpstatuses.com/402
[403]: https://httpstatuses.com/403
[404]: https://httpstatuses.com/404
[405]: https://httpstatuses.com/405
[406]: https://httpstatuses.com/406
[407]: https://httpstatuses.com/407
[408]: https://httpstatuses.com/408
[409]: https://httpstatuses.com/409
[410]: https://httpstatuses.com/410
[411]: https://httpstatuses.com/411
[412]: https://httpstatuses.com/412
[413]: https://httpstatuses.com/413
[414]: https://httpstatuses.com/414
[415]: https://httpstatuses.com/415
[416]: https://httpstatuses.com/416
[417]: https://httpstatuses.com/417
[418]: https://httpstatuses.com/418
[421]: https://httpstatuses.com/421
[426]: https://httpstatuses.com/426
[428]: https://httpstatuses.com/428
[429]: https://httpstatuses.com/429
[431]: https://httpstatuses.com/431
[451]: https://httpstatuses.com/451
<!-- #endregion Client Error Responses -->

<!-- #region Server Error Responses -->
[500]: https://httpstatuses.com/500
[501]: https://httpstatuses.com/501
[502]: https://httpstatuses.com/502
[503]: https://httpstatuses.com/503
[504]: https://httpstatuses.com/504
[505]: https://httpstatuses.com/505
[506]: https://httpstatuses.com/506
[510]: https://httpstatuses.com/510
[511]: https://httpstatuses.com/511
<!-- #endregion Server Error Responses -->

<!-- #region WebDAV Status Codes -->
[102]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#102
[207]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#207
[208]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#208
[422]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#422
[423]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#423
[424]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#424
[507]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#507
[508]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#508
<!-- #endregion WebDAV Status Codes -->
<!-- #endregion Response Code URLs -->

