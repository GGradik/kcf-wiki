// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KCF',
  tagline: 'Лучший ванильный сервер Кыргызстана',
  favicon: 'img/KCF2.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'KCF Logo',
          src: 'img/KCF2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Вики',
          },


          {
            href: 'http://185.138.186.219:8123',
            label: 'Карта',
            position: 'right',
          },
          {
            href: 'https://discord.gg/gtYqFmpSRq',
            label: 'Discord',
            position: 'right',
          },

        ],
      },
      /* announcementBar: {
        id: 'welcome',
        content: '👋 Добро пожаловать на KCF Wiki! Мы в процессе наполнения.',
        backgroundColor: '#ff4444',
        textColor: '#ffffff',
        isCloseable: false,
      }, */
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Проект',
            items: [
              {
                label: 'Правила',
                to: '/docs/general',
              },
              {
                label: 'Вики',
                to: '/docs/intro',
              },
              {
                label: 'Карта мира',
                href: 'http://185.138.186.219:19136/',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gtYqFmpSRq',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+XfEbl_H1wClhMjhi',
              },
              {
                label: 'Наш сайт',
                href: 'https://ncore.kg/',
              },
            ],
          },
          {
            title: 'Игра',
            items: [
              {
                label: 'Java: 185.138.186.219:25565',
                href: '#',
              },
              {
                label: 'Bedrock: 185.138.186.219:19132',
                href: '#',
              },
              {
                label: 'Города',
                to: '/docs/towns',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} KCF Server. Создано для сообщества Кыргызстана.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

