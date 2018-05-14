const jestAliases = require('./internal/utils/jestAliases.js');
const patchWebpack = require('./internal/utils/patchWebpack.js');
const tsconfig = require('./tsconfig.json');

module.exports = {
  jest: config => ({
    ...config,
    moduleNameMapper: Object.assign(
      config.moduleNameMapper || {},
      jestAliases.get(tsconfig)
    ),
    globals: {
      ...config.globals,
      'ts-jest': {
        ...config.globals['ts-jest'],
        // For some unknown reason, setting `useBabelrc` to true is not working.
        // useBabelrc: true,
        babelConfig: {
          ...JSON.parse(require('fs').readFileSync('./.babelrc', 'utf8'))
        }
      }
    }
  }),
  webpack: patchWebpack
}
