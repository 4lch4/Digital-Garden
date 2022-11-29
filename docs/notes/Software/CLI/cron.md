---
tags:
  - Software
  - Software/CLI
---

# Cron

!!! info Source
    This note was originally found in the [rstacrus/cheatsheets](https://github.com/rstacruz/cheatsheets) GitHub repository.

## Table of Contents

- [Cron](#cron)
  - [Table of Contents](#table-of-contents)
  - [Format](#format)
    - [Examples](#examples)
    - [Crontab](#crontab)
    - [Crontab Guru](#crontab-guru)

## Format

```
Min  Hour Day  Mon  Weekday
*    *    *    *    *  command to be executed
┬    ┬    ┬    ┬    ┬
│    │    │    │    └─  Weekday  (0=Sun .. 6=Sat)
│    │    │    └──────  Month    (1..12)
│    │    └───────────  Day      (1..31)
│    └────────────────  Hour     (0..23)
└─────────────────────  Minute   (0..59)
```

### Examples

| Example        | Description           |
| -------------- | --------------------- |
| `0 * * * *`    | every hour            |
| `*/15 * * * *` | every 15 mins         |
| `0 */2 * * *`  | every 2 hours         |
| `0 0 * * 0`    | every Sunday midnight |
| ---            | ---                   |
| `@reboot`      | every reboot          |

### Crontab

```bash
# Adding tasks easily
echo "@reboot echo hi" | crontab
```

```bash
# Open in editor
crontab -e
```

```bash
# List tasks
crontab -l [-u user]
```

### Crontab Guru

[The Crontab Guru website][0] is an amazing tool for easily building out cron expressions.

[0]: https://crontab.guru/
