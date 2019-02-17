module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Allow object dot notation.
    'dot-notation': 0,
    // Exception for dev dependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Prettier settings
    'prettier/prettier': ['error'],
    // Allow both jsx and tsx extensions
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // Disallow arrow function or bind call as a prop for performance reasons
    'react/jsx-no-bind': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};
