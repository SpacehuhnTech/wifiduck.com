// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WiFi Duck',
  tagline: 'Open-source wireless BadUSB',
  url: 'https://wifiduck.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  scripts: [{ src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'wifiduck.com' }],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'spacehuhntech', // Usually your GitHub org/user name.
  projectName: 'wifiduck', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/spacehuhn/wifiduck.com/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WiFi Duck',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'docs/category/buy',
            position: 'left',
            label: 'Buy',
          },
          {
            to: 'docs/download',
            position: 'left',
            label: 'Download',
          },
          {
            href: 'https://learnbadusb.com',
            label: 'Online Course',
            position: 'right',
          },
          {
            href: 'https://github.com/spacehuhntech/wifiduck',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      /*footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
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
                label: 'GitHub',
                href: 'https://github.com/spacehuhntech/wifiduck',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },*/
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'description', content: 'Open-Source Wireless BadUSB based on ESP8266 and ATmega32u4.' },
        { name: 'keywords', content: 'DuckyScript, Ducky, Script, BadUSB, Atmega32u4, ESP8266, Arduino, Spacehuhn' },
        { name: 'author', content: 'Spacehuhn' },
      ],
      image: '/img/thumbnail.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
