import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'OmniContext CLI',
  tagline: 'Agentic Tools for Developers',
  url: 'https://bluenoah1991.github.io',
  baseUrl: '/omni-context-cli-landing/docs/',
  organizationName: 'bluenoah1991',
  projectName: 'omni-context-cli-landing',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'markdown',
          routeBasePath: '/',
          editUrl: 'https://github.com/bluenoah1991/omni-context-cli-landing/tree/main/markdown/',
        },
        theme: {
          customCss: './assets/css/docs.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OmniContext CLI',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/bluenoah1991/omni-context-cli-landing',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} OmniContext CLI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
