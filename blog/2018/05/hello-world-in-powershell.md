---
title: Hello World in PowerShell
description: A brief look at PowerShell and a Hello World script.
date: 2018-05-31
authors:
  name: 4lch4
  title: Some Guy
  url: https://4lch4.com
  image_url: https://github.com/4lch4.png
tags: [powershell, windows, console, terminal]
slug: hello-world-in-powershell
---

_The following is a blog post I wrote for [The Renegade Coder][8]'s [sample-programs][9] repository._

## PowerShell Background

PowerShell is the de facto scripting language for managing Windows machines/servers. [Microsoft][1] has made it quite clear that PowerShell is here to stay and will become the preferred way to manage Windows servers in the future.

[Jeffrey Snover][2] is largely credited as the designer behind the language, while Bruce Payette and James Truher were also on the project, and in an interview in 2017, Snover [explained the motivation][3] behind creating PowerShell:

> I'd been driving a bunch of managing changes, and then I originally took the UNIX tools and made them available on Windows, and then it just didn't work. Right? Because there's a core architectural difference between Windows and Linux. On Linux, everything's an **ASCII** text file, so anything that can manipulate that is a managing tool. `AWK`, `grep`, `sed`? Happy days!
>
> I brought those tools available on Windows, and then they didn't help manage Windows because in Windows, everything's an API that returns structured data. So, that didn't help. [...] I came up with this idea of PowerShell, and I said, "Hey, we can do this better."

Originally, PowerShell was to be called **Monad** and it's ideas were published in a white paper titled [Monad Manifesto][4]. Shortly after releasing the Beta 3 version Microsoft formally renamed **Monad** to _Windows PowerShell_, followed by the release candidate 1 version.

PowerShell is now up to version 5.1 for stable builds and the new 6.0 version which was announced in 2016 is in public beta. The largest change in this version is it's now [open-source][5] and will now be called **PowerShell Core** as it runs on [.NET Core][6] as opposed to the [.NET Framework][7] which previous versions use.

## Hello World in PowerShell

Enough background, let's actually get something working 😊

```powershell
Write-Host 'Hello, World!'
```

To execute this code, simply open a PowerShell console on any Windows machine as it comes installed by default. You'll see the reply output in the window like so:

![Hello_World](https://thepracticaldev.s3.amazonaws.com/i/icyxqdj2qcih4ybdza6c.png)

As is the case with most modern scripting languages, getting a Hello World sample running is really easy.

## How to Run the Solution

Instead of running the commands directly within the console though, the best route is to write your scripts in a file and call the file when necessary. Download a copy of the Hello-World.ps1 file from the repository and open a console.

Now, navigate to wherever you downloaded the script and execute it by calling it like so:

```powershell
.\Hello-World.ps1
```

This calls the script and returns the output to the console:

![Hello_World_Script](https://thepracticaldev.s3.amazonaws.com/i/7yzlsn708p253osdjfgn.png)

[1]: https://www.microsoft.com
[2]: https://en.wikipedia.org/wiki/Jeffrey_Snover
[3]: https://www.heavybit.com/library/podcasts/to-be-continuous/ep-37-the-man-behind-windows-powershell/
[4]: https://blogs.msdn.microsoft.com/powershell/2007/03/18/monad-manifesto-the-origin-of-windows-powershell/
[5]: https://arstechnica.com/information-technology/2016/08/powershell-is-microsofts-latest-open-source-release-coming-to-linux-os-x/
[6]: https://www.microsoft.com/net/download/windows
[7]: https://www.microsoft.com/net/learn/architecture
[8]: https://therenegadecoder.com/
[9]: https://github.com/jrg94/sample-programs

