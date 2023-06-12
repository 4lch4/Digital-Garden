// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const pkg = require('./package.json')

const OrgName = pkg.author.name
const ProjectName = pkg.displayName
const RepoURL = pkg.homepage

/*
<script async defer data-website-id="a984e28e-2d77-4522-b5e1-814e5653fa03" src="https://umami.4lch4.cloud/umami.js"></script>
*/

// const UmamiPlugin = async (context, options) => {
//   return {
//     name: 'docusaurus-plugin-umami',

//     injectHtmlTags() {
//       console.debug(`[${this.name}#injectHtmlTags]: Injecting Umami script...`)

//       return {
//         headTags: [
//           {
//             tagName: 'script',
//             attributes: {
//               async: true,
//               defer: true,
//               'data-website-id': 'a984e28e-2d77-4522-b5e1-814e5653fa03',
//               src: 'https://umami.4lch4.cloud/umami.js',
//             },
//           },
//         ],
//       }
//     },
//   }
// }

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ProjectName,
  tagline: `Welcome to ${ProjectName}!`,
  favicon: 'img/favicon.ico',

  url: 'https://4lch4.garden',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  deploymentBranch: 'gh-pages',

  // GitHub pages deployment config.
  organizationName: OrgName,
  projectName: ProjectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-ackee',
      {
        // Ackee domain ID
        domainId: '50c39dd7-cfce-41d4-9f62-345e2b940aa1',

        // URL to your Ackee server
        // MUST NOT END WITH SLASH ('/')
        server: 'https://ackee.4lch4.cloud',

        // Enable or disable tracking of personal data (OS, device, browser, screen size, user language)
        detailed: true,

        // Enable or disable tracking when on localhost
        ignoreLocalhost: false,

        // Enable or disable the tracking of your own visits
        // Enabled by default, should be turned off when using a wildcard Access-Control-Allow-Origin header
        // Some browsers may strictly block third-party cookies and this option will have no impact in this situation
        ignoreOwnVisits: false,

        // Ackee tracker file name
        // More information can be found [here](https://github.com/electerious/Ackee/blob/master/docs/Options.md#tracker)
        ackeeTrackerFile: '4lch4-ackee.js',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${RepoURL}/edit/main`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${RepoURL}/edit/main`,
        },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/garden.png',
      navbar: {
        title: `${ProjectName}`,
        logo: {
          alt: `${ProjectName} Logo`,
          src: 'img/prime-logo.svg',
        },
        items: [
          // Left Side
          {
            to: '/docs/notes',
            label: 'Notes',
            position: 'left',
          },
          {
            to: '/docs/tils',
            label: 'TILs',
            position: 'left',
          },
          {
            to: '/docs/finds',
            label: 'Finds',
            position: 'left',
          },
          {
            label: 'About',
            to: '/about',
            position: 'left',
          },
          {
            to: 'https://4lch4.blog',
            label: 'Blog',
            position: 'right',
          },
          // Right Side
          {
            href: 'https://github.com/4lch4/Digital-Garden',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
}

module.exports = config
