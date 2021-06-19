import React from 'react'
import Link from '@docusaurus/Link'

export default [
  {
    title: <>What's a Digital Garden?</>,
    imageUrl: 'img/garden.svg',
    description: (
      <>
        Fair question, I mean I only just heard about the concept of Digital
        Gardens about a month ago 😅 That said it's like what the internet used
        to be. When no one really knew what websites "should have" and were just
        having fun creating in their corner of the web. For more information,
        check out{' '}
        <Link to="https://maggieappleton.com/garden-history">this article</Link>
        .
      </>
    )
  },
  {
    title: <>Purpose</>,
    imageUrl: 'img/collectibles.svg',
    description: (
      <>
        This site is to serve as a collection for all of my documentation, TIL
        snippets, etc., that are to be public knowledge. There are very few
        things I would consider private, so most of what I learn will be here.
      </>
    )
  },
  {
    title: <>Inspiration</>,
    imageUrl: 'img/inspiration.svg',
    description: (
      <>
        This project initially started as a way to share my TIL snippets, based
        off{' '}
        <a href="https://news.ycombinator.com/item?id=22908044">
          this Hacker News post
        </a>{' '}
        about writing TILs. However, while looking for a framework to use, I
        found Docusaurus, Digital Gardens, etc., which led me to creating this
        site to contain it all.
      </>
    )
  }
]

// export default Features
