---
title: Templater Config Module
created: '2021-10-08 @ 19:01:04'
---

| Function/Variable         | Description                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `tp.config.template_file` | The `TFile` object representing the template file.                                                                                 |
| `tp.config.target_file`   | The `TFile` object representing the target file where the template will be inserted                                                |
| `tp.config.run_mode`      | The `RunMode` [enumeration][2], representing the way Templater was launched (Create new from template, Append to active file, ...) |
| `tp.config.active_file?`  | The active file (if it exists) when launching Templater.                                                                           |
