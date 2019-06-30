module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    graphql: true
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
