const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const loaderNameMatches = (rule, loader_name) =>
  rule && rule.loader && typeof rule.loader === 'string' &&
  (rule.loader.indexOf(`${path.sep}${loader_name}${path.sep}`) !== -1 ||
  rule.loader.indexOf(`@${loader_name}${path.sep}`) !== -1);

const getLoader = (rules, matcher) => {
  let loader;

  rules.some(rule => {
    return (loader = matcher(rule)
      ? rule
      : getLoader(rule.use || rule.oneOf || [], matcher));
  });

  return loader;
};

const tsLoaderMatcher = rule => loaderNameMatches(rule, 'ts-loader')
const getTsLoader = rules => getLoader(rules, tsLoaderMatcher)

function injectAwesomeTypeScriptLoader(config, env) {
  const tsLoader = getTsLoader(config.module.rules);

  tsLoader.loader = require.resolve('awesome-typescript-loader')
  tsLoader.options = {
    babelOptions: {},
    errorsAsWarnings: env === 'development',
    useBabel: true,
    useCache: true,
    reportFiles: [
      "src/**/*.{ts,tsx}",
    ],
  };

  return config;
}

module.exports = (config, env) => {
  config.resolve = config.resolve || {};
  config.resolve.plugins = [new TsConfigPathsPlugin()]
    .concat(config.resolve.plugins || []);

  return injectAwesomeTypeScriptLoader(config, env);
}
