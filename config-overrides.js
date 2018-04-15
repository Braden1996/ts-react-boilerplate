const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const jestAliases = require('./utils/jestAliases.js');
const tsconfig = require('./tsconfig.json');

module.exports = {
  jest: (config) => {
    config.moduleNameMapper =
      Object.assign(config.moduleNameMapper || {}, jestAliases.get(tsconfig));
    return config;
  },
  webpack: (config, env) => {
    config.resolve = config.resolve || {};
    config.resolve.plugins = [new TsconfigPathsPlugin()]
      .concat(config.resolve.plugins || []);
    return config;
  }
}
