---
created: 2021-10-08
title: Date Module
---

This module contains every internal variable / function related to dates.

## Documentation

> Function documentation is using a specific syntax. More informations [here](../../syntax.md#function-documentation-syntax).

> Templater gives you access to the `moment` object, with all of its functionalities.

> More information on moment.js is available [here](https://momentjs.com/docs/#/displaying/).

| Internal Variable / Function                                                                                        | Arguments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                    | Example Output |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------- |
| `tp.date.now(format: string = "YYYY-MM-DD", offset?: number⎮string, reference?: string, reference_format?: string)` | - `format`: Format for the date, refer to [format reference](https://momentjs.com/docs/#/displaying/format/)<br />- `offset`: Offset for the day, e.g. set this to `-7` to get last week's date. You can also specify the offset as a string using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) format, e.g. set this to `"P-1M"` to get last month's date.<br />- `reference`: The date referential, e.g. set this to the note's title<br />- `reference_format`: The date reference format. | Retrieves the date.            | `2021-01-15`   |
| `tp.date.tomorrow(format: string = "YYYY-MM-DD")`                                                                   | - `format`: Format for the date, refer to [format reference](https://momentjs.com/docs/#/displaying/format/)                                                                                                                                                                                                                                                                                                                                                                                                      | Retrieves tomorrow's date      | `2020-11-07`   |
| `tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)`    | - `format`: Format for the date, refer to [format reference](https://momentjs.com/docs/#/displaying/format/)<br />- `weekday`: Week day number. If the locale assigns Monday as the first day of the week, `0` will be Monday, `-7` will be last week's day.<br />- `reference`: The date referential, e.g. set this to the note's title<br />- `reference_format`: The date reference format.                                                                                                                    | Retrieves the week's day date. | `2021-04-06`   |
| `tp.date.yesterday(format: string = "YYYY-MM-DD")`                                                                  | - `format`: Format for the date, refer to [format reference](https://momentjs.com/docs/#/displaying/format/)                                                                                                                                                                                                                                                                                                                                                                                                      | Retrieves yesterday's date     | `2020-11-07`   |

## Examples

| Description                           | Code                                                                  | Result                       |
| ------------------------------------- | --------------------------------------------------------------------- | ---------------------------- |
| Date Now                              | `<% tp.date.now() %>`                                                 | 2021-10-08                   |
| Date Now w/ Format                    | `<% tp.date.now("Do MMMM YYYY") %>`                                   | 8th October 2021             |
| Last Week                             | `<% tp.date.now("dddd Do MMMM YYYY", -7) %>`                          | Friday 1st October 2021      |
| Today                                 | `<% tp.date.now("dddd Do MMMM YYYY, ddd") %>`                         | Friday 8th October 2021, Fri |
| Next week                             | `<% tp.date.now("dddd Do MMMM YYYY", 7) %>`                           | Friday 15th October 2021     |
| Last month                            | `<% tp.date.now("YYYY-MM-DD", "P-1M") %>`                             | 2021-09-08                   |
| Next year                             | `<% tp.date.now("YYYY-MM-DD", "P1Y") %>`                              | 2022-10-08                   |
| File's title date + 1 day (tomorrow)  | `<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>`     | 2021-10-09                   |
| File's title date - 1 day (yesterday) | `<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>`    | 2021-10-07                   |
| Date tomorrow with format             | `<% tp.date.tomorrow("Do MMMM YYYY") %>`                              | 9th October 2021             |
| This week's Monday                    | `<% tp.date.weekday("YYYY-MM-DD", 0) %>`                              | 2021-10-03                   |
| Next Monday                           | `<% tp.date.weekday("YYYY-MM-DD", 7) %>`                              | 2021-10-10                   |
| File's title Monday                   | `<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>` | 2021-10-03                   |
| File's title next Monday              | `<% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>` | 2021-10-10                   |
| Date yesterday with format            | `<% tp.date.yesterday("Do MMMM YYYY") %>`                             | 7th October 2021             |

