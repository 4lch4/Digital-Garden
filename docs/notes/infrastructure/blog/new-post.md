---
title: Creating a New Blog Post
date: 2021-07-02T22:53:09.000Z
# lastmod: 2021-07-02T22:53:09.000Z
---

When creating a new blog post, the first thing to do is set the Front Matter for the app to learn essential information about the post. Each post supports the following values in the Front Matter:

- `title`
  - Duh, it's the title of the post.
- `summary`
  - A short summary of the post.
- `date`
  - When the post was published/created.
- `tags`
  - An array of strings to assign as tags.
- `images`
  - An array of strings that resolve to paths to images for the post.
- `lastmod`
  - When the post was last modified (if ever).
- `draft`
  - Boolean indicating whether or not the post is published.

After providing the Front Matter, continue writing as usual.

## Automate?

Ideally I would have a script or something similar that accepts some parameters which it then uses to build out the base of the blog post.
