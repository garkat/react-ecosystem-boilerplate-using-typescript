/* eslint-disable @typescript-eslint/no-var-requires */
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
    new ManifestPlugin({
      fileName: `${distPathPublic}/stats/manifest.json`,

      // The below function removes extension from the key values of the manifest file.
      map: (file) => {
        return {
          ...file,
          name: file.name
            .split('.')
            .slice(0, -1)
            .join('.'),
        };
      },
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
