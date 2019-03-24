// eslint-disable-next-line @typescript-eslint/no-var-requires
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@loadable/babel-plugin', // ?
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
});
