const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
    staticDirs: ['../public'],
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
    };

    return config;
  },
};
