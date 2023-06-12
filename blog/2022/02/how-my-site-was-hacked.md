---
title: How My Website Was Hacked
description: How someone took over my unused domain name w/ GitHub Pages.
authors: [4lch4]
date: 2022-02-01
tags: [github-pages, websites, hacked, osint, website-defacers]
keywords: [github-pages, websites, hacked, osint, website-defacers]
image: https://assets.4lch4.cloud/projects/blog/4lch4.social/4lch4.social-Hacked-0.png
slug: how-my-website-was-hacked
---

![Hacker-Man][Hacker-Man-Image]

I recently learned that one of my websites was "hacked". This blog post is my way of putting all the information in one place, sharing it with the world, and hopefully prevent this from happening to others. Or at the very least, if it _does_ happen to you, maybe this will help you get it back and find out how they did it.

## Terminology

This section will likely be cut out before being posted, but I want a section on the post where I discuss/comment on the various terms I use throughout.

### Hack(ed)

I use the word hack, hacked, or hacker quite a bit throughout this post but what was done isn't truly hacking, in my opinion. What was _actually_ done was my site had been defaced. They didn't gain access to any of my infrastructure or other tools, just stood up another site and had my DNS point to it.

_Relevant XKCD:_

[![XKCD-932][XKCD-Comic-Img]][XKCD-Comic-URL]

### Defacing/Defacer

> **Website defacement** is an attack on a website that changes the visual appearance of a [website][Wiki-Website] or a [web page][Wiki-Web-Page].

Aside from the basic definition above, from Wikipedia, I think what happened is best described with the above XKCD comic. There are a wide variety of ways to make it look like a website was "hacked" when in reality it was just defaced, and none of the actual infrastructure involved in hosting the site was touched.

## Initial Discovery

On January 29th, 2022, I decided to update one of my simple websites (4lch4.social) that provides links to my various social media accounts. When I pulled up the site, I was greeted with a lovely message that I had been hacked:

![4lch4.social-Hacked-0.png][4lch4.social-Hacked-0]

## Digging In

So, I decided to dig in and figure out how they'd done this. At first I checked my DNS entries with `dog`, and with my DNS host (Google Domains), and verified the DNS entries were still pointed to GitHub pages. Since they were, that meant someone was hosting the site using GitHub pages.

Initially, I wanted to find out as much as I could about the individual "X'Boy Linux" and see what other stuff they'd done. I dropped their name into [a Google search][XBoy-Linux-Search] and started going through the results:

![4lch4.social-Hacked-1.png][4lch4.social-Hacked-1]

The first few were a Facebook with no real useful information, a profile on a defacer site, a few hacked sites, and then a [YouTube channel][XBoy-Linux-YT]. I opened the YouTube channel and the video that it shows off is a YouTube story where they're showing off hacking a site. They do this by hosting a website using GitHub pages with the victim domain name in a `CNAME` file. While watching it, I realized they left [the username of the GitHub account][GH-Page-0] they used in the video.

I went to the account and noticed quite a few repositories that were exactly the same. A `CNAME` file with a DNS entry, and an `index.html` that contained the HTML of a site saying they were hacked by X'Boy Linux. One of them, [called didi][GH-Page-1], contained the DNS entry for my domain (4lch4.social).

## Getting it Back

In order to re-gain control of my domain, I tried using the [verified domain names][Custom-GH-Domain] that GitHub offers. However, even after verifying that I owned it by adding a TXT record, I still couldn't use it. I read a few different articles and finally landed on one that recommended I open a support ticket. Honestly, I didn't even know regular users could open support tickets with GitHub 😅

After opening a ticket, I got a reply within a few hours from a bot that verified I did indeed own the domain name, and removed it from the hacker's account. By the next day I was able to use my domain again and stood up a basic page so someone else couldn't just hijack my domain (again).

[XBoy-Linux-Search]: https://www.google.com/search?q=%22X%27Boy+Linux%22
[XBoy-Linux-YT]: https://www.youtube.com/c/XBOYLINUX
[GH-Page-0]: https://github.com/CYBERANONYMOUS1
[GH-Page-1]: https://github.com/CYBERANONYMOUS1/didi
[Custom-GH-Domain]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
[Wiki-Web-Page]: https://en.wikipedia.org/wiki/Web_page
[Wiki-Website]: https://en.wikipedia.org/wiki/Website

[4lch4.social-Hacked-0]: https://assets.4lch4.cloud/projects/blog/4lch4.social/4lch4.social-Hacked-0.png
[4lch4.social-Hacked-1]: https://assets.4lch4.cloud/projects/blog/4lch4.social/4lch4.social-Hacked-1.png

[XKCD-Comic-Img]: https://imgs.xkcd.com/comics/cia.png
[XKCD-Comic-URL]: https://xkcd.com/932/

[Hacker-Man-Image]: https://assets.4lch4.cloud/projects/blog/Hacker-Man-0.jpeg

