---
title: How to Uniquify Your PowerShell Console
description: A few tips and tricks to help make your PowerShell console unique in its own right.
authors: [4lch4]
date: 2018-06-03
tags: [powershell, windows, console, terminal, customization]
keywords: [powershell, windows, console, terminal, customization]
#image: https://github.com/4lch4.png
slug: how-to-uniquify-your-powershell-console
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [PowerShell Profile Basics](#powershell-profile-basics)
- [What're We Trying to Achieve?](#whatre-we-trying-to-achieve)
  - [To-Do](#to-do)
- [Where Do We Start?](#where-do-we-start)
- [Customizing the Title/Prompt](#customizing-the-titleprompt)
- [Getting The Weather](#getting-the-weather)
- [Conclusion](#conclusion)

## PowerShell Profile Basics

It's important to point out that knowledge of PowerShell profiles, while helpful ahead of time, isn't absolutely required to read this article and potentially gain some value. If you do wish to get some information ahead of time, I highly recommend taking a look at [this blog post][0] by [The Scripting Guys'][1] Ed Wilson.

There are only a couple things I think you need to know about profiles in PowerShell before continuing on:

1. A profile is a script that allows you to customize your console by being executed as soon as you launch said console.
2. There are 6 profiles you can utilize to choose exactly _which_ console you'd like to customize.

## What're We Trying to Achieve?

With that said, this is gonna be a long read so let's get started. Here is an image of my current console on startup (our end goal):

![Custom_PowerShell_Console](https://i.imgur.com/ljEMzRv.png)

I like it to show me the current weather report, and I've customized the prompt line to show the current directory name and time as opposed to the standard look:

![Default_PowerShell_Console](https://i.imgur.com/oiReAl8.png)

### To-Do

So, this means we have 3 "tasks" to complete for our desired look:

1. Add the weather API for our date integration
2. Add the current time to the beginning of the current shell line
3. Add the current directory to the end of the current shell line

## Where Do We Start?

To be completely honest, as I started to write this post I realized I had no idea how I did this aside from having to overwrite a function in my profile called `global:prompt` I believe. So, I opened my profile script in [PowerShell Studio][6] which is located at `C:\Users\Alcha\Documents\WindowsPowerShell\Profile.ps1` and saved a backup copy (`Profile_Backup.ps1`). Then, a lovely `Ctrl + A → Backspace` so we have a clean slate.

First up, we need to find out how to customize the prompt itself, so a quick google search will get us started. The [first][2] [three][3] [results][4] were more than enough to get me what I needed. Personally, I prefer reading examples over documentation so after scanning over the three links, I chose to focus on the third as it seemed rather lengthy and full of examples. After reading a bit more, I realized it was more focused on [posh-git][5] specifically, so I switched back to [the Scripting Guys response][3] written by Sean Kearney.

## Customizing the Title/Prompt

While Sean first covers how to customize the title of the window, this is something I didn't know about before and wound up changing in my profile, so hooray for new stuff! More specifically, I started by adding this line to customize the `$Host.UI.RawUI.WindowTitle` property:

```powershell
$Host.UI.RawUI.WindowTitle = (Get-Date).ToString()
```

While it was neat, I didn't quite like the format:

![Customized_WindowTitle-1](https://i.imgur.com/wmQGfxg.png)

After [some tinkering][7], I landed on the `'%y/%m/%d %R'` format. Which you'd use like `Get-Date -UFormat '%y/%m/%d %R'` , and your result should look something like this:

![Customized_WindowTitle-2](https://i.imgur.com/a9fQMeH.png)

Now that I've got my title the way I want it, on to the rest. Next, Sean mentions the default prompt function, which is what's executed every time your prompt is displayed:

```powershell
"PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) "
```

Bingo! Now we can take care of the 3rd item on our [To-Do](#To-Do) list: `Add the current directory to the end of the current shell line` To do this, we need to get the current working directory, which is available a number of ways. We can either use the `$PWD` variable which stores the current variable, or we can use the [Get-Location][8] cmdlet, which is what we'll be doing.

`Get-Location` by default returns the entire current path, but we're only interested in the last portion of it, so we can get that part by using the [Split-Path][9] cmdlet:

```powershell
Split-Path (Get-Location) -Leaf	# Gives us 'Alcha'
```

Now we need to combine knowledge of the `Prompt` function, how to get the current date/time, and the `Get-Location` cmdlet to get our desired result. The function will end up looking something like this:

```powershell
function Prompt {
  $Host.UI.RawUI.WindowTitle = (Get-Date -UFormat '%y/%m/%d %R').Tostring()

  Write-Host '[' -NoNewline
  Write-Host (Get-Date -UFormat '%T') -ForegroundColor Green -NoNewline
  Write-Host ']:' -NoNewline
  Write-Host (Split-Path (Get-Location) -Leaf) -NoNewline
  return "$ "
}
```

We need the `-NoNewLine` parameter in order to put all of the text on the same line. This also allows us to separate it all into 5 separate lines and color the current time green while the rest remains the default white. Lastly, I moved the line to customize the title here because now whenever the prompt is updated, so is the title, and it'll show the "current" time. Now our console should look like so on startup:

![Customized_Prompt-1](https://i.imgur.com/irOTbHA.png)

With that, we've got two items from our To-Do list complete, and we can move on to the easiest part, which is adding a weather API to display the current conditions for our area.

## Getting The Weather

Now, to get the weather we'll be using the [OpenWeatherMap][10] service, mostly because I [found a script][12] at some point in the past that automatically formats the output into what you saw in the first screenshot. In order to use the service though, we need to [get an API key][11] that we can pass to the script.

When you create an account on OpenWeatherMap, go to the API keys portion of your account, which if you can't find is [available here][13]. Create a key and name it whatever you want, I just left mine as "Default":

![Open_Weather_Map_API_Key](https://i.imgur.com/RReC8Y9.png)

Now that we have a key, we need to add the `Get-Weather` script to our profile. The way I did this was I created a new script in my profiles directory (`C:\Users\Alcha\Documents\WindowsPowerShell\`) called **Get-Weather.ps1** and then copy/pasted the content of the script from GitHub. I'm bit of a stickler for variable naming conventions and capitalization so after some refactoring, I wound up with a script that looks something like this:

![Get-Weather_Script-1](https://i.imgur.com/heE3AmH.png)

I won't cover the meat and bones of the script, as this is already a rather lengthy post 😅 but the full text of "my" version of obs0lete's script is [available as a gist][14], you just need to plug in your API key for it to function properly. Now to _use_ this, we need only dot-source the file in our profile and then call the `Get-Weather` function to kick it all off:

![Weather_Added_To_Profile](https://i.imgur.com/CpEy6aU.png)

You'll of course have to change the **API key**, **city**, and **country** to values that work for you, but it's fairly simple. Something to note, I found a hard time with the _actual_ city I live in, as there's a number of other cities in the USA with the same name. This meant I was getting really weird weather results from the API, imagine it saying it's raining outside when it's bright and sunny. I fixed this by finding the neighboring large city and using their name instead:

![Custom_PowerShell_Console-2](https://i.imgur.com/i3qpiCi.png)

## Conclusion

It's important to note that I changed the original `Get-Weather` script just enough to make it work for me, so be sure to make any adjustments you might need. For example, I mentioned adjusting the variable names, but I also updated the units from Metric to Imperial and made it so it would output the _Attempting URL..._ line mostly for debugging but also as a test for if the API isn't working for whatever reason.

I hope this wasn't too painful of a read, I did my best to only cover the interesting bits of solving this problem and leave out any fat that was just dull or involved me spacing out and endlessly scrolling 😂 If you have any questions, comments, or concerns, please feel free to reach out to me on any of my social networks or email me at admin@alcha.org.

[0]: https://blogs.technet.microsoft.com/heyscriptingguy/2012/05/21/understanding-the-six-powershell-profiles/
[1]: https://social.technet.microsoft.com/profile/The+Scripting+Guys
[2]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_prompts?view=powershell-6
[3]: https://blogs.technet.microsoft.com/heyscriptingguy/2016/01/03/weekend-scripter-customize-powershell-title-and-prompt/
[4]: https://github.com/dahlbyk/posh-git/wiki/Customizing-Your-PowerShell-Prompt
[5]: https://github.com/dahlbyk/posh-git/
[6]: https://www.sapien.com/software/powershell_studio
[7]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-date?view=powershell-6#examples
[8]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-6
[9]: https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/Split-Path?view=powershell-6
[10]: https://openweathermap.org/
[11]: https://openweathermap.org/appid
[12]: https://github.com/obs0lete/Get-Weather
[13]: https://home.openweathermap.org/api_keys
[14]: https://gist.github.com/Alcha/f08a83486f7d064be9d4f73300a33872

