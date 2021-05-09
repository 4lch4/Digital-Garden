---
title: Input tag
category: HTML
layout: 2017/sheet
updated: 2017-10-29
weight: -3
---

### Input

```html
<input ...
   disabled
   required
   checked
```

```html
autofocus
```

```html
autocomplete='off'        <!-- autocomplete -->
autocompletetype='cc-exp'
autocapitalize='off'      <!-- for mobiles -->
pattern='\d*'             <!-- force numeric input in iOS -->
```

### Input types

#### Text

* email
* hidden
* **password**
* tel
* **text**
* search

#### Time

* date
* time

#### Time (not widely supported)

* month
* week
* datetime
* datetime-local

#### Etc

* **file**
* **radio**
* **checkbox**

#### Buttons

* button
* reset
* submit
* image

#### Numeric

* number
* range

## Examples

### Dates

| Type          | Example               |
|---------------|-----------------------|
| `type='date'` | `<input type='date'>` |
| `type='time'` | `<input type='time'>` |

### Datetime

| Type                    | Example                         |
|-------------------------|---------------------------------|
| `type='datetime'`       | `<input type='datetime'>`       |
| `type='datetime-local'` | `<input type='datetime-local'>` |

`datetime` and `datetime-local` fields are not widely supported.

### Numbers

| Type            | Example                 |
|-----------------|-------------------------|
| `type='number'` | `<input type='number'>` |
| `type='range'`  | `<input type='range'>`  |

### Text

| Type              | Example                   |
|-------------------|---------------------------|
| `type='text'`     | `<input type='text'>`     |
| `type='password'` | `<input type='password'>` |
| `type='search'`   | `<input type='search'>`   |
| `type='tel'`      | `<input type='tel'>`      |

## Also see

* <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>
