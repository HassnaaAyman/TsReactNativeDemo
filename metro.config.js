/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const currentDir = __dirname;

const config = {
  watchFolders: [
    // To allow finding files outside mobile
    path.resolve(currentDir, '..')
    // path.resolve(currentDir, '..', '..')
  ],
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(currentDir, 'node_modules/react-native'),
      '@babel/runtime': path.resolve(currentDir, 'node_modules/@babel/runtime')
    }
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};

module.exports = config;
