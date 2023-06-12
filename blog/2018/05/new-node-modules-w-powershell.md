---
title: New Node Modules w/ PowerShell
description: Initializing a new Node module using PowerShell.
authors: [4lch4]
date: 2018-05-25
draft: true
tags: [powershell, node.js, javascript]
keywords: [powershell, node.js, javascript]
# image: /images/2018/05/new-node-modules-w-powershell/cover.png
slug: new-node-modules-w-powershell
---

I've never been much of an OS/Platform purist. For as long as I can remember I have switched between Unix/Windows based systems on a regular basis for various reasons. With that said, I develop primarily on a Windows machine, and most of my projects end up running on a Linux server (Node modules), or on a Linux kernel (Android) of some sort, so being familiar with the \*nix school of thought is quite helpful in the long run.

![Coding_Image.png](https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&auto=format&fit=crop&w=1950&q=80)

Without getting too thick in my personal examples of what it's like living between platforms, I'd instead like to share some of the stuff I've written or tools I use to make my life a bit easier.

This post explicitly covers a script I wrote and added to my **Current User, Current Host - console** [PowerShell Profile][1] to make initializing new Node.js modules much easier and specific to my preferences.

If you'd like, you can skip straight to [the code on GitHub][2] if that's more your style, or read on for my explanation of my problem and my solution.

## What was the problem?

Well, it wasn't a problem so much as a nuisance. When creating a new Node module, my standard workflow was something like so:

1. Open Visual Studio Code
2. Go to **File** -> **Open Folder**
3. Navigate to my Node.js modules folder -> Create a folder for the module
4. Open the newly created folder and launch the integrated terminal
5. Use `npm init` to setup the `package.json` with my default values
6. Use `touch index.js; code index.js` to create the new file and start work

To say this is a bit tedious and annoying would be an understatement.

## What's my solution?

I created a PowerShell Script called `New-NodeModule.ps1`, with a single function `New-NodeModule`, that I dot-source in my `Profile.ps1`. The function does the most common things I do when creating a new module, such as create a `package.json` with the default values for the license, author info, and so forth.

The only required information to create a new module is the name of the module, which is accepted as the first parameter or using a named parameter like `New-NodeModule -ModuleName outside-cli`. If desired, you can set the location for the module to be stored using the `-ModulePath` parameter. Moreover, regarding the accepted parameters, I prefer to open the newly created module in **Visual Studio Code** right after creating it so there's a `-OpenInVSCode` parameter that defaults to `$true` but can be set to `$false` to prevent opening the newly created module.

## What're the default values?

When creating a new Node module, I tend to use a _lot_ of the same settings. For example, I always use [Jest][3] for testing purposes and all of my projects are formatted/linted with [StandardJS][4]. More specifically:

1. As I'm creating the module, I can rest assured that I'm the author, so I'll always have the author block filled with information about myself
2. I always have the `start` script as a simple `node .\index.js`
3. I mentioned I test with **Jest**, so my `test` script will always start with `jest`
4. I prefer my projects to be licensed under the [MIT License][4] as it most aligns with my views on OSS

For more specifics, refer to the source code itself as it's all right there. 🤓

## Conclusion

To conclude, the last significant change I made to make it easier to use this new file was to add aliases to the `New-NodeModule` function (`nodemod`, `new-nodemod`, `newmod`, `newmodule`, `newnpm`). Now, whenever I want to create a new module, I simply type `newmod` in my terminal and it does what I need 😊

If you have any questions, comments, or concerns, please feel free to contact me directly or comment on the post!

[1]: https://blogs.technet.microsoft.com/heyscriptingguy/2012/05/21/understanding-the-six-powershell-profiles/
[2]: https://github.com/Alcha/PowerShell/blob/master/Scripts/New-NodeModule.ps1
[3]: https://facebook.github.io/jest/
[4]: https://standardjs.com/
