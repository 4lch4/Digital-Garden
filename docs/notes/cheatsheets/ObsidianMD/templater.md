---
title: Obsidian-Templater
category: Obsidian.md
---

[Templater][7] is a template language that lets you insert variables and function results into your [Obsidian][0] vault(s). It also lets you execute JavaScript code manipulating those variables and functions as you see fit.

## Modules

Templater comes with a number of modules that separates the various internal variables and functions:

|   Module Name    | Module Path      |
| :--------------: | :--------------- |
|   [Config][1]    | `tp.config`      |
|    [Date][2]     | `tp.date`        |
| [FrontMatter][3] | `tp.file`        |
|  [Obsidian][4]   | `tp.frontmatter` |
|   [System][5]    | `tp.system`      |
|     [Web][6]     | `tp.web`         |


## Date Module

## Front Matter Module

## Obsidian Module

## System Module

## Web Module

## Basic Example Template

```markdown
---
creation_date: '<% tp.file.creation_date() %>'
modification_date: '<% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>'
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

# <% tp.file.title %>

<% tp.web.daily_quote() %>
```

If you use the above template to create a new file, it'll look something like so:

```markdown
---
creation_date: '2021-10-08 @ 17:42:31-0500'
modification_date: 'Friday 8th October 2021 17:58:55'
---

<< [[2021-10-07]] | [[2021-10-09]] >>

> Keep on going and the chances are you will stumble on something, perhaps when you are least expecting it. I have never heard of anyone stumbling on something sitting down.

— <cite>Charles F. Kettering</cite>
```

[0]: https://obsidian.md/
[1]: #Config-Module
[2]: #Date-Module
[3]: #Front-Matter-Module
[4]: #Obsidian-Module
[5]: #System-Module
[6]: #Web-Module
[7]: https://silentvoid13.github.io/Templater
