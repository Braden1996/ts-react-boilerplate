const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin');
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
  webpack: (config, env) => {
    config = patchWebpack(config, env);

    // Only conduct bundle analysis for production, as it causes delays on
    // development.
    if (env === 'production') {
      config.plugins = (config.plugins || []).concat([
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename:
            `${(env === 'production' ? '..' : '.')}/analysis/${env}/build.html`,
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename:
            `${(env === 'production' ? '..' : '.')}/analysis/${env}/stats.json`
        })
      ]);
    } else if (env === 'development') {
      const dashboard = new Dashboard();
      config.plugins = (config.plugins || []).concat([
        new DashboardPlugin()
      ]);
    }

    return config;
  }
}
