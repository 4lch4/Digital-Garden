# Digital Garden

This repository is home to my Digital Garden (built w/ [Docusaurus 2][0]), as the title may have suggested. A Digital Garden is a place where I can share my thoughts and ideas, and where I can learn in public. It is a place where I can grow my knowledge and skills, and where I can share my journey with others.

It's also simply a place for me to store things such as style guides, rules, etc., to be used throughout my various projects.

## Installation

```bash
npm i
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using [GitHub Pages][1] for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

[0]: https://docusaurus.io
[1]: https://pages.github.com
