const patchWebpack = require('../internal/utils/patchWebpack.js');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: ['.storybook'],
    use: [{
      loader: require.resolve('ts-loader')
    }],
  });

  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return patchWebpack(defaultConfig, env);
};
