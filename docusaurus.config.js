const OrgName = '4lch4'
const ProjectName = 'Knowledge-Base'

module.exports = {
  title: `4lch4 - Knowledge Base`,
  tagline:
    'My collection of "shared knowledge", which at the moment mostly consists of TIL snippets.',
  url: 'https://kba.4lch4.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: OrgName, // Usually your GitHub org/user name.
  projectName: ProjectName, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: `@4lch4/knowledge-base`,
      logo: {
        alt: "4lch4's Knowledge Base Logo",
        src: 'img/prime-logo.svg'
      },
      items: [
        {
          to: '/tils/index',
          label: 'TILs',
          position: 'left'
        },
        {
          to: '/cheatsheets/index',
          label: 'Cheatsheets',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/4lch4/TILs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'TILs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1'
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/4lch4/TILs'
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
          editUrl:
            'https://github.com/4lch4/knowledge-base/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
