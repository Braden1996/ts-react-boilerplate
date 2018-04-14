const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: ['.storybook'],
    use: [
      require.resolve("ts-loader"),
    ],
  });

  defaultConfig.resolve.plugins = [new TsconfigPathsPlugin()]
      .concat(defaultConfig.resolve.plugins || []);

  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return defaultConfig;
};
