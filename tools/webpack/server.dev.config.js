/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { resolve } = require('path');

const distPathPrivate = resolve(__dirname, '../../dist/dev/private');
const srcPath = resolve(__dirname, '../../src');
const nodeModulesPath = resolve(__dirname, '../../node_modules');

module.exports = {
  // Base directory for resolving entry points and loaders from configuration.
  context: srcPath,

  // Entry points
  entry: {
    // Server
    server: `${srcPath}/Server`,
  },

  // Keep node_module paths out of the bundle
  externals: fs
    .readdirSync(nodeModulesPath)
    .concat(['react-dom/server'])
    .reduce((ext, mod) => {
      const extParam = ext;
      extParam[mod] = `commonjs ${mod}`;
      return extParam;
    }, {}),

  // Mode
  mode: 'development',

  // Loaders
  module: {
    rules: [
      // .css, .sass, .scss loader
      {
        exclude: /node_modules/,
        test: /\.(c|sa|sc)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              exportOnlyLocals: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              modules: true,
            },
          },
        ],
      },

      // .js, .ts, .tsx loader
      {
        exclude: /node_modules/,
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-dynamic-import'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },

  // Configure whether to polyfill or mock certain Node.js globals and modules
  node: {
    global: false,
    __dirname: false,
    __filename: false,
  },

  // Options related to how webpack emits results
  output: {
    // The filename template for entry chunks.
    filename: '[name].js',

    // The target directory where webpack should store the output file(s).
    path: `${distPathPrivate}/js`,

    // Include comments in bundles with information about the contained modules.
    // Use in Dev environment only.
    pathinfo: true,

    // The url to the output directory resolved relative to the HTML page which
    // will be used to serve the bundled file(s).
    publicPath: 'js/',
  },

  // Resolve imports without extensions
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },

  // Compile for usage in a node.js-like environment
  target: 'node',
};
