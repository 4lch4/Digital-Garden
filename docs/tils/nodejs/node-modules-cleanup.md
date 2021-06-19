---
title: Cleaning node_modules Directories
date: 2021-06-19T03:40:41.080Z
lastmod: 2021-06-19T03:40:41.967Z
slug: cleaning-node-modules-directories
image: https://garden.4lch4.dev/static/img/tils/Heaviest-Objects-Meme.png
---

## Origin

I was inspired by ["Delete node_modules like a Pro"][0] from the Fireship YouTube channel to write this TIL. In short, the video talks about the npm package `npkill`.

## Purpose

So, what exactly is `npkill`? I think they explain it best in their [README][1]:

> This tool allows you to list any _node_modules_ directories in your system, as well as the space they take up. You can then select which ones you want to erase to free up space. Yay!

## Features

- **Clear space**: Get rid of old and dusty node_modules cluttering up your machine.

- **Very fast**: `npkill` is written in TypeScript, but searches are performed at a low level, improving performance significantly.

- **Easy to use**: Say goodbye to lengthy commands. Using `npkill` is as simple as reading a list of your _node_modules_, and pressing Del to get rid of them. Could it be any easier? ;)

- **Minified**: It barely has any dependencies.

## Usage

The easiest way to use it is to navigate to where you have your projects and run `npkill` or `npx npkill` if you haven't installed it.

If you want to scan a specific directory without first navigating there, simply provide the `-d` parameter like so: `npkill -d ~/projects`

## Options

| ARGUMENT               | DESCRIPTION                                                                                                                                    |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| -c, --bg-color         | Change row highlight color. (Available: blue, cyan, magenta, white, red and yellow)                                                            |
| -d, --directory        | Set the directory from which to begin searching. By default, starting-point is `.`                                                             |
| -D, --delete-all       | CURRENTLY DISABLED. Automatically delete all node_modules folders that are found                                                               |
| -e, --show-errors      | Show error messages related to the search if any                                                                                               |
| -E, --exclude          | Exclude directories from search (directory list must be inside double quotes "", each directory separated by ',' ) Example: "ignore1, ignore2" |
| -f, --full             | Start searching from the home of the user (example: "/home/user" in linux)                                                                     |
| -gb                    | Show folders in Gigabytes instead of Megabytes.                                                                                                |
| -h, --help, ?          | Show this help page and exit                                                                                                                   |
| -nu, --no-check-update | Don't check for updates on startup v                                                                                                           |
| -s, --sort             | Sort results by: size or path [ beta ]                                                                                                         |
| -t, --target           | Specify the name of the directories you want to search (by default, is node_modules)                                                           |
| -v, --version          | Show npkill version                                                                                                                            |

[0]: https://youtu.be/qOSH2pYg6m8
[1]: https://www.npmjs.com/package/npkill
