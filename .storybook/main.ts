import type {StorybookConfig} from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {docs: true},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: [
    {
      from: '../src/app/fonts',
      to: '../src/app/fonts',
    },
  ],
  webpackFinal: async (config) => {
    if (!config.module || !config.module.rules) {
      return config;
    }

    config.module.rules = [
      ...config.module.rules.map((rule) => {
        if (!rule || rule === '...') {
          return rule;
        }

        if (rule.test && /svg/.test(String(rule.test))) {
          return {...rule, exclude: /\.svg$/i};
        }
        return rule;
      }),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
};

export default config;
