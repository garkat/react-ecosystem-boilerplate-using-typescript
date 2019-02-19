/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('child_process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const distPathPublic = resolve(__dirname, '../../dist/prod/public');
const srcPath = resolve(__dirname, '../../src');

module.exports = {
  // Base directory for resolving entry points and loaders from configuration.
  context: srcPath,

  // Entry points
  entry: {
    // Client
    client: `${srcPath}/Client`,
  },

  // Mode
  mode: 'production',

  // Loaders
  module: {
    rules: [
      // .css, .sass, .scss loader
      {
        exclude: /node_modules/,
        test: /\.(c|sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
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
              presets: [
                [
                  '@babel/preset-env',
                  {
                    forceAllTransforms: true,
                    modules: false,
                    targets: {
                      browsers: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
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

  // Optimization
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),

      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],

    splitChunks: {
      cacheGroups: {
        // Merge all the CSS into one file
        styles: {
          chunks: 'all',
          enforce: true,
          name: 'styles',
          test: /\.(c|sa|sc)ss$/,
        },

        // Create a custom vendor chunk.
        vendor: {
          chunks: 'all',
          enforce: true,
          name: 'vendor',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        },
      },
    },
  },

  // Show warning if chunk size is too large
  performance: {
    hints: 'warning',
  },

  // Plugins
  plugins: [
    // This is to remove the additional styles.js file weback is currently (as per 02/18/19)
    // creating for styles split chunk.
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('AfterEmitPlugin', () => {
          exec(`rm -rf ${distPathPublic}/js/styles*.js`);
        });
      },
    },

    new ManifestPlugin({
      // Manifest file name
      fileName: `${distPathPublic}/stats/manifest.json`,

      // Unfortunately, webpack is currently (as per 02/18/19) creating an additional styles.js
      // file for styles split chunk.
      filter: (file) => {
        return file.name !== 'styles.js';
      },

      // The below function does the following things:
      // 1. Removes extension from the key values of the manifest file.
      // 2. Replaces 'js/../css/' to 'css/'.
      map: (file) => {
        return {
          ...file,
          name: file.name
            .split('.')
            .slice(0, -1)
            .join('.'),
          path:
            file.path.indexOf('js/../css/') !== -1
              ? file.path.replace('js/../css/', 'css/')
              : file.path,
        };
      },
    }),

    new MiniCssExtractPlugin({
      filename: '../css/[name].[contenthash].css',
    }),
  ],

  // Options related to how webpack emits results
  output: {
    // The filename template for entry chunks.
    filename: '[name].[chunkhash].js',

    // The target directory where webpack should store the output file(s).
    path: `${distPathPublic}/js`,

    // The url to the output directory resolved relative to the HTML page which
    // will be used to serve the bundled file(s).
    publicPath: 'js/',
  },

  // Resolve imports without extensions
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
};
