const package = require('./package.json')

const OrgName = package.author.name
const ProjectName = package.displayName

module.exports = {
  title: `${OrgName}/${ProjectName}`,
  tagline: 'Welcome to my Digital Garden!',
  url: 'https://4lch4.garden',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: OrgName, // Usually your GitHub org/user name.
  projectName: ProjectName, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: `${ProjectName}`,
      logo: {
        alt: `${ProjectName} Logo`,
        src: 'img/prime-logo.svg'
      },
      items: [
        // Left Side
        {
          to: '/tils/index',
          label: 'TILs',
          position: 'left'
        },
        {
          to: '/notes/index',
          label: 'Notes',
          position: 'left'
        },
        {
          to: '/notes/cheatsheets/index',
          label: 'Cheatsheets',
          position: 'left'
        },
        {
          to: '/finds/index',
          label: 'Finds',
          position: 'left'
        },
        {
          label: 'About',
          to: '/about',
          position: 'left'
        },
        {
          to: 'https://4lch4.blog',
          label: 'Blog',
          position: 'right'
        },
        // Right Side
        {
          href: 'https://github.com/4lch4/Digital-Garden',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'TILs',
              to: 'tils/index'
            },
            {
              label: 'Notes',
              to: 'notes/index'
            },
            {
              label: 'Cheatsheets',
              to: 'notes/cheatsheets/index'
            },
            {
              to: '/finds/index',
              label: 'Finds',
              position: 'left'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: '/about'
            },
            {
              label: 'GitHub',
              href: package.homepage
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4lch4 Industries, LLC. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/4lch4/Digital-Garden/edit/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
