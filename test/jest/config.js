// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  // The directory where Jest should output its coverage files.
  coverageDirectory: '<rootDir>/test/jest/coverage',

  // TODO: Find a better way to handle the pattern.
  // Ignore coverage for the following pattern
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/shared/routes/index.js',
    '<rootDir>/src/shared/views/ErrorBoundary/index.js',
    '<rootDir>/src/shared/views/Footer/index.js',
    '<rootDir>/src/shared/views/Header/index.js',
    '<rootDir>/src/shared/views/NotFound/index.js',
  ],

  // Handle CSS module
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },

  // Root directory
  rootDir: resolve(__dirname, '../../'),

  // Only ${ComponentName}.test.js is allowed as test files for the sake of consistency.
  testMatch: ['<rootDir>/src/**/?(*.)+(test).js'],

  // Setup file
  setupFiles: ['<rootDir>/test/jest/setup.js'],

  // Snapshot serializer
  snapshotSerializers: ['enzyme-to-json/serializer'],

  // Custom transform
  transform: {
    '^.+\\.js$': '<rootDir>/test/jest/transform.js',
    '^.+\\.ts$': '<rootDir>/test/jest/transform.js',
    '^.+\\.tsx$': '<rootDir>/test/jest/transform.js',
  },
};
