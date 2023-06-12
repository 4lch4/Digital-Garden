---
title: Solving the FizzBuzz Problem in PowerShell
description: A simple solution to the standard FizzBuzz interview question.
authors: [4lch4]
date: 2018-08-07
tags: [powershell, tips, interviews]
keywords: [powershell, tips, interviews]
image: /img/posts/FizzBuzz.png
slug: solving-the-fizzbuzz-problem-in-powershell
---

## Fizz Buzz in PowerShell

I'm going to start with a little anecdote before getting started on the meaty portion of this article so feel free to skip ahead to **No More Anecdote** if you're just not that interested 😅 I completely understand.

I realized about two weeks ago that I hadn't written anything in a while and had a bit of a desire to write, with nothing coming to mind on what to write. I was also dealing with a nagging feeling in my brain of "Should I really write another article?" and if I did "Who really cares if I write another article? There are countless others writing about the same stuff", among other negative thoughts.

I went to a get together with some of my best friends to eat tacos, drink some tequila, and just enjoy each others company. While I was there, one of my more technically oriented friends came up to me and we began talking about my work, playing Overwatch, and other nerdy things, when he mentions to me that he enjoyed reading my past articles. While he may not be a currently active developer and that some of the stuff goes over his head, I've "got a knack for it" as he said.

I was elated to hear this, and haven't felt that way about a "project" aside from when I can add features to [Tron][0] that are heavily requested by the user base. It was enough to remind me the whole reason I started writing these is for the off-chance that someone like that _would_ enjoy my writing and possibly get them more interested in programming, learn something new, or simply enjoy the read for the sake of reading something interesting.

In the end, I'd like to say thank you again to that friend of mine for the encouraging words, as I probably wouldn't have had the motivation to start on this without them 💗

## No More Anecdote

![Spiderman_Reading][1]
_Photo by [Raj Eiamworakul][2] on [Unsplash][3]_

And now we're off to the juicy bits of the article! 🤤 If you're unfamiliar with the [Fizz Buzz][4] interview problem, it's a relatively simple problem that is adept at testing your knowledge and fundamental understanding of a given programming language as well as showing the interviewer what kind of developer you are.

For example, do you prefer to toss a bunch of things at the wall and see what works and whittle away the excess? Or do you prefer to lay out a plan for the program before you even write some code? If you'd like more information on the things interviewers can gleam from a Fizz Buzz solution, feel free to check out [this article][5] from [Lionell Pack][6] on Forbes.

## What's The Problem?

The actual problem was (from what I can tell, please correct me if I'm wrong) initially put forth by Imron Ghory over [on his blog][7] and it was based on a _"[group word game][8] for children to teach them about division."_ While there's a number of different ways to word this problem, here's the wording we're going to be working with:

> Write a program that prints the numbers 1 to 100. However, for multiples of three, print "Fizz" instead of the number. Meanwhile, for multiples of five, print "buzz" instead of the number. For numbers which are multiples of both, print "FizzBuzz."

This means there are a few things we need to keep in mind or consider:

1. The minimum value of 1.
2. The maximum value of 100.
3. Determine which order to check for multiples to avoid missing edge cases.
4. Write the output to the console.

## Where to Start?

Well, this is where it varies for everyone. Depending on how you tend to work as a developer, your entry point will vary. Personally, I'll be starting by creating the `for` loop that will iterate through all the numbers we need to analyze. This starts us off with something like the following for PowerShell:

```powershell
for ($x = 1; $x -le 100; $x++) {
  Write-Output $x
}
```

This will get us a starting point of outputting every number from 1 to 100. Now we should start putting in some `if` statements to determine if `$x` is a multiple of 3, 5, or both. As is the case with most modern programming languages, PowerShell has a [**modulus**][9] operator that will return the remainder of the division between two numbers.

For example, doing `Write-Output (25 % 5)` would output 0, since 25 divided by 5 has no remainder. This also happens to mean the first value is a multiple of the second, which we can use to determine the multiples of `$x`. When I first wrote this script, my solution looked like so:

```powershell
for($x = 1; $x -le 100; $x++) {
  $Threes = $x % 3
  $Fives = $x % 5

  if (($Threes -eq 0) -and ($Fives -eq 0)) {
    Write-Output "FizzBuzz"
  } else if ($Threes -eq 0) {
    Write-Output "Fizz"
  } else if ($Fives -eq 0) {
    Write-Output "Buzz"
  } else {
    Write-Output $x
  }
}
```

## Cleaning Up Our First Draft

While this works, it's a bit clunky and doesn't allow for us to easily modify it in the future if we want to add cases other than being a multiple of 3 or 5. I hadn't quite realized this until I went looking for more information on this problem and found [a video][10] by Tom Scott. He pointed out that you could easily account for future adjustments by combining the output as a single variable for each number.

While he used **JavaScript**, the solution should be easily understandable and looks like so:

```javascript
for (var i = 1; i <= 100; i++) {
  var output = ''

  if (i % 3 === 0) output += 'Fizz'
  if (i % 5 === 0) output += 'Buzz'
  if (output === '') output = i

  console.log(output)
}
```

As you can see, he creates the `output` variable for each iteration of `$x` and depending on the multiples, adds or replaces values to that variable. Then, in the end, he outputs it to the console using `console.log`. Translating this to PowerShell, we get something like so:

```powershell
for ($x = 1; $x -le 100; $x++) {
  $Output = ""

  if ($x % 3 -eq 0) { $Output += "Fizz" }
  if ($x % 5 -eq 0) { $Output += "Buzz" }
  if ($Output -eq "") { $Output = $x }

  Write-Output $Output
}
```

At this point, we have a working solution to the Fizz Buzz problem written in PowerShell. If you were to copy and paste it into a terminal you'd get something that looks like this:

![FizzBuzz.ps1_Output][11]

## Finally, A Script!

Now, since this is PowerShell, it's no fun just having a `for` loop that we need to copy paste. No, we need a script! 😈

I created a file simply titled `FizzBuzz.ps1` and got to work by adding the standard goodies at the top of a PowerShell script:

```powershell
[CmdletBinding()]
param (

)
```

Since I was initially writing this script for the [sample programs][12] repository I contribute to, I knew I wanted to support more than going from 1 to 100. Instead, I wanted users to be able to provide a minimum and maximum parameter that would let them modify the output. This simply means adding two parameters to the `param ()` field like so:

```powershell
param (
  [Parameter(Mandatory = $false, Position = 0)]
  $Min = 1,

  [Parameter(Mandatory = $false, Position = 1)]
  $Max = 100
)
```

The `Mandatory` and `Position` attributes tell PowerShell that the parameters have default values and that they aren't mandatory, and the position attribute makes it possible to do something like `.\FizzBuzz.ps1 0 75` to adjust the min and max without having to specify the parameter names. Then, with some minor changes to the `for` loop, we have our [finished result][13]!

```powershell
<#
.SYNOPSIS
  A simple script that solves the standard FizzBuzz interview problem.

.DESCRIPTION
  A simple script that solves the FizzBuzz interview problem to illustrate flow
control within a PowerShell script.

.PARAMETER Min
  The minimium value to start counting at (inclusive). Defaults to 1.

.PARAMETER Max
  The maximum value to count to (inclusive). Defaults to 100.

.EXAMPLE
  .\FizzBuzz.ps1
1
2
Fizz
4
Buzz
Fizz
...

.EXAMPLE
  .\FizzBuzz.ps1 -Min 10 -Max 75
Buzz
11
Fizz
13
14
FizzBuzz
16
...

.NOTES
  For reference, here's a copy of the FizzBuzz problem that this script solves,
the only difference between the requested solution and this script is the script
will let you determine the minimum and maximum values if you desire:

"Write a program that prints the numbers 1 to 100. However, for multiples of
three, print "Fizz" instead of the number. Meanwhile, for multiples of five,
print "Buzz" instead of the number. For numbers which are multiples of both,
print "FizzBuzz"
#>
[CmdletBinding()]
param (
  [Parameter(Mandatory = $false, Position = 0)]
  $Min = 1,

  [Parameter(Mandatory = $false, Position = 1)]
  $Max = 100
)

for ($X = $Min; $X -le $Max; $X++) {
  $Output = ""

  if ($X % 3 -eq 0) { $Output += "Fizz" }
  if ($X % 5 -eq 0) { $Output += "Buzz" }
  if ($Output -eq "") { $Output = $X }

  Write-Output $Output
}
```

[0]: https://github.com/HF-Solutions/Tron
[1]: https://i.imgur.com/uQbNvu9.png
[2]: https://unsplash.com/photos/o4c2zoVhjSw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[3]: https://unsplash.com/search/photos/story
[4]: http://codingbat.com/doc/practice/fizzbuzz-code.html
[5]: https://www.forbes.com/sites/quora/2016/09/12/solving-fizzbuzz-shows-interviewers-much-more-than-your-programming-skills/#22daf3a63b36
[6]: https://www.quora.com/profile/Lionell-Pack
[7]: https://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/
[8]: https://en.wikipedia.org/wiki/Fizz_buzz
[9]: https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arithmetic_operators?view=powershell-6#long-description
[10]: https://www.youtube.com/watch?v=QPZ0pIK_wsc
[11]: https://i.imgur.com/tC2pfXg.png
[12]: https://github.com/jrg94/sample-programs
[13]: https://github.com/jrg94/sample-programs/blob/master/archive/p/powershell/FizzBuzz.ps1
