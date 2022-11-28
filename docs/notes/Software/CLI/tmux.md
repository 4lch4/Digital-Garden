---
tags:
  - Software/CLI
---

# tmux

!!! info Source
    This note was originally found in the [rstacrus/cheatsheets](https://github.com/rstacruz/cheatsheets) GitHub repository.

## Table of Contents

- [tmux](#tmux)
  - [Table of Contents](#table-of-contents)
  - [Commands](#commands)
    - [Sessions](#sessions)
    - [Windows](#windows)
  - [Help](#help)
  - [Scrolling](#scrolling)
  - [Copy/paste](#copypaste)
  - [Panes](#panes)
  - [Windows](#windows-1)
  - [Detach/attach](#detachattach)
  - [Niceties](#niceties)
- [Status formats](#status-formats)
  - [Attribute/colors](#attributecolors)
  - [Colors](#colors)
  - [Attributes](#attributes)
  - [Variables](#variables)
  - [Options](#options)

## Commands

```bash
$ tmux
    -u        # UTF8 mode
    -S ~/.tmux.socket
```

### Sessions

```bash
tmux new
tmux new -s session_name

tmux attach # Default session
tmux attach -s session_name

tmux switch -t session_name

tmux ls     # List sessions

tmux detach
```

### Windows

```bash
tmux new-window
```

## Help

```text
C-b ?
```

## Scrolling

```text
C-b [       # Enter scroll mode then press up and down
```

## Copy/paste

```text
C-b [       # 1. Enter scroll mode first.
Space       # 2. Start selecting and move around.
Enter       # 3. Press enter to copy.
C-b ]       # Paste
```

## Panes

```text
C-b v       # vert
C-b n       # horiz
C-b hkjl    # navigation
C-b HJKL    # resize
C-b o       # next window
C-b x       # close pane

C-b { or }  # move windows around
```

## Windows

```text
C-b c       # New window
C-b 1       # Go to window 1
```

## Detach/attach

```text
C-b d       # Detach
C-b ( )     # Switch through sessions
$ tmux attach
```

## Niceties

```text
C-b t    # Time
```

# Status formats

```text
setw -g window-status-format `#[fg=8,bg=default]#I`
```

See `message-command-style` in the man page.

## Attribute/colors

|     Attribute     | Color          |
| :---------------: | -------------- |
|     `#[fg=1]`     | standard color |
|  `#[fg=yellow]`   | yellow         |
|     `#[bold]`     | bold           |
| `#[fg=colour240]` | 256 color      |
|  `#[fg=default]`  | default        |
|  `#[fg=1,bg=2]`   | combinations   |
|   `#[default]`    | reset          |

## Colors

- `black` `red` `green` `yellow` `blue` `magenta` `cyan` `white`
- `brightred` (and so on)
- `colour0` ... `colour255`
- `#333` (rgb hex)

## Attributes

- `bold` `underscore` `blink` `noreverse` `hidden` `dim` `italics`

## Variables

|   Name    | Purpose         |
| :-------: | --------------- |
| `#(date)` | shell command   |
|   `#I`    | window index    |
|   `#S`    | session name    |
|   `#W`    | window name     |
|   `#F`    | window flags    |
|   `#H`    | Hostname        |
|   `#h`    | Hostname, short |
|   `#D`    | pane id         |
|   `#P`    | pane index      |
|   `#T`    | pane title      |

## Options

```text
set -g status-justify [left|centre|right]
set -g status-left '...'

setw -g window-status-style
setw -g window-status-activity-style
setw -g window-status-bell-style
setw -g window-status-content-style
setw -g window-status-current-style
setw -g window-status-last-style

setw -g window-status-format
setw -g window-status-current-format

setw -g window-status-separator
```
